import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AgencyContext } from "../context/AgencyContext";

const Footer: React.FC = () => {
  const { agency } = useContext(AgencyContext);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Agency Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              {agency.name}
            </h3>
            <p className="font-raleway mb-4">{agency.tagline}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={agency.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-gold-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={agency.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-gold-400 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href={agency.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-gold-400 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="font-raleway space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Join Our Talent Pool
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">
              Our Solutions
            </h3>
            <ul className="font-raleway space-y-2">
              <li>
                <Link
                  to="/#"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Executive Recruitment
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Permanent Placement
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Temporary Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Hospitality Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  Staff Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="font-raleway space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-gold-400 flex-shrink-0 mt-1"
                />
                <span>{agency.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${agency.phone}`}
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  {agency.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${agency.email}`}
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  {agency.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center font-raleway text-sm">
          <p>
            &copy; {currentYear} {agency.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
