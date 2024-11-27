import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCode } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MyCard } from "@/components/MyComponents/MyCard";

const Specialities = () => {
  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col items-center p-6 bg-background text-foreground">
      <h1 className="text-5xl font-robert-medium mb-10 mt-3 underline underline-offset-8">
        My <span className="text-blue-500">Specialities</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <MyCard
          leftIcon={<FaCode className="text-4xl text-blue-500" />}
          rightIcon={<FaLaptopCode className="text-4xl text-blue-500" />}
          title="Web Development"
          description="Crafting responsive, user-centric websites using cutting-edge technologies. Explore my portfolio to see how these skills bring ideas to life."
        />
        <MyCard
          leftIcon={<FaCode className="text-4xl text-green-500" />}
          rightIcon={<FaMobileAlt className="text-4xl text-green-500" />}
          title="Mobile Development"
          description="Designing sleek mobile apps for both iOS and Android. Discover projects that showcase smooth user experiences and intuitive designs."
        />
        <MyCard
          leftIcon={<FaCode className="text-4xl text-red-500" />}
          rightIcon={<FaDatabase className="text-4xl text-red-500" />}
          title="Database Design"
          description="Engineering robust databases that ensure data integrity and optimal performance. Check out my work to understand the backbone of great applications."
        />
        <MyCard
          leftIcon={<FaCode className="text-4xl text-yellow-500" />}
          rightIcon={
            <MdOutlineDeveloperMode className="text-4xl text-yellow-500" />
          }
          title="Full Stack Development"
          description="Building robust, scalable applications using modern front-end and back-end technologies. Explore my projects to see my full-stack skills in action."
        />
      </div>
    </div>
  );
};

export default Specialities;
