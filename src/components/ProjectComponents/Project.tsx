import React from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  tools: string;
  image: string;
  github: string;
}

const projects: Project[] = [
  {
    name: "SafeAuth",
    description:
      "A secure and user-friendly password manager application(mobile).",
    tools: "React Native, Spring Boot, PostgreSQL",
    image: "/img/SafeAuth.jpg",
    github: "https://github.com/NkgopolengGift/SafeAuth-mobile",
  },
  {
    name: "Balaudzi Electrical & Projects",
    description:
      "A website created to showcase and manage electrical services provided by Balaudzi Electrical Projects.",
    tools: "HTML, Bootstrap, jQuery, Owl Carousel, JavaScript",
    image: "/img/balaudzi.jpg",
    github: "https://github.com/NkgopolengGift/Balaudzi-Electrical-Projects",
  },
  {
    name: "InfluencerConnect",
    description:
      "A platform designed to connect influencers with potential sponsors by aggregating key statistics from various social media platforms like YouTube, TikTok, Facebook, etc.",
    tools:
      "Django, PostgreSQL, HTML, CSS, JavaScript, YouTube API, Instagram API",
    image: "/img/social stats.png",
    github: "https://github.com/NkgopolengGift/InfluencerConnect",
  },
  {
    name: "JobMatchup",
    description:
      "A platform aimed at helping individuals without formal qualifications find jobs such as cleaner, gardener, and more.",
    tools: "Spring Boot (Java), PostgreSQL, JavaScript, HTML, CSS",
    image: "/img/jobs.avif",
    github: "https://github.com/NkgopolengGift/JobMatchup",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="w-full max-w-[450px] p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-primary bg-card text-card-foreground rounded-lg border border-gray-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-3xl font-robert-medium mb-2">{project.name}</h2>
      <p className="text-lg font-general mb-2">{project.description}</p>
      <p className="text-lg font-general mb-4">
        <strong>Tools:</strong> {project.tools}
      </p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-primary hover:bg-primary-dark p-2 rounded inline-flex items-center"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  );
};

const Project = () => {
  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col items-center justify-center p-6 bg-background text-foreground">
      <h1 className="text-5xl font-robert-medium mb-10 mt-3 underline underline-offset-8 text-blue-500">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
