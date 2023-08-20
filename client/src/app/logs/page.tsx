"use client";

import Loading from "@/components/common/Loading";
import UploadBox from "@/components/common/UploadBox";
import PreviousScans from "@/components/logs/PreviousScans";
import Vulnerabilities from "@/components/logs/Vulnerabilities";
import { PREVIOUS_SCANS } from "@/lib/constants";
import { useEffect, useState } from "react";

const Logs = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [prevScans, setPrevScans] = useState(PREVIOUS_SCANS.reverse());
  useEffect(() => {
    if (isUploaded) {
      setPrevScans((prev) => {
        return [
          {
            label: "OpenSSH 20-08-2023",
            description:
              "210 logs scanned, 2 critical vulnerabilities and 7 warnings found",
          },
          ...PREVIOUS_SCANS.reverse(),
        ];
      });
    }
  }, [isUploaded]);
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
      {isUploaded && (
        <div className="flex flex-col w-full">
          <h1 className="text-lg mt-2 py-2">Anomalies detected:</h1>
          <Vulnerabilities />
        </div>
      )}
      <PreviousScans data={prevScans} />
    </div>
  );
};

export default Logs;
