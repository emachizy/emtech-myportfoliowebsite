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
    title: "Responsive Design",
    description:
      "With mobile users accounting for over 80% of web traffic, mobile-friendly design is crucial. Our responsive approach aligns with Google's mobile-first indexing, optimizing your search rankings and helping you reach your target audience effectively.",
    icon: web_development_icon,
  },
  {
    title: "Customized Styles",
    description:
      "Choose from diverse style options to match your brand. Whether you need an elegant design for premium products or a clean, simple layout, our designers can deliver. We'll guide you to the perfect design based on your business objectives and vision.",
    icon: mobile_app_icon,
  },
  {
    title: "Website Copywriting",
    description:
      "Compelling copy drives conversions. Our expert copywriters combine technical and creative expertise to craft SEO-optimized content that resonates with your audience and boosts search rankings.",
    icon: ui_ux_design_icon,
  },
  {
    title: "SEO Optimization",
    description:
      "We implement proven SEO strategies to improve your search visibility. Our team of digital marketing experts ensures your website design incorporates SEO best practices, driving more organic traffic and increasing conversion rates.",
    icon: seo_icon,
  },
  {
    title: "Database Integration",
    description:
      "We provide seamless database integration services tailored to your needs. From basic to advanced solutions, we'll recommend and implement the perfect database structure based on your business requirements.",
  },
  {
    title: "Ecommerce Functionality",
    description:
      "Transform your website into a powerful online store. We implement comprehensive e-commerce solutions with secure payment processing, inventory management, and sales monitoring through an intuitive dashboard.",
  },
  {
    title: "Content Management System",
    description:
      "Enhance your content strategy with a custom CMS solution. We build flexible, scalable systems that match your specific needs, whether you need a standard, advanced, or enterprise-level platform.",
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
