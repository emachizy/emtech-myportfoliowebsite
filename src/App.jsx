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

function App() {
  // const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }); // Cleanup the timer on unmount
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
            <Route path="/services" element={<Services />} />
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
