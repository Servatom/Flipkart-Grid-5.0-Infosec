import LineGraph from "@/components/common/LineGraph";
import WarningItem from "@/components/common/WarningItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LINECHART_DATA, WARNING_ITEMS } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-lg">Log Anomalies Detected</CardTitle>
          </CardHeader>
          <CardContent className="p-4 -ml-8">
            <LineGraph data={LINECHART_DATA} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Threats</CardTitle>
            <CardDescription>
              2 Critical and 3 Minor threats were detected this month.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4 flex flex-col">
            {WARNING_ITEMS.map((item, index) => (
              <WarningItem key={index} label={item.label} type={item.type} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
