import { ILoadingProps } from "@/lib/types";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Loader, Loader2 } from "lucide-react";

const Loading: React.FC<ILoadingProps> = ({ label, description }) => {
  return (
    <Card className={` px-4 py-4 `}>
      <CardContent className="flex flex-row items-start p-0">
        <Loader2 className="animate-spin w-10" />
        <div className={`flex flex-col  ml-2 gap-1 w-[calc(100%_-_32px)]`}>
          <span className="">{label}</span>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Loading;
