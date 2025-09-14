import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs = [],
  showHomeIcon = true,
  overlayOpacity = "bg-black/50",
  showSearch = false, // NEW
  searchQuery = "",
  onSearch = () => {}, // NEW
}) => {
  return (
    <section
      className="relative w-full h-96 md:h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center items-center justify-center md:justify-between gap-6">
            {/* Left Side - Title, Subtitle & Optional Search */}
            <div className="text-white text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                  {subtitle}
                </p>
              )}

              {/* 🔍 Search Bar (Only if showSearch is true) */}
              {showSearch && (
                <div className="mt-6 max-w-md mx-auto md:mx-0 relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full px-6 py-4 pl-12 rounded-full bg-white/10 text-white placeholder-gray-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  />
                  <svg
                    className="absolute left-4 top-5 w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Right Side - Breadcrumbs */}
            <div className="flex items-center space-x-2 text-white/90">
              {showHomeIcon && <Home className="w-4 h-4" />}
              <Link to="/" className="text-xs md:text-base font-medium">
                HOME
              </Link>

              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <span className="text-white/60">○</span>
                  <span className="text-sm md:text-base font-medium uppercase">
                    {breadcrumb}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-12 md:h-16 text-white/10"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..."
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86..."
            opacity=".5"
            fill="currentColor"
          />
          <path d="M0,0V5.63C149.93,59,314.09..." fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
