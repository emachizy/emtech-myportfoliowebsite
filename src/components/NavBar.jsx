import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      name: "Web Design And Development",
      path: "/services/web-design",
      description:
        "Custom web design and development solutions that create stunning, responsive websites tailored to your brand",
    },
    {
      name: "Web Application Development",
      path: "/services/web-app",
      description:
        "Powerful, scalable web applications built with modern technologies to streamline your business processes",
    },
    {
      name: "Instagram Growth",
      path: "/services/instagram-growth",
      description:
        "Strategic social media management and growth tactics to expand your Instagram presence and engagement",
    },
    {
      name: "E-Commerce Web Development",
      path: "/services/ecommerce",
      description:
        "Feature-rich e-commerce solutions that provide seamless shopping experiences and boost online sales",
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across devices",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      description:
        "Comprehensive digital marketing strategies to increase your online visibility and drive business growth",
    },
    {
      name: "Project Management",
      path: "/services/project-management",
      description:
        "Professional project management services ensuring efficient delivery and successful implementation",
    },
    {
      name: "Legacy Application Migration",
      path: "/services/legacy-migration",
      description:
        "Seamless migration of legacy systems to modern platforms while preserving functionality and data integrity",
    },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="pr-4 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className=" ">
          <img src="/images/emtechLogo.webp" alt="logo" className="h-20" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium relative">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="flex justify-center items-center gap-1">
                    <Link
                      to={link.path}
                      className="transition-colors duration-300 hover:text-secondary font-bold text-lg text-gray-600"
                    >
                      {link.name}
                    </Link>
                    <button type="button">
                      <ChevronDown
                        size={24}
                        className={`transition-transform scroll-smooth duration-500 ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {showDropdown && (
                    <div className="absolute top-7 -left-72 mt-2 min-w-4xl bg-white shadow-lg rounded-lg border border-gray-100 py-4 px-6 z-50">
                      <div className="px-4 pb-2">
                        <h3 className="text-primary font-semibold text-sm uppercase tracking-wide">
                          SERVICES
                        </h3>
                      </div>
                      <div className="overflow-y-auto grid grid-cols-3 gap-7">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => setShowDropdown(false)}
                            className=""
                          >
                            <h3 className="text-lg">{service.name}</h3>
                            <p className="text-xs text-gray-500">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="transition-colors duration-300 hover:text-secondary font-bold text-lg text-gray-600"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Phone Number (Right side, desktop only) */}
        <div className="hidden md:flex items-center gap-2">
          <FaPhoneAlt className="text-primary text-3xl mr-4" />
          <div className="border-l border-gray-300 pl-4">
            <p className="text-sm font-medium">Call us now:</p>
            <a href="tel:2348165257534" className="text-xl font-medium ">
              +2348165257534
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 relative z-50">
          <ul className="flex flex-col space-y-6 pl-6 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <div className="flex items-center gap-1">
                      <Link
                        to={link.path}
                        className="transition-colors duration-300 hover:text-orange-500 text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {showDropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => {
                              setIsOpen(false);
                              setShowDropdown(false);
                            }}
                            className="block py-2 px-3 text-black font-bold hover:text-orange-500 transition-colors duration-200 text-sm bg-secondary shadow-2xl m-2 text-center rounded-md"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="transition-colors duration-300 hover:text-orange-500 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile phone number */}
            <li className="flex items-center gap- mt-4">
              <FaPhoneAlt className="text-orange-500" />
              <span className="text-sm font-medium">+2348165257534</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
