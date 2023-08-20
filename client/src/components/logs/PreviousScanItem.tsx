import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
const PreviousScanItem: React.FC<{
  label: string;
  description: string;
}> = ({ label, description }) => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{label}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default PreviousScanItem;
