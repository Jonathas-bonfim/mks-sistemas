import { isAxiosError } from "axios";
import { MutationCache, QueryCache, QueryClient } from "react-query";
import { handleErrors } from "./handleErrors/handleError";

export * from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: async (error) => {
      const errorTrace = error;

      if (isAxiosError(errorTrace) && errorTrace) {
        await handleErrors(errorTrace.response?.data);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error) => {
      const errorTrace = error;

      if (isAxiosError(errorTrace) && errorTrace) {
        await handleErrors(errorTrace.response?.data);
      }
    },
  }),
});
