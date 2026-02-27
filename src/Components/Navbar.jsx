import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiPhoneFill } from "react-icons/ri";
import logoImg from "../assets/img/farmaciadellassunta.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "services", label: "Servizi" },
    { to: "blogs", label: "Novità" },
    { to: "about", label: "Chi Siamo" },
    { to: "turns", label: "Turni" },
    { to: "contact", label: "Contatti" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2 md:py-3" : "bg-white/95 py-3 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-lg md:text-xl font-semibold text-accent hidden sm:block">
              Farmacia dell'Assunta
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-accent hover:text-primary cursor-pointer font-medium text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Phone Button */}
            <a
              href="tel:045908600"
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm lg:text-base"
            >
              <RiPhoneFill size={18} className="lg:w-5 lg:h-5" />
              <span className="hidden lg:inline">045 908 600</span>
              <span className="lg:hidden">Chiama</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 pb-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block text-accent hover:text-primary cursor-pointer font-medium text-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Phone Button */}
            <a
              href="tel:045908600"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold mt-4"
            >
              <RiPhoneFill size={20} />
              <span>045 908 600</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
