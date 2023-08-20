import { PREVIOUS_SCANS } from "@/lib/constants";
import { Card } from "../ui/card";
import PreviousScanItem from "./PreviousScanItem";

const PreviousScans: React.FC<{
  data: {
    label: string;
    description: string;
  }[];
}> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg mt-2">Recent Scans</h1>
      {data.map((scan, index) => (
        <PreviousScanItem
          key={index}
          label={scan.label}
          description={scan.description}
        />
      ))}
    </div>
  );
};

export default PreviousScans;
