import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface ErrorResponse {
  error: string;
}

const isErrorResponse = (data: unknown): data is ErrorResponse => {
  return typeof data === "object" && data !== null && "error" in data;
};

export const isAxiosError = (data: unknown): data is AxiosError => {
  return typeof data === "object" && data !== null && "isAxiosError" in data;
};

export const handleErrors = async (errorObj: ErrorResponse) => {
  if (!isErrorResponse(errorObj)) return;

  const errorString = errorObj;

  if (errorString) {
    toast.error(`${errorString}`);
  } else {
    toast.error("Ocorreu um erro inesperado, tente mais tarde novamente!");
  }
};
