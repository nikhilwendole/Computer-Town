import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BrandSelector from "./components/BrandSelector";
import BrandProducts from "./components/BrandProducts";
import LaptopDetailModal from "./components/LaptopDetailModal";
// import LaptopGallery from "./components/LaptopGallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AccessoryGrid from "./components/AccessoryGrid";
import AboutCard from "./components/AboutCard";
//import ReviewsSection from "./components/ReviewSection";

// ✅ Layout Component (Navbar + Footer)


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* ✅ Home Page */}
          <Route
            index
            element={
              <>
                <Hero />
                <BrandSelector />
                {/* <LaptopGallery /> */}
                <Services />
                <Contact />
              </>
            }
          />

          {/* ✅ Products Page */}
          <Route path="products/:brand" element={<BrandProducts />} />

          {/* ✅ Laptop Details Page */}
          <Route path="laptop/:id" element={<LaptopDetailModal />} />

          {/* ✅ Accessories Page */}
          <Route path="accessories" element={<AccessoryGrid />} />
        </Route>
      
      </Routes>
    </Router>
    
  );
 
}
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> 
       <AboutCard/>
       <Footer/>
      {/* <ReviewsSection/> */}
    </>
  );
}
