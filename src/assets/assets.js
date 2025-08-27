import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import seo_icon from "./seo-icon.svg";
import web_development_icon from "./web-development-icon.svg";
import mobile_app_icon from "./mobile-app-icon.svg";
import ui_ux_design_icon from "./ui-ux-design-icon.svg";
import { PiWatch } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";

export const socialLinks = [
  {
    name: "instagram",
    url: "https://www.instagram.com/yourprofile",
    icon: FaInstagram,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/yourprofile",
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern websites using the latest technologies.",
    icon: web_development_icon,
    // clientLogo: "/images/bb41.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for both iOS and Android platforms.",
    icon: mobile_app_icon,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces with a focus on user experience.",
    icon: ui_ux_design_icon,
  },
  {
    title: "SEO Optimization",
    description:
      "Improving website visibility and search engine rankings through effective SEO strategies.",
    icon: seo_icon,
  },
];

export const projectCategories = [
  "All",
  "Portfolio",
  "Landing Page",
  "Ecommerce",
  "Blog",
  "Multi-Page Website",
  "Fullstack",
];

export const projects = [
  {
    id: 1,
    title: "FetchMonie",
    image: "/images/fetchMonie.webp",
    category: ["Landing Page", "Multi-Page Website", "Fullstack"],
    demo: "https://fetchmonie.com/",
  },

  {
    id: 3,
    title: "Eveline Beauty Services",
    image: "/images/evelyn-website-photo.webp",
    category: ["Ecommerce", "Multi-Page Website", "Fullstack"],
    demo: "https://eveline-beauty-world.vercel.app/",
    code: "https://github.com/emachizy/eveline-beauty-world",
  },
  {
    id: 4,
    title: "The Compass Trybe",
    image: "/images/compass-website-img.webp",
    category: ["Blog", "Multi-Page Website"],
    demo: "https://compass-trybe.vercel.app/",
    code: "https://github.com/emachizy/compass-trybe",
  },
  {
    id: 5,
    title: "SculptArt Fitness Center",
    image: "/images/sculptart.webp",
    category: "Multi-Page Website",
    demo: "https://sculptartfitness.vercel.app/",
    code: "https://github.com/emachizy/sculptartfitness",
  },
  {
    id: 6,
    title: "Movie Recommendation App",
    image: "/images/movie.webp",
    category: ["Multi-Page Website", "Fullstack"],
    demo: "https://mernstack-movie-recommend-app.vercel.app/",
    code: "https://github.com/emachizy/mernstack-movie-recommend-app",
  },
  {
    id: 2,
    title: "Basketball for Everyone",
    image: "/images/bb4erone-website-img.webp",
    category: ["Landing Page", "Multi-Page Website"],
    demo: "https://basketball4everyone.vercel.app/",
    code: "https://github.com/emachizy/basketball4everyone",
  },
  {
    id: 7,
    title: "Portfolio Website",
    image: "/images/dunke-portfolio.webp",
    category: "Portfolio",
    demo: "https://dunke-portfolio.vercel.app/",
    code: "https://github.com/emachizy/dunke-portfolio",
  },
];

export const companies = [
  {
    id: 1,
    name: "The Compass Trybe",
    logo: "/images/c-trybe-logo.webp",
    website: "https://compass-trybe.vercel.app/",
  },
  {
    id: 2,
    name: "Basket Ball for Everyone",
    logo: "/images/bb41-logo.webp",
    website: "https://www.companyb.com",
  },
  {
    id: 3,
    name: "SculptArt Fitness Center",
    logo: "/images/sculpt-art-logo1.webp",
    website: "https://www.companyc.com",
  },
];

export const funFacts = [
  {
    id: 1,
    title: "Working Hours",
    value: 4350,
    icon: PiWatch,
  },
  {
    id: 2,
    title: "Happy Clients",
    value: 110,
    icon: CiHeart,
  },
  {
    id: 3,
    title: "Years of Experience",
    value: 4,
    icon: FaRegCalendarCheck,
  },
  {
    id: 4,
    title: "Awards Won",
    value: 6,
    icon: IoMdStarOutline,
  },
];
