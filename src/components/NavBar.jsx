import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import {
  Code,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Monitor,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      icon: <Monitor className="text-primary text-3xl" />,
    },
    {
      name: "Web Application Development",
      path: "/services/web-app",
      description:
        "Powerful, scalable web applications built with modern technologies to streamline your business processes",
      icon: <Code className="text-primary text-3xl" />,
    },
    {
      name: "E-Commerce Web Development",
      path: "/services/ecommerce",
      description:
        "Feature-rich e-commerce solutions that provide seamless shopping experiences and boost online sales",
      icon: <ShoppingCart className="text-primary text-3xl" />,
    },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across devices",
      icon: <Smartphone className="text-primary text-3xl" />,
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      description:
        "Comprehensive digital marketing strategies to increase your online visibility and drive business growth",
      icon: <TrendingUp className="text-primary text-3xl" />,
    },
    {
      name: "Legacy Application Migration",
      path: "/services/legacy-migration",
      description:
        "Seamless migration of legacy systems to modern platforms while preserving functionality and data integrity",
      icon: <Cloud className="text-primary text-3xl" />,
    },
  ];

  // Handle navigation clicks (simulated since we don't have React Router)
  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
    setIsOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="pr-4 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className=" ">
          <img
            src="/images/emtechLogo.webp"
            alt="logo"
            className="w-20 md:w-28"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-16 text-gray-800 font-medium relative">
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
                      className="transition-colors duration-300 hover:text-primary font-bold text-[16px] text-gray-600"
                    >
                      {link.name}
                    </Link>
                    <button type="button">
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-500 ${
                          showDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {showDropdown && (
                    <div className="absolute top-5 -left-72 mt-2 w-[900px] bg-white shadow-lg rounded-lg border border-gray-100 py-4 px-6 z-50">
                      <div className="px-4 pb-2">
                        <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                          SERVICES
                        </h3>
                      </div>
                      <div className="grid grid-cols-3 gap-7">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => handleNavClick(service.path)}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition text-left w-full"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0">{service.icon}</div>

                            {/* Text block */}
                            <div>
                              <h3 className="text-lg font-bold text-black mb-1">
                                {service.name}
                              </h3>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="transition-colors duration-300 hover:text-orange-500 font-bold text-[16px] text-gray-600"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Phone Number (Right side, desktop only) */}
        <div className="hidden md:flex items-center gap-2">
          <Phone className="text-blue-600 text-2xl mr-4" />
          <div className="border-l border-gray-300 pl-4">
            <p className="text-sm font-medium leading-tight">Call us now:</p>
            <a
              href="tel:2348165257534"
              className="text-[16px] font-medium leading-tight text-gray-800 hover:text-orange-500"
            >
              +2348165257534
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 relative z-50 bg-white border-t border-gray-100 overscroll-contain">
          <ul className="flex flex-col space-y-6 pl-6 text-gray-800 font-medium py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <div className="flex items-center gap-1">
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link.path)}
                        className="transition-colors duration-300 hover:text-primary text-lg"
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="p-1"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Services Dropdown - Scrollable */}
                    {showDropdown && (
                      <div className="mt-3 ml-4">
                        {/* Scrollable container with fixed height */}
                        <div className="max-h-96 overflow-y-auto overscroll-contain">
                          <div className="space-y-3 pr-2">
                            {serviceItems.map((service, index) => (
                              <Link
                                key={index}
                                to={service.path}
                                onClick={() => handleNavClick(service.path)}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition w-full text-left border border-gray-100 hover:border-gray-200"
                              >
                                {/* Icon */}
                                <div className="flex-shrink-0 mt-1">
                                  {service.icon}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base font-semibold text-black mb-1">
                                    {service.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Scroll indicator */}
                        <div className="text-center mt-2">
                          <div className="inline-flex items-center text-xs text-gray-400">
                            <span>Scroll for more services</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="transition-colors duration-300 hover:text-orange-500 text-lg"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile phone number */}
            <li className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <Phone className="text-orange-500" size={16} />
              <a
                href="tel:2348165257534"
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                +2348165257534
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
