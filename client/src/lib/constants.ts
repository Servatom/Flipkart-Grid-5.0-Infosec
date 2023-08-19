import { LineChartDataType, TWarningType } from "./types";

export const LINECHART_DATA: LineChartDataType[] = [
  {
    date: new Date(2023, 7, 1),
    value: 1,
  },
  {
    date: new Date(2023, 7, 2),
    value: 1.5,
  },
  {
    date: new Date(2023, 7, 3),
    value: 2,
  },
  {
    date: new Date(2023, 7, 4),
    value: 1,
  },
  {
    date: new Date(2023, 7, 5),
    value: 8,
  },
  {
    date: new Date(2023, 7, 6),
    value: 1,
  },
  {
    date: new Date(2023, 7, 7),
    value: 1,
  },
  {
    date: new Date(2023, 7, 8),
    value: 3,
  },
  {
    date: new Date(2023, 7, 9),
    value: 2,
  },
  {
    date: new Date(2023, 7, 10),
    value: 1,
  },
  {
    date: new Date(2023, 7, 11),
    value: 1,
  },
  {
    date: new Date(2023, 7, 12),
    value: 1,
  },
  {
    date: new Date(2023, 7, 13),
    value: 2,
  },
];

export const WARNING_ITEMS: {
  label: string;
  type: TWarningType;
}[] = [
  {
    label: "Possible Break-In Attempt",
    type: "error",
  },
  {
    label: "Unauthorized FTP Access",
    type: "error",
  },
  {
    label: "Excessive Authentication Failures",
    type: "warning",
  },
  {
    label: "Possible Network Scanning",
    type: "warning",
  },
  {
    label: "Unauthorized Access Attempt",
    type: "warning",
  },
];

export const COMPLIANCE_ITEMS: {
  label: string;
  type: TWarningType;
  description?: string;
}[] = [
  {
    label: "Risk Management and Vulnerability Assessment",
    type: "warning",
    description:
      "Protection within and outside organization borders/network based on sensitivity and risk exposure.",
  },
  {
    label: "Incident Response and Business Continuity",
    type: "warning",
    description:
      "Have BCP/DR capabilities to recover from cyber-attacks/incidents. Participate in cyber drills and test incident response plans.",
  },
];
