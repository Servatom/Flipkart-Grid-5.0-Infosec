const Vulnerabilities: React.FC = () => {
  return (
    // write component for code block using tailwind
    <pre className="bg-gray-700 bg-opacity-25 p-8 rounded-md overflow-scroll">
      {`Dec 10 06:55:46 - A reverse mapping checking failure from an IP address that suggests a possible break-in attempt. The IP address 173.234.31.186 is attempting to connect with the username webmaster, which is an invalid user.

Dec 10 07:13:31 - A series of failed authentication attempts for the user root from IP address 5.36.59.76.dynamic-dsl-ip.omantel.net.om.

Dec 10 07:27:50 - Failed authentication attempts for the user root from IP address 112.95.230.3.

Dec 10 07:28:03 - Invalid user pgadmin from IP address 112.95.230.3.

Dec 10 07:28:25 - Multiple failed authentication attempts for the user root from IP address 112.95.230.3.

Dec 10 07:28:35 - More failed authentication attempts for the user root from IP address 112.95.230.3.

Dec 10 07:28:45 - The pattern of failed authentication attempts continues for the user root from IP address 112.95.230.3.
`}
    </pre>
  );
};

export default Vulnerabilities;
