import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  AlertCircle,
  FlaskConical,
  HeartPulse,
  Lock,
} from "lucide-react";

const StatCards: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Threats Caught
          </CardTitle>
          <AlertCircle size={16} opacity={0.6} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">43</div>
          <p className="text-xs text-muted-foreground">
            6 threats in the last 30 days
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Logs Analysed</CardTitle>
          <Activity size={16} opacity={0.6} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            since the last log-file upload
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tests Ran</CardTitle>
          <HeartPulse size={16} opacity={0.6} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">67</div>
          <p className="text-xs text-muted-foreground">
            +5 pen-test runs today
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            System Configuration
          </CardTitle>
          <Lock size={16} opacity={0.6} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">118 users</div>
          <p className="text-xs text-muted-foreground">
            across 13 security groups
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
