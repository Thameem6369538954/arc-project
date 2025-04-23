import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Chatbot from "./Components/Chatbot";
import Chatbotnew from "./Components/Chatbotnew";
import CookiesComponent from "./Components/CookiesComponent";
import ContactButton from "./Components/ContactButton";
import ScrollTovTop from "./Components/ScrollTovTop";
// import Card from "./Components/Card"

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

 <div className="sm:mt-45 mt-35">
  <ScrollTovTop />
  <Navbar />
  <ContactButton phoneNumber="+916369538954" whatsappNumber="+917811999999"  />
  <Chatbot />
  {/* <Card /> */}
          <AllRouter />
          <CookiesComponent />

          <Footer />
 </div>
  </div>
  );
}


export default App; 