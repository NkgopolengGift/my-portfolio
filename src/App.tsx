import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShadCDNThemeProvider } from "@/components/MyComponents/ShadCDNThemeProvider";
import NavBar from "./components/ProjectComponents/NavBar";
import { Hero } from "./components/ProjectComponents/Hero";
import Specialities from "./components/ProjectComponents/Specialities";
import CareerHighlights from "./components/ProjectComponents/CareerHighlights";
import Project from "./components/ProjectComponents/Project";
import ContactMe from "./components/ProjectComponents/ContactMe";

const App = () => {
  return (
    <ShadCDNThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col h-screen">
          <NavBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/specialities" element={<Specialities />} />
              <Route path="/career-highlights" element={<CareerHighlights />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ShadCDNThemeProvider>
  );
};

export default App;
