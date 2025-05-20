import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Chatbot from "./Components/Chatbot";
import Chatbotnew from "./Components/Chatbotnew";
import CookiesComponent from "./Components/CookiesComponent";
import ContactButton from "./Components/ContactButton";
// import ScrollTovTop from "./Components/ScrollTovTop";
import Lottie from "lottie-react";
import Loading from "./Animations/Loading.json"
import HomePopup from "./Components/Homepopup";
import Breadcrumbs from "./Components/Breadcrumbs";
import ScrollToTop from "./Components/ScrollTovTop";

const Navbar = lazy(() => import("./Components/Navbar"));
const AllRouter = lazy(() => import("./Allroutes/AllRouter"));
const Footer = lazy(() => import("./Components/Footer"));
const SlidingOpenEffect = lazy(() => import("./Components/SlidingOpenEffect"));

// Crazy Loading Screen
const CrazyLoader = () => (
  <div className="absolute top-0 left-0 w-full h-full z-50 bg-white flex flex-col items-center justify-center">
  <Lottie animationData={Loading} />
  <h1 className="font-[bebas] traking-wider lg:text-9xl text-6xl text-pink-400 -mt-8 animate-bounce">ARC FERTILITY</h1>
</div>

);

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainContent(true), 3000); // show loader for 3s
    return () => clearTimeout(timer);
  }, []);

  if (!showMainContent) {
    return <CrazyLoader />;
  }

  return (
    <div>
      <div className="sm:mt-35 mt-30">
        {/* <ScrollToTop /> */}
        {/* <Breadcrumbs /> */}
        <HomePopup />
        <ScrollToTop />
        <Suspense fallback={<CrazyLoader />}>
          <Navbar />
        </Suspense>
        <ContactButton phoneNumber="+916369538954" whatsappNumber="+917811999999" />
        <Chatbot />
        {/* <Card /> */}
        <Suspense fallback={<CrazyLoader />}>
          <AllRouter />
        </Suspense>
        <CookiesComponent />
        <Suspense fallback={<CrazyLoader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
