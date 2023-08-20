import { LineChartDataType, TWarningType } from "./types";

export const LINECHART_DATA: LineChartDataType[] = [
  {
    date: new Date(2023, 7, 1),
    value: 1,
  },
  {
    date: new Date(2023, 7, 2),
    value: 1.5,
  },
  {
    date: new Date(2023, 7, 3),
    value: 2,
  },
  {
    date: new Date(2023, 7, 4),
    value: 1,
  },
  {
    date: new Date(2023, 7, 5),
    value: 8,
  },
  {
    date: new Date(2023, 7, 6),
    value: 1,
  },
  {
    date: new Date(2023, 7, 7),
    value: 1,
  },
  {
    date: new Date(2023, 7, 8),
    value: 3,
  },
  {
    date: new Date(2023, 7, 9),
    value: 2,
  },
  {
    date: new Date(2023, 7, 10),
    value: 1,
  },
  {
    date: new Date(2023, 7, 11),
    value: 1,
  },
  {
    date: new Date(2023, 7, 12),
    value: 1,
  },
  {
    date: new Date(2023, 7, 13),
    value: 2,
  },
];

export const WARNING_ITEMS: {
  label: string;
  type: TWarningType;
}[] = [
  {
    label: "Possible Break-In Attempt",
    type: "error",
  },
  {
    label: "Unauthorized FTP Access",
    type: "error",
  },
  {
    label: "Excessive Authentication Failures",
    type: "warning",
  },
  {
    label: "Possible Network Scanning",
    type: "warning",
  },
  {
    label: "Unauthorized Access Attempt",
    type: "warning",
  },
];

export const COMPLIANCE_ITEMS: {
  label: string;
  type: TWarningType;
  description?: string;
}[] = [
  {
    label: "Risk Management and Vulnerability Assessment",
    type: "warning",
    description:
      "Protection within and outside organization borders/network based on sensitivity and risk exposure.",
  },
  {
    label: "Incident Response and Business Continuity",
    type: "warning",
    description:
      "Have BCP/DR capabilities to recover from cyber-attacks/incidents. Participate in cyber drills and test incident response plans.",
  },
];

export const SIMPLIFIED_COMPLIANCE_ITEMS = [
  {
    cluster_name: "Asset Management and Inventory",
    requirements: [
      "Maintain an up-to-date inventory of assets, including business data/information, applications, IT infrastructure, key personnel, etc.",
      "Maintain an up-to-date and preferably centralized inventory of authorized/unauthorized software.",
      "Maintain an up-to-date network architecture diagram at the organization level.",
    ],
    test: "Perform regular audits of assets and data to ensure the inventory is up-to-date and accurate.",
    checks:
      "Check for completeness and accuracy of asset records, validate software licenses, and verify the presence of necessary documentation.",
  },
  {
    cluster_name: "Risk Management and Vulnerability Assessment",
    requirements: [
      "Own method of identifying critical assets.",
      "Protection within and outside organization borders/network based on sensitivity and risk exposure.",
      "Periodically conduct vulnerability assessment and penetration testing exercises for critical systems.",
    ],
    test: "Conduct vulnerability assessments and penetration tests periodically.",
    checks:
      "Identify and prioritize critical assets, assess risk exposure, and monitor vulnerability remediation efforts.",
  },
  {
    cluster_name: "Patch Management and Configuration Control",
    requirements: [
      "Continuously monitor and apply security patches.",
      "Document and apply baseline security requirements/configurations to devices.",
      "Evaluate critical device configurations and patch levels.",
    ],
    test: "Perform patch management audits and validate patch application procedures.",
    checks:
      "Check for the presence of security patches on critical systems and verify configuration settings against established baselines.",
  },
  {
    cluster_name: "Access Control and Authentication",
    requirements: [
      "Implement central authentication and authorization system.",
      "Limit media types and information transferred to/from devices.",
      "Implement controls for remote management/wiping/locking of mobile devices.",
    ],
    test: "Conduct access control and authentication tests, including penetration testing on authentication mechanisms.",
    checks:
      "Verify proper implementation of two-factor/multi-factor authentication, review access logs for unauthorized access attempts, and ensure strong password policies are enforced.",
  },
  {
    cluster_name: "Incident Response and Business Continuity",
    requirements: [
      "Implement an incident response program and written incident response procedures.",
      "Have BCP/DR capabilities to recover from cyber-attacks/incidents.",
      "Participate in cyber drills and test incident response plans.",
    ],
    test: "Conduct simulated cyber incident scenarios (cyber drills) and test the incident response plan's effectiveness.",
    checks:
      "Review incident response procedures, evaluate communication and coordination during drills, and assess recovery capabilities during business continuity tests.",
  },
  {
    cluster_name: "Data Protection and Leakage Prevention",
    requirements: [
      "Develop a data loss/leakage prevention strategy.",
      "Implement mechanisms against installation and execution of malicious code.",
    ],
    test: "Perform data leakage prevention tests and verify encryption mechanisms.",
    checks:
      "Check for the presence of data leakage prevention controls, validate data encryption methods, and conduct audits on data handling processes.",
  },
  {
    cluster_name: "Transaction and Fraud Monitoring",
    requirements: [
      "Implement risk-based transaction monitoring/surveillance process.",
      "Notify customers of specified value transactions.",
      "Develop metrics for key performance indicators and key risk indicators.",
    ],
    test: "Evaluate the effectiveness of transaction monitoring systems through test scenarios.",
    checks:
      "Monitor key risk indicators, verify timely notification of high-value transactions to customers, and conduct fraud detection tests.",
  },
  {
    cluster_name: "Awareness and Training",
    requirements: [
      "Define and communicate security policy to users/employees, vendors, and partners.",
      "Conduct cybersecurity awareness programs for employees, targeted training for key personnel, and customer awareness programs.",
    ],
    test: "Conduct cybersecurity awareness training sessions and assess knowledge retention through quizzes.",
    checks:
      "Monitor attendance and participation in awareness programs, and periodically evaluate employee and customer awareness levels.",
  },
  {
    cluster_name: "External Relationships and Vendor Management",
    requirements: [
      "Ensure security risks are managed in outsourced and partner arrangements.",
      "Regularly conduct due diligence and oversight of third-party vendors/service providers.",
    ],
    test: "Perform third-party vendor assessments and security audits.",
    checks:
      "Validate compliance of vendors with security policies, review vendor contracts, and ensure background checks for vendor personnel.",
  },
  {
    cluster_name: "Email and Communication Security",
    requirements: [
      "Implement secure mail and messaging systems.",
      "Protect customer access credentials and disallow administrative rights on end-user workstations.",
    ],
    test: "Conduct email security tests for phishing and malware detection.",
    checks:
      "Review email server configurations, assess anti-phishing measures, and verify secure communication protocols.",
  },
  {
    cluster_name: "Environmental Controls and Monitoring",
    requirements: [
      "Implement environmental controls for securing critical assets' location.",
      "Mechanisms for monitoring breaches of environmental controls.",
    ],
    test: "Conduct tests to verify the functionality of environmental monitoring systems.",
    checks:
      "Regularly review environmental control measures and validate alerts for abnormal conditions.",
  },
  {
    cluster_name: "Identity and Access Management for Customers",
    requirements: [
      "Implement authentication mechanism for customer identification.",
      "Act as the identity provider for customers accessing partner systems.",
    ],
    test: "Perform tests to assess the effectiveness of customer authentication mechanisms.",
    checks:
      "Monitor access logs for suspicious customer activities, validate identity verification processes, and review customer access privileges.",
  },
];

export const PREVIOUS_SCANS: {
  label: string;
  description: string;
}[] = [
  {
    label: "HDFS 19-08-2023",
    description:
      "2500 logs scanned, 2 critical vulnerabilities and 3 warnings found",
  },
  {
    label: "OpenSSH 20-08-2023",
    description:
      "2460 logs scanned, 0 critical vulnerabilities and 1 warnings found",
  },
  {
    label: "Apache 20-08-2023",
    description:
      "2100 logs scanned, 1 critical vulnerabilities and 6 warnings found",
  },
  {
    label: "HDFS 20-08-2023",
    description:
      "2500 logs scanned, 3 critical vulnerabilities and 3 warnings found",
  },
];
