"use client";
import Loading from "@/components/common/Loading";
import UploadBox from "@/components/common/UploadBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Compliances = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <UploadBox />
      <Loading
        label="Loading"
        description="Analysing the compliances and clustering into categories. This may take a few minutes. Also generating recommendations for test suites and checks for adhering to the compliances."
      />
    </div>
  );
};

export default Compliances;
