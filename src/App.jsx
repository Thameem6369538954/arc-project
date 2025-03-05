import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Chatbot from "./Components/Chatbot";
import Chatbotnew from "./Components/Chatbotnew";
import CookiesComponent from "./Components/CookiesComponent";

const Navbar = lazy(() => import("./Components/Navbar"));
const AllRouter = lazy(() => import("./Allroutes/AllRouter"));
const Footer = lazy(() => import("./Components/Footer"));
const SlidingOpenEffect = lazy(() => import("./Components/SlidingOpenEffect"));


function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMainContent(true), 2000);
  }, []);

  return (
 <div>
  <Navbar />
  <Chatbot />
  {/* <Chatbotnew /> */}
          <AllRouter />
          <CookiesComponent />
          <Footer />
 </div>
  );
}

export default App; 