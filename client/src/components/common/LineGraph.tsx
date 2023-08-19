"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const CustomizedAxisTick = (...args: any) => {
  const { x, y, stroke, payload } = args[0];
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const LineGraph: React.FC<{
  data: any;
}> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            // Convert date to string in the form of DD/MM
            (value as Date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "numeric",
            })
          }
        />
        <YAxis
          stroke="#888888"
          dataKey="value"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="value" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
