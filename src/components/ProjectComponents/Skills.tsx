import React from "react";
import {
  FaJava,
  FaJs,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGit,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiCsharp,
  SiTailwindcss,
} from "react-icons/si";
import { SkillsCard } from "@/components/MyComponents/SkillsCard";

const Skills = () => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <h2 className="text-3xl font-robert-medium mb-8 underline text-center text-blue-500">
        Programming Languages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <SkillsCard
          icon={<FaJava className="text-6xl text-red-500 mb-4" />}
          name="Java"
          level={4}
        />
        <SkillsCard
          icon={<FaJs className="text-6xl text-yellow-500 mb-4" />}
          name="JavaScript"
          level={4}
        />
        <SkillsCard
          icon={<FaPython className="text-6xl text-blue-500 mb-4" />}
          name="Python"
          level={3}
        />
        <SkillsCard
          icon={<FaCss3Alt className="text-6xl text-blue-500 mb-4" />}
          name="CSS"
          level={3}
        />
        <SkillsCard
          icon={<FaHtml5 className="text-6xl text-orange-500 mb-4" />}
          name="HTML"
          level={4}
        />
        <SkillsCard
          icon={<SiCsharp className="text-6xl text-purple-500 mb-4" />}
          name="C#"
          level={2}
        />
      </div>

      <h2 className="text-3xl font-robert-medium mt-8 mb-8 underline text-center text-blue-500">
        Frameworks & Libraries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <SkillsCard
          icon={<SiSpringboot className="text-6xl text-green-500 mb-4" />}
          name="Spring Boot"
        />
        <SkillsCard
          icon={<FaReact className="text-6xl text-blue-500 mb-4" />}
          name="React"
        />
        <SkillsCard
          icon={<SiDjango className="text-6xl text-green-500 mb-4" />}
          name="Django"
        />
        <SkillsCard
          icon={<FaNodeJs className="text-6xl text-green-500 mb-4" />}
          name="Node.js"
        />
        <SkillsCard
          icon={<FaReact className="text-6xl text-blue-500 mb-4" />}
          name="React Native"
        />
        <SkillsCard
          icon={<SiTailwindcss className="text-6xl text-blue-500 mb-4" />}
          name="Tailwind"
        />
      </div>

      <h2 className="text-3xl font-robert-medium mt-8 mb-8 underline text-center text-blue-500">
        Tools & Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <SkillsCard
          icon={<FaLinux className="text-6xl text-black mb-4" />}
          name="Linux"
        />
        <SkillsCard
          icon={<FaGit className="text-6xl text-orange-500 mb-4" />}
          name="Git"
        />
        <SkillsCard
          icon={<FaDatabase className="text-6xl text-blue-500 mb-4" />}
          name="MySQL"
        />
        <SkillsCard
          icon={<SiPostgresql className="text-6xl text-blue-500 mb-4" />}
          name="PostgreSQL"
        />
      </div>
    </div>
  );
};

export default Skills;
