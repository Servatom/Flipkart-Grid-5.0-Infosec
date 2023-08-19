import { IWarningItemProps, TWarningType } from "@/lib/types";
import { Card, CardContent } from "../ui/card";
import { AlertCircle, AlertTriangle, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const WarningItem: React.FC<IWarningItemProps> = ({
  label,
  type,
  description,
}) => {
  const config: {
    [key in TWarningType]: {
      color: string;
      bgColor: string;
      icon: ReactNode;
    };
  } = {
    error: {
      color: "text-red-400",
      bgColor: "bg-red-400 outline outline-red-400",
      icon: <AlertCircle className="text-red-400 mt-0.5" size={20} />,
    },
    warning: {
      color: "text-yellow-500",
      bgColor: "bg-yellow-500 outline outline-yellow-500",
      icon: <AlertTriangle className="text-yellow-500 mt-0.5" size={20} />,
    },
  };
  return (
    <Card
      className={` bg-opacity-[.15] p-2 ${config[type].bgColor} cursor-pointer`}
    >
      <CardContent className="flex flex-row items-start p-0">
        {config[type].icon}
        <div className={`flex flex-col ml-2 ${config[type].color}`}>
          <span className="">{label}</span>
          {description && (
            <p className="text-xs text-gray-300">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WarningItem;
