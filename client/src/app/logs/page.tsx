"use client";
import Loading from "@/components/common/Loading";
import UploadBox from "@/components/common/UploadBox";
import { useState } from "react";

const Logs = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <UploadBox
        label="Drag and Drop a new log file"
        isUploaded={isUploaded}
        setIsUploaded={setIsUploaded}
        isUploading={isUploading}
        setIsUploading={setIsUploading}
      />
      {isUploading && (
        <Loading
          label="Loading"
          description={` Scanning log file to identify potential vulnerabilities and non-compliance issues. This may take a few minutes. `}
        />
      )}
    </div>
  );
};

export default Logs;
