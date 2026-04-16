import React from "react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-scroll";
import logoImg from "../assets/img/farmaciadellassunta.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Logo"
                className="h-12 w-12 bg-white p-1 rounded"
              />
              <span className="text-xl font-semibold">
                Farmacia dell'Assunta
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Da oltre 50 anni al servizio della comunità con professionalità e dedizione.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Farmaciadellassuntagrezzana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <RiFacebookFill size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <RiInstagramFill size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <RiTwitterFill size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <a
                  href="/privacy-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Via Roma, 43</li>
              <li>37023 Grezzana (VR), Italia</li>
              <li>Tel: 045 908 600</li>
              <li>Email: farmaciadellassunta@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 md:py-6">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Farmacia dell'Assunta. Tutti i diritti riservati.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            FARMACIA DELL'ASSUNTA S.N.C. DI LONARDONI GUIDO E MICHELE | P. IVA / C.F. 02615740236
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
