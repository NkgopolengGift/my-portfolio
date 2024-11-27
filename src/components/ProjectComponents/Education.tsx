import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Education = () => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <h2 className="text-3xl font-robert-medium mb-4 text-center text-blue-500">
        Education & Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              Senior Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center font-robert-medium text-lg">
                <strong>Year:</strong> 2020
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>School:</strong> Machepelele Secondary School
              </p>
              <p className="text-left font-robert-medium text-lg">
                Completed my senior certificate with a focus on mathematics and
                science.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              Computer Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center font-robert-medium text-lg">
                <strong>Year:</strong> 2025
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>University:</strong> Tshwane University of Technology
              </p>
              <p className="text-left font-robert-medium text-lg">
                I'm graduating this year with a Diploma in Computer Science,
                having gained extensive knowledge in software development and
                algorithms.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              AWS .NET Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center font-robert-medium text-lg">
                <strong>Year:</strong> 2023
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>Institute:</strong> AWS Academy
              </p>
              <p className="text-left font-robert-medium text-lg">
                Gained foundational knowledge in .NET development and explored
                basic cloud solutions, including their integration with .NET
                applications on AWS.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              CCNA Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center  font-robert-medium text-lg">
                <strong>Year:</strong> 2023
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>Institute:</strong> Cisco Networking Academy at TUT
              </p>
              <p className="text-left font-robert-medium text-lg">
                Achieved CCNA certification. Gained expertise in networking
                fundamentals, routing, switching, and network security.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
