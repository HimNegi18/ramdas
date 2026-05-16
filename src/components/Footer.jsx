import logo from "../assets/images/logo.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const aboutLinks = [
  { label: "Company Overview", to: "/company-overview" },
  { label: "Leadership", to: "/leadership" },
  { label: "Vision Mission", to: "/vision-mission" },
  { label: "Awards & Accolades", to: "/awards-accolades" },
  { label: "Our Journey", to: "/our-journey" },
];

const otherLinks = [
  { label: "Our Clients", to: "/clientele" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
];

const Footer = () => {
  return (
    <footer className="bg-[#e5e7eb] mt-4">
      {/* Main Footer */}
      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 — Logo + Description */}
        <div className="flex flex-col gap-4">
            <img src={logo} alt="Ramdas Logo" className="h-16 w-16" />
          <p className="font-medium text-justify leading-6">
            Ramdas Sales India Pvt.Ltd is a leading pharmaceutical supply chain
            solution provider engaged in C&F, Super Stockist Operations with
            specialization in the Distribution, Logistics, Warehousing, and
            Licensing facilities in Western India.
          </p>
        </div>

        {/* Column 2 — About Us */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold tracking-widest uppercase pb-2
          after:content[''] after:block after:w-27 after:h-0.5 after:bg-[#991b1b]">
            About Us
          </h3>
          <ul className="flex flex-col gap-3">
            {aboutLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}
                  className="nav-link text-black font-medium hover:text-[#03a9f5] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Other Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold tracking-widest uppercase pb-2
           after:content[''] after:block after:w-34 after:h-0.5 after:bg-[#991b1b]">
            Other Links
          </h3>
          <ul className="flex flex-col gap-3">
            {otherLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}
                  className="nav-link text-black font-medium hover:text-[#03a9f5] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Get In Touch */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold tracking-widest uppercase
           pb-2 after:content[''] after:block after:w-37 after:h-0.5 after:bg-[#991b1b]">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-3 font-medium">
              <FaMapMarkerAlt
                className="text-[#991b1b] mt-1 shrink-0"
                size={16}
              />
              <span className="hover:text-[#03a9f5]">
                G-10, Mewad, E S Patanwala Complex, LBSMarg, Ghatkopar West,
                Mumbai - 400086
              </span>
            </li>
            <li className="flex items-center gap-3 font-medium">
              <FaEnvelope className="text-[#991b1b] shrink-0" size={16} />
              <a
                href="mailto:info@ramdas.co.in"
                className="hover:text-[#03a9f5] transition-colors duration-200"
              >
                info@ramdas.co.in
              </a>
            </li>
            <li className="flex items-start gap-3 font-medium">
              <FaPhone className="text-[#991b1b] mt-1 shrink-0" size={16} />
              <span className="hover:text-[#03a9f5]">
                +91 9821307100, <br />
                +91 - 22 - 25002846/ 25000313
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-300 py-4 px-8">
        <p className="text-sm font-medium">
          Copyright © 2024.{" "}
          <a
            href="/"
            className="hover:text-[#991b1b] transition-colors duration-200 font-medium"
          >
            Ramdas Sales India Pvt.Ltd
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
