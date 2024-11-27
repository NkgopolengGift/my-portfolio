import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggleButton } from "@/components/MyComponents/ThemeToggleButton";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-background dark:bg-background sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="text-foreground text-3xl font-bold font-robert-medium">
              Portfolio
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={handleToggle}
              className="text-foreground focus:outline-none"
            >
              <TiThMenu />
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block bg-background dark:bg-background" : "hidden"
            } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="flex flex-col  lg:flex-row lg:ml-auto lg:space-x-6 mr-10">
              <li>
                <Link
                  to="/"
                  onClick={handleClose}
                  className="text-foreground block px-6 py-3 rounded-md text-base font-robert-medium hover:bg-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/specialities"
                  onClick={handleClose}
                  className="text-foreground block px-6 py-3 rounded-md text-base font-robert-medium hover:bg-primary"
                >
                  Specialities
                </Link>
              </li>
              <li>
                <Link
                  to="/career-highlights"
                  onClick={handleClose}
                  className="text-foreground block px-6 py-3 rounded-md text-base font-robert-medium hover:bg-primary"
                >
                  Career-Highlights
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={handleClose}
                  className="text-foreground block px-6 py-3 rounded-md text-base font-robert-medium hover:bg-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="text-foreground block px-6 py-3 rounded-md text-base font-robert-medium hover:bg-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div onClick={handleClose}>
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
