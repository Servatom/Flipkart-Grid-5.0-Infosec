"use client";
import Loading from "@/components/common/Loading";
import UploadBox from "@/components/common/UploadBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SIMPLIFIED_COMPLIANCE_ITEMS } from "@/lib/constants";
import ComplianceClusters from "@/components/compliances/ComplianceClusters";

const Compliances = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <UploadBox
        label="Drag and drop the list of compliances in a .xlsx, .csv, or .pdf format"
        isUploaded={isUploaded}
        setIsUploaded={setIsUploaded}
        isUploading={isUploading}
        setIsUploading={setIsUploading}
      />
      {isUploading && (
        <Loading
          label="Loading"
          description={`Analysing the compliances and clustering into categories. This may take a few minutes. Also generating recommendations for test suites and checks for adhering to the compliances.
              These test suites and checks will help ensure that the organization adheres to the compliance requirements in each cluster and maintains a robust cybersecurity posture. Regular testing and validation are essential to identify and address any potential vulnerabilities or non-compliance issues proactively.
              `}
        />
      )}
      {isUploaded && <ComplianceClusters />}
    </div>
  );
};

export default Compliances;
