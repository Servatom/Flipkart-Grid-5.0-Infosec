"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UploadBox: React.FC = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <Card className="px-8 py-16 border-dashed border-2">
      <CardContent className="flex flex-col items-center p-0 gap-8 text-muted-foreground">
        <span>
          Drag and drop the list of compliances in a .xlsx, .csv, or .pdf format
        </span>
        <span className="text-sm">----- or ----</span>
        <div className="flex flex-col items-center gap-2 px-2">
          <label htmlFor="compliance-file" className="w-full text-center">
            Upload File
          </label>
          <Input
            id="compliance-file"
            className="w-fit text-center text-white"
            type="file"
            placeholder="Choose"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadBox;
