import { useEffect, useState } from "react";


export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="
      fixed top-0 left-0 w-full 
      flex justify-between items-center 
      px-8 py-2
      bg-gray-900/80 backdrop-blur-lg 
      text-white 
      z-50
    ">      
      <h2 className="text-xl text-blue-400 font-semibold">Penil Hirapara</h2>

      <div className="space-x-6">

        <a 
          href="#home" 
          className={`transition ${
            activeSection === "home" ? "text-green-400 font-semibold" : "hover:text-gray-400"
          }`}
        >
          Home
        </a>

        <a 
          href="#experience" 
          className={`transition ${
            activeSection === "experience" ? "text-green-400 font-semibold" : "hover:text-gray-400"
          }`}
        >
          Experience
        </a>

        <a 
          href="#projects" 
          className={`transition ${
            activeSection === "projects" ? "text-green-400 font-semibold" : "hover:text-gray-400"
          }`}
        >
          Projects
        </a>

        <a 
          href="#skills" 
          className={`transition ${
            activeSection === "skills" ? "text-green-400 font-semibold" : "hover:text-gray-400"
          }`}
        >
          Skills
        </a>

        <a 
          href="#contact" 
          className={`transition ${
            activeSection === "contact" ? "text-green-400 font-semibold" : "hover:text-gray-400"
          }`}
        >
          Contact
        </a>

      </div>
    </div>
  );
}   


