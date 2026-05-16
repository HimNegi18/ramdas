import logo from "../assets/images/logo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };
  return (
    <>
    <header className="sticky top-0 z-50 bg-white flex h-22 justify-around items-center font-semibold shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16" />
        <Link to="/" className="uppercase text-md md:text-[20px] text-red hover:text-[#03a9f5]">
          ramdas sales india pvt. ltd.
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex text-[16px] line-height-[24px]  gap-6">
          <li className="py-1">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="group relative py-1">
            <a href="#about" className=" nav-link">
              About Us
            </a>
            <ul className="absolute -left-6 mt-2 space-y-2 bg-white border border-gray-200
             invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100">
              <li className="hover:bg-[#A2272E] w-[250px] text-gray-800 hover:text-white px-6">
                <Link
                  to="/company-overview"
                  className="block hover:text-[#ffffff]  py-2  "
                >
                  Company Overview
                </Link>
              </li>
              <li className="hover:bg-[#A2272E] w-[250px] text-gray-800 hover:text-white px-6">
                <Link
                  to="/leadership"
                  className="block hover:text-[#ffffff]  py-2  "
                >
                  Leadership
                </Link>
              </li>
              <li className="hover:bg-[#A2272E] w-[250px] text-gray-800 hover:text-white px-6">
                <Link
                  to="/vision-mission"
                  className="block hover:text-[#ffffff]  py-2  "
                >
                  Vision Mission
                </Link>
              </li>
              <li className="hover:bg-[#A2272E] w-[250px] text-gray-800 hover:text-white px-6">
                <Link
                  to="/awards-accolades"
                  className="block hover:text-[#ffffff]  py-2  "
                >
                  Awards & Accolades
                </Link>
              </li>
              <li className="hover:bg-[#A2272E] w-[250px] text-gray-800 hover:text-white px-6">
                <Link
                  to="/our-journey"
                  className="block hover:text-[#ffffff]  py-2  "
                >
                  Our Journey
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-1">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="py-1">
            <Link to="/clientele" className="nav-link">
              Clientele
            </Link>
          </li>
          <li className="py-1">
            <Link to="/infrastructure" className="nav-link">
              Infrastructure
            </Link>
          </li>
          <li className="py-1">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="py-1">
            <Link to="/careers " className="nav-link">
              Careers
            </Link>
          </li>
          <li className="py-1">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {!isDropdownOpen && (
        <RxHamburgerMenu
          size={30}
          className="lg:hidden cursor-pointer"
          onClick={toggleDropdown}
        />
      )}
      {isDropdownOpen && (
        <IoMdClose size={30} className="lg:hidden cursor-pointer" onClick={toggleDropdown} />
      )}
    {/* Mobile Dropdown Menu */}
     {isDropdownOpen && (
        <div className="absolute lg:hidden bg-white w-full left-0 top-22 font-normal ">
          <ul className="text-[18px] leading-7">
            <li className="mx-8 px-2 py-3 pop-in cursor-pointer" onClick={toggleDropdown}>
              <Link  to="/">Home</Link>
            </li>
            <li className="mx-8 pop-in cursor-pointer">
              <div className="flex justify-between px-2 py-3" onClick={toggleAbout}>
                <a href="#">About Us</a>
                {!isAboutOpen && <MdKeyboardArrowDown size={30} color="#991b1b"/>}
                {isAboutOpen && <MdKeyboardArrowUp size={30} color="#991b1b"/>}
              </div>
              {
                isAboutOpen && (
                <ul >
                <li className="px-5 pb-4" onClick={toggleDropdown}>
                  <Link to="/company-overview">Company Overview</Link>
                </li>
                <li className="px-5 pb-4" onClick={toggleDropdown}>
                  <Link to="/leadership">Leadership</Link>
                </li>
                <li className="px-5 pb-4" onClick={toggleDropdown}>
                  <Link to="/vision-mission">Vision Mission</Link>
                </li>
                <li className="px-5 pb-4" onClick={toggleDropdown}>
                  <Link to="/awards-accolades">Awards & Accolades</Link>
                </li>
                <li className="px-5" onClick={toggleDropdown}>
                  <Link to="/our-journey">Our Journey</Link>
                </li>
              </ul>
                )
              }
              
            </li>
            <li className="mx-8 px-2 py-3 pop-in cursor-pointer" onClick={toggleDropdown}>
              <Link to="/services">Services</Link>
            </li>
            <li className="mx-8 px-2 py-3 pop-in cursor-pointer" onClick={toggleDropdown}>
              <Link to="/clientele">Clientele</Link>
            </li>
            <li className="mx-8 px-2 py-3 pop-in cursor-pointer" onClick={toggleDropdown}>
              <Link to="/infrastructure">Infrastructure</Link>
            </li>
            <li className="mx-8 px-2 py-3 pop-in cursor-pointer" onClick={toggleDropdown}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="mx-8 px-2 py-3 pop-in cursore-pointer" onClick={toggleDropdown}>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
    </>
    
  );
};

export default Navbar;
