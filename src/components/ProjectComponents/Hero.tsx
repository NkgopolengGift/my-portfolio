import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Hero = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Coder", "Tech Enthusiast"],
    loop: true,
    delaySpeed: 2000,
  });

  const aboutImage = "/img/about-1.jpg";

  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:justify-between p-6 bg-background text-foreground">
      <div className="flex flex-col items-center lg:items-center p-12">
        <h1 className="text-5xl font-bold font-robert-medium mb-4">
          <span className="text-blue-500">M</span>amarara{" "}
          <span className="text-blue-500">N</span>kgopoleng{" "}
          <span className="text-blue-500">G</span>ift
        </h1>
        <h2 className="text-3xl mb-4">
          I'm a <span className="text-primary">{text}</span>
          <Cursor cursorColor="var(--primary-foreground)" />
        </h2>
        <p className="text-left lg:text-left lg:text-lg max-w-md mb-4 hidden lg:block font-robert-regular">
          Welcome to my <span className="text-blue-500">portfolio</span>! I'm a
          passionate software developer driven to create impactful solutions. My
          mission is to make software that not only meets but exceeds user
          expectations by streamlining processes, enhancing security, and
          providing valuable insights. Dive into my projects and see how I
          transform complex problems into elegant solutions. Explore my journey,
          discover my work, and connect with me to collaborate on making a
          positive impact through technology.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/NkgopolengGift"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-2 hover:bg-primary transition-transform transform duration-300 rounded-md hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nkgopolenggift/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-2 hover:bg-primary transition-transform transform duration-300 rounded-md hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@nkgopoleng_gift"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-2 hover:bg-primary transition-transform transform duration-300 rounded-md hover:scale-110"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-6 lg:mr-20">
        <div className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <img
            src={aboutImage}
            alt="Nkgopoleng Gift"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-4 border-primary rounded-full border-dashed animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};
