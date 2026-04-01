import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="
      fixed top-0 left-0 w-full 
      flex justify-between items-center 
      px-4 md:px-8 py-3
      bg-gray-900/80 backdrop-blur-lg 
      text-white 
      z-50
    ">
      {/* Logo */}
      <h2 className="text-lg md:text-xl text-blue-400 font-semibold">
        Penil Hirapara
      </h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`transition ${
              activeSection === link.id
                ? "text-green-400 font-semibold"
                : "hover:text-gray-400"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="
          absolute top-full left-0 w-full
          bg-gray-900 text-white
          flex flex-col items-center gap-4 py-6
          md:hidden
        ">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-lg transition ${
                activeSection === link.id
                  ? "text-green-400 font-semibold"
                  : "hover:text-gray-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}