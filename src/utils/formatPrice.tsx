export interface FormatPriceProps {
  value: number;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
}


export function FormatPrice({ value, minimumFractionDigits, maximumFractionDigits }: FormatPriceProps) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  }).format(value);
}