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

  useEffect(() => {
    setTimeout(() => setShowMainContent(true), 2000);
  }, []);

  return (
 <div>
  <Navbar />
          <AllRouter />
          <Footer />
 </div>
  );
}

export default App; 