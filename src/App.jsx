import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

const Navbar = lazy(() => import("./Components/Navbar"));
const AllRouter = lazy(() => import("./Allroutes/AllRouter"));
const Footer = lazy(() => import("./Components/Footer"));
const SlidingOpenEffect = lazy(() => import("./Components/SlidingOpenEffect"));
import ScrollToTop from "./Components/ScrollToTop";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const isMobile = window.innerWidth < 768; // Detect mobile devices

  useEffect(() => {
    setTimeout(() => setShowMainContent(true), 2000);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!showMainContent ? (
        <SlidingOpenEffect />
      ) : isMobile ? (
        <>
          <ScrollToTop />
          <Navbar />
          <AllRouter />
          <Footer />
        </>
      ) : (
        <SmoothScroll> {/* Apply smooth scrolling only for non-mobile devices */}
          <ScrollToTop />
          <Navbar />
          <AllRouter />
          <Footer />
        </SmoothScroll>
      )}
    </Suspense>
  );
}

export default App;
