import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

interface SkillsCardProps {
  icon: React.ReactNode;
  name: string;
  level?: number;
}

export function SkillsCard({ icon, name, level }: SkillsCardProps) {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${
          index < (level || 0) ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
      <CardHeader className="flex justify-center items-center">
        <div className="ml-2 transition-transform duration-200 ease-in-out transform hover:scale-110">
          {React.isValidElement(icon) &&
            React.cloneElement(icon as React.ReactElement, {
              className: `${
                (icon as React.ReactElement).props?.className || ""
              } transition-colors duration-200 ease-in-out hover:text-accent`,
            })}
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-center text-3xl font-robert-medium mb-4">
          {name}
        </CardTitle>
        {level !== undefined && (
          <CardDescription className="text-center font-general">
            <div className="flex justify-center">{renderStars()}</div>
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
