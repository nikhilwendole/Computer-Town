// // src/pages/BrandProducts.jsx
// import { useParams } from 'react-router-dom';
// import { laptops } from '../data/laptops';
// import ProductCard from '../components/ProductCard';
// import LaptopModal from '../components/LaptopModal';
// import { useState } from 'react';

// export default function BrandProducts() {
//     const { brand } = useParams();
//     const [selectedLaptop, setSelectedLaptop] = useState(null);

//     const filtered = laptops.filter((laptop) =>
//         laptop.name.toLowerCase().startsWith(brand.toLowerCase())
//     );

//     return (
//         <section className="max-w-7xl mx-auto px-4 py-10">
//             <h2 className="text-3xl font-bold mb-6 capitalize">{brand} Laptops</h2>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {filtered.map((laptop) => (
//                     <ProductCard key={laptop.id} laptop={laptop} onClick={setSelectedLaptop} />
//                 ))}
//             </div>

//             {selectedLaptop && (
//                 <LaptopModal laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />
//             )}
//         </section>
//     );
// }

// src/pages/BrandProducts.jsx
// import { useParams } from 'react-router-dom';
// import { laptops } from '../data/laptops';
// import ProductCard from '../components/ProductCard';
// import LaptopModal from '../components/LaptopModal';
// import { useState, useEffect } from 'react';

// export default function BrandProducts() {
//     const { brand } = useParams();
//     const [selectedLaptop, setSelectedLaptop] = useState(null);

//     const filtered = laptops.filter((laptop) =>
//         laptop.name.toLowerCase().startsWith(brand.toLowerCase())
//     );

//     // Scroll to top when component mounts
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <section className="max-w-7xl mx-auto px-4 py-10">
//             <h2 className="text-3xl font-bold mb-6 capitalize">{brand} Laptops</h2>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {filtered.map((laptop) => (
//                     <ProductCard key={laptop.id} laptop={laptop} onClick={setSelectedLaptop} />
//                 ))}
//             </div>

//             {selectedLaptop && (
//                 <LaptopModal laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />
//             )}
//         </section>
//     );
// }


// import { useParams, useNavigate } from 'react-router-dom';
// import { laptops } from '../data/laptops';
// import ProductCard from '../components/ProductCard';
// import LaptopModal from '../components/LaptopModal';
// import { useState, useEffect } from 'react';

// export default function BrandProducts() {
//     const { brand } = useParams();
//     const navigate = useNavigate();
//     const [selectedLaptop, setSelectedLaptop] = useState(null);

//     const filtered = laptops.filter((laptop) =>
//         laptop.name.toLowerCase().startsWith(brand.toLowerCase())
//     );

//     // Scroll to top when page loads
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     // Handle mobile back button for modal
//     useEffect(() => {
//         const handlePopState = () => {
//             if (selectedLaptop) {
//                 setSelectedLaptop(null); // Close modal instead of going back
//                 window.history.pushState(null, ""); // Prevent actual back navigation
//             }
//         };

//         window.addEventListener("popstate", handlePopState);
//         return () => window.removeEventListener("popstate", handlePopState);
//     }, [selectedLaptop]);

//     // When modal opens, push a new history state
//     useEffect(() => {
//         if (selectedLaptop) {
//             window.history.pushState(null, "");
//         }
//     }, [selectedLaptop]);

//     return (
//         <section className="max-w-7xl mx-auto px-4 py-10">
//             <h2 className="text-3xl font-bold mb-6 capitalize">{brand} Laptops</h2>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {filtered.map((laptop) => (
//                     <ProductCard key={laptop.id} laptop={laptop} onClick={setSelectedLaptop} />
//                 ))}
//             </div>

//             {selectedLaptop && (
//                 <LaptopModal laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />
//             )}
//         </section>
//     );
// }


import { useParams } from "react-router-dom";
import { laptops } from "../data/laptops";
import LaptopModal from "../components/LaptopModal";
import { useState, useEffect } from "react";

// Reusable LaptopCard inside the same file (can also be separate)
function LaptopCard({ laptop, onClick }) {
  return (
    <div
      className="p-4 shadow-lg rounded-xl bg-white cursor-pointer hover:shadow-3xl transition transform hover:scale-105"
      onClick={() => onClick(laptop)}
    >
      <img
        src={laptop.images && laptop.images.length > 0 ? laptop.images[0] : "/fallback.jpg"}
        alt={laptop.name}
        className="w-full h-50 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-9">{laptop.name}</h2>
      {/* <p className="text-gray-900 font-bold">{laptop.brand}</p> */}
      <p className="text-green-500 font-bold">{laptop.price}</p>
    </div>
  );
}

export default function BrandProducts() {
  const { brand } = useParams();
  const [selectedLaptop, setSelectedLaptop] = useState(null);

  const filtered = laptops.filter((laptop) =>
    laptop.name.toLowerCase().startsWith(brand.toLowerCase())
  );

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle mobile back button for modal
  useEffect(() => {
    const handlePopState = () => {
      if (selectedLaptop) {
        setSelectedLaptop(null);
        window.history.pushState(null, ""); // Prevent actual back
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedLaptop]);

  // Push history when modal opens
  useEffect(() => {
    if (selectedLaptop) {
      window.history.pushState(null, "");
    }
  }, [selectedLaptop]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedLaptop ? "hidden" : "auto";
  }, [selectedLaptop]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 capitalize">{brand} Laptops</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((laptop) => (
          <LaptopCard key={laptop.id} laptop={laptop} onClick={setSelectedLaptop} />
        ))}
      </div>

      {selectedLaptop && (
        <LaptopModal laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />
      )}
    </section>
  );
}
