export type LineChartDataType = {
  date: Date;
  value: number;
};

export interface IWarningItemProps {
  label: string;
  type: TWarningType;
}

export type TWarningType = "warning" | "error";
