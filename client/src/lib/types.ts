export type LineChartDataType = {
  date: Date;
  value: number;
};

export interface IWarningItemProps {
  label: string;
  type: TWarningType;
  description?: string;
}

export type TWarningType = "warning" | "error";

export interface ILoadingProps {
  label: string;
  description?: string;
}
