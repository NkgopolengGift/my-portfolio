import { useState } from "react";
import Experience from "@/components/ProjectComponents/Experience";
import Education from "@/components/ProjectComponents/Education";
import Skills from "@/components/ProjectComponents/Skills";

const CareerHighlights = () => {
  const [view, setView] = useState("Experience");

  const renderContent = () => {
    switch (view) {
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Skills":
        return <Skills />;
      default:
        return <Experience />;
    }
  };

  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col lg:flex-row items-start lg:items-start p-6 bg-background text-foreground">
      <div className="w-full lg:w-1/3 p-3 lg:sticky lg:top-0 lg:h-screen flex flex-col items-center">
        <h1 className="text-5xl font-robert-medium mb-6 mt-3 underline underline-offset-8 text-blue-500 text-center">
          My Career Highlight
        </h1>
        <div className="space-y-4 w-full">
          <button
            onClick={() => setView("Experience")}
            className={`w-full p-2 text-lg rounded ${
              view === "Experience"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setView("Education")}
            className={`w-full p-2 text-lg rounded ${
              view === "Education"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Education & Certificates
          </button>
          <button
            onClick={() => setView("Skills")}
            className={`w-full p-2 text-lg rounded ${
              view === "Skills"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Skills
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-4 h-full overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default CareerHighlights;
