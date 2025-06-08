import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    // {
    //   name: "Projects",
    //   dropdown: true,
    //   children: [
    //     { name: "Web Development", path: "/projects/web" },
    //     { name: "UI/UX Design", path: "/projects/uiux" },
    //     { name: "API Integrations", path: "/projects/api" },
    //   ],
    // },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src="/images/emtech.png" alt="logo" className="h-14" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium relative">
          {navLinks.map((link) => (
            // link.dropdown ? (
            //   <li
            //     key={link.name}
            //     className="relative group"
            //     onMouseEnter={() => setShowDropdown(true)}
            //     onMouseLeave={() => setShowDropdown(false)}
            //   >
            //     <button className="flex items-center gap-1 hover:text-secondary">
            //       {link.name} <ChevronDown size={18} />
            //     </button>
            //     {showDropdown && (
            //       <ul className="absolute top-4 right- mt-2 w-48 bg-white shadow-lg rounded-lg p-4 space-y-2 z-10">
            //         {link.children.map((child) => (
            //           <li key={child.name}>
            //             <Link
            //               to={child.path}
            //               className="block px-3 py-1 hover:bg-[#f5f5f5] rounded text-sm"
            //             >
            //               {child.name}
            //             </Link>
            //           </li>
            //         ))}
            //       </ul>
            //     )}
            //   </li>
            // ) : (
            <li key={link.name}>
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-secondary font-semibold"
                        : "hover:text-secondary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-8 pl-6 text-gray-800 font-medium">
            {navLinks.map((link) => (
              // link.dropdown ? (
              //   <li key={link.name}>
              //     <span className="font-semibold">{link.name}</span>
              //     <ul className="ml-4 mt-2 space-y-2 text-sm">
              //       {link.children.map((child) => (
              //         <li key={child.name}>
              //           <Link
              //             to={child.path}
              //             onClick={() => setIsOpen(false)}
              //             className="block hover:text-secondary transition-colors duration-300"
              //           >
              //             {child.name}
              //           </Link>
              //         </li>
              //       ))}
              //     </ul>
              //   </li>
              // ) :
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-secondary font-semibold"
                        : "hover:text-secondary"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
