import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface myCardProps {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  title: string;
  description: string;
}

export function MyCard({
  leftIcon,
  rightIcon,
  title,
  description,
}: myCardProps) {
  return (
    <Card className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground">
      <CardHeader className="flex justify-between items-center">
        <div className="flex w-full justify-between">
          <div className="ml-2">{leftIcon}</div>
          <div className="mr-2">{rightIcon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-3xl font-robert-medium mb-4">
          {title}
        </CardTitle>
        <CardDescription className="text-center font-general">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
