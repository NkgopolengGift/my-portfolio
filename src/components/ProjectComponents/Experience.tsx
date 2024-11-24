import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <h2 className="text-3xl font-robert-medium mb-4">My Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              Software Developer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center font-robert-medium text-lg">
                <strong>Year:</strong> 01 August 2024 - 31 January 2025
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>Company:</strong> Unitac Solutions
              </p>
              <p className="text-left font-robert-medium text-lg">
                Volunteered to gain valuable experience in the tech industry.
                Assisted in mobile development, web development (web
                applications), Git version control, and database design. This
                opportunity significantly enhanced my skills and understanding
                of real-world projects. Check out the results of these efforts
                in my portfolio
              </p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-robert-medium mb-4">
              Website development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center font-general">
              <p className="text-center font-robert-medium text-lg">
                <strong>Year:</strong> July 2024
              </p>
              <p className="text-left font-robert-medium text-lg underline">
                <strong>Company:</strong> Balaudzi Electrical & Projects
              </p>
              <p className="text-left font-robert-medium text-lg">
                Designed and developed a website for showcasing and managing the
                electrical services offered by Balaudzi Electrical & Projects.
                The site included a portfolio section to display past projects
                and a contact form for new service inquiries. The site provided
                a professional layout and smooth user experience. Unfortunately,
                the website was not hosted.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
