import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ScrollToTop from "./components/utils/ScrollToTop";
import WebDesign from "./pages/services/WebDesign";
import WebApp from "./pages/services/WebApp";
import MobileApp from "./pages/services/MobileApp";
import Ecommerce from "./pages/services/Ecommerce";
import InstagramGrowth from "./pages/services/InstagramGrowth";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import ProjectManagement from "./pages/services/ProjectManagement";
import LegacyMigration from "./pages/services/LegacyMigration";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <ToastContainer />
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />

            {/* Main Services route */}
            <Route path="/services" element={<Services />} />

            {/* Individual service routes */}
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/web-app" element={<WebApp />} />
            <Route path="/services/mobile-app" element={<MobileApp />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route
              path="/services/instagram-growth"
              element={<InstagramGrowth />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/services/project-management"
              element={<ProjectManagement />}
            />
            <Route
              path="/services/legacy-migration"
              element={<LegacyMigration />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
