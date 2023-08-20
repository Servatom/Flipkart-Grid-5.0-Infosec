"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UploadBox: React.FC<{
  label: string;
  isUploaded: boolean;
  isUploading: boolean;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUploading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ label, isUploaded, setIsUploaded, setIsUploading, isUploading }) => {
  const onUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
    }, 6000);
  };
  return (
    <Card className="px-8 pt-16 border-dashed border-2">
      <CardContent className="flex flex-col items-center p-0 gap-8 text-muted-foreground">
        <span>{label}</span>
        <span className="text-sm">----- or ----</span>
        <div className="flex flex-col items-center gap-2 px-2">
          <label
            htmlFor="compliance-file"
            className="w-full text-center text-sm p-2 rounded border-2 border-border cursor-pointer"
          >
            Upload File
          </label>
          <Input
            id="compliance-file"
            className="w-fit text-center text-white invisible"
            type="file"
            placeholder="Choose"
            onChange={onUpload}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadBox;
