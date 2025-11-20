import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Home", "About Me", "Projects", "Contact"];

  // Detect scroll for navbar background (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && window.innerWidth >= 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll on click
  const handleScroll = (id) => {
    const element = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  // 👇 Scroll Spy — update active section based on scroll position
  useEffect(() => {
    const handleSectionHighlight = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const section = document.getElementById(
          link.toLowerCase().replace(" ", "-")
        );
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionHighlight);
    return () => window.removeEventListener("scroll", handleSectionHighlight);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => handleScroll("Home")}
          className="text-3xl font-bold text-white"
        >
          Portfolio
        </button>

        <ul className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className={`transition-colors duration-300 cursor-pointer ${
                  activeSection === link
                    ? "text-purple-500 font-semibold"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer focus:outline-none text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} className="text-white cursor-pointer" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-y-6 mt-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className={`text-lg transition-colors duration-300 ${
                  activeSection === link
                    ? "text-purple-500 font-semibold"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
