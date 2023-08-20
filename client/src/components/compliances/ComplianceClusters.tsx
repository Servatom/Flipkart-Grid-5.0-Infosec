import { SIMPLIFIED_COMPLIANCE_ITEMS } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const ComplianceClusters: React.FC = () => {
  return (
    <Card className="flex flex-col gap-4 p-8">
      <CardDescription>
        Based on the provided list, we can group the compliances into the
        following clusters based on their similarity:
      </CardDescription>
      {SIMPLIFIED_COMPLIANCE_ITEMS.map((cluster, index) => (
        <div key={index} className="my-4">
          <CardTitle>• {cluster.cluster_name}</CardTitle>
          <CardContent className="p-0">
            <ul className="flex flex-col gap-1 py-2">
              {cluster.requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="text-sm list-item list-inside text-muted-foreground"
                >
                  - {requirement}
                </li>
              ))}
            </ul>
          </CardContent>
          <div className="grid grid-cols-2 gap-8">
            <Card className="p-4">
              <CardTitle className="text-base">Test Suite</CardTitle>
              <CardDescription>{cluster.test}</CardDescription>
            </Card>
            <Card className="p-4">
              <CardTitle className="text-base">Recommended Checks</CardTitle>
              <CardDescription>{cluster.checks}</CardDescription>
            </Card>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default ComplianceClusters;
