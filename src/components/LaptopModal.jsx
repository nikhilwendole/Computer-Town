
// import React from "react";

// const LaptopModal = ({
//   laptop,
//   currentImageIndex,
//   onPrev,
//   onNext,
//   onClose,
// }) => {
//   if (!laptop) return null;

//   const details = [
//     { label: "Processor", value: laptop.processor },
//     { label: "RAM", value: laptop.ram },
//     { label: "Storage", value: laptop.storage },
//     { label: "Display", value: laptop.display },
//     { label: "GPU", value: laptop.gpu },
//     { label: "Price", value: laptop.price },
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Left: Image Carousel */}
//           <div className="w-full sm:w-1/2 mb-4 sm:mb-0 relative">
//             <img
//               src={laptop?.images?.[currentImageIndex] || "https://via.placeholder.com/300"}
//               alt={laptop?.name || "Laptop"}
//               className="w-full h-64 object-contain rounded-lg shadow-md"
//             />

//             {/* Image Counter */}
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
//               {currentImageIndex + 1}/{laptop.images?.length || 0}
//             </div>

//             {/* Prev & Next */}
//             <button
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={onPrev}
//               disabled={currentImageIndex === 0}
//             >
//               &#8592;
//             </button>
//             <button
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={onNext}
//               disabled={currentImageIndex === (laptop.images?.length || 1) - 1}
//             >
//               &#8594;
//             </button>
//           </div>

//           {/* Right: Laptop Details */}
//           <div className="w-full sm:w-1/2">
//             <h2 className="text-2xl font-bold mb-4">{laptop.name}</h2>
//             <ul className="space-y-2">
//               {details.map(
//                 (item, index) =>
//                   item.value && (
//                     <li key={index} className="flex justify-between">
//                       <span className="font-semibold">{item.label}:</span>
//                       <span>{item.value}</span>
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;


//src/components/LaptopModal.jsx
// import React, { useState } from "react";

// const LaptopModal = ({ laptop, onClose }) => {
//   if (!laptop) return null;

//   // ✅ State maintain karo yahi pe
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? laptop.images.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prev) =>
//       prev === laptop.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const details = [
//     { label: "Processor", value: laptop.processor },
//     { label: "RAM", value: laptop.ram },
//     { label: "Storage", value: laptop.storage },
//     { label: "Display", value: laptop.display },
//     { label: "GPU", value: laptop.gpu },
//     { label: "Price", value: laptop.price },
//     { label: "Battery", value: laptop.battery },
//     { label: "Ports", value: laptop.ports },
//     { label: "OS", value: laptop.os },
//     { label: "Warranty", value: laptop.warranty },
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Left: Image Carousel */}
//           <div className="w-full sm:w-1/2 mb-4 sm:mb-0 relative">
//             <img
//               src={
//                 laptop?.images?.[currentImageIndex] ||
//                 "https://via.placeholder.com/300"
//               }
//               alt={laptop?.name || "Laptop"}
//               className="w-full h-64 object-contain rounded-lg shadow-md"
//             />

//             {/* Image Counter */}
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
//               {currentImageIndex + 1}/{laptop.images?.length || 0}
//             </div>

//             {/* Prev & Next */}
//             <button
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={handlePrev}
//             >
//               &#8592;
//             </button>
//             <button
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={handleNext}
//             >
//               &#8594;
//             </button>
//           </div>

//           {/* Right: Laptop Details */}
//           <div className="w-full sm:w-1/2">
//             <h2 className="text-2xl font-bold mb-4">{laptop.name}</h2>
//             <ul className="space-y-2">
//               {details.map(
//                 (item, index) =>
//                   item.value && (
//                     <li key={index} className="flex justify-between">
//                       <span className="font-semibold">{item.label}:</span>
//                       <span>{item.value}</span>
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;


// import React, { useState } from 'react';

// const LaptopModal = ({ laptop }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const {
//     name,
//     processor,
//     ram,
//     storage,
//     display,
//     gpu,
//     price,
//     images,
//     description,
//     battery,
//     ports,
//     os,
//     warranty,
//   } = laptop;

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto my-12 transform transition-transform duration-300 hover:scale-[1.01] overflow-hidden">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         {/* Image Gallery */}
//         <div className="relative overflow-hidden rounded-lg">
//           <img
//             src={images[currentImageIndex]}
//             alt={name}
//             className="w-full h-80 object-cover rounded-lg transition-opacity duration-500 ease-in-out"
//           />
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={handlePrevImage}
//                 className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800/80 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//               </button>
//               <button
//                 onClick={handleNextImage}
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800/80 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col">
//           <h2 className="text-3xl font-bold mb-2 text-cyan-400">{name}</h2>
//           <p className="text-4xl font-extrabold text-lime-400 mb-6">${price}</p>
          
//           <p className="text-gray-400 mb-4">{description}</p>
          
//           <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300 mb-6">
//             <p><span className="font-semibold text-gray-200">Processor:</span> {processor}</p>
//             <p><span className="font-semibold text-gray-200">RAM:</span> {ram}</p>
//             <p><span className="font-semibold text-gray-200">Storage:</span> {storage}</p>
//             <p><span className="font-semibold text-gray-200">Display:</span> {display}</p>
//             <p><span className="font-semibold text-gray-200">GPU:</span> {gpu}</p>
//             <p><span className="font-semibold text-gray-200">OS:</span> {os}</p>
//             <p><span className="font-semibold text-gray-200">Battery:</span> {battery}</p>
//             <p><span className="font-semibold text-gray-200">Ports:</span> {ports}</p>
//           </div>

//           <div className="mt-4 text-sm text-gray-400">
//             <p><span className="font-semibold text-gray-200">Warranty:</span> {warranty}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;

// import React, { useState } from "react";

// const LaptopModal = ({ laptop }) => {
//   if (!laptop) return null; // ✅ null check

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const {
//     name,
//     processor,
//     ram,
//     storage,
//     display,
//     gpu,
//     price,
//     images = [],   // ✅ default empty array
//     description,
//     battery,
//     ports,
//     os,
//     warranty,
//   } = laptop;

//   const handleNextImage = () => {
//     if (images.length > 0)
//       setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const handlePrevImage = () => {
//     if (images.length > 0)
//       setCurrentImageIndex((prev) =>
//         prev === 0 ? images.length - 1 : prev - 1
//       );
//   };

//   return (
//     <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto my-12">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         {/* Image Gallery */}
//         <div className="relative overflow-hidden rounded-lg">
//           {images.length > 0 && (
//             <img
//               src={images[currentImageIndex]}
//               alt={name}
//               className="w-full h-80 object-cover rounded-lg"
//             />
//           )}
//           {/* Prev / Next buttons */}
//           {images.length > 1 && (
//             <>
//               <button onClick={handlePrevImage} className="absolute top-1/2 left-4">◀</button>
//               <button onClick={handleNextImage} className="absolute top-1/2 right-4">▶</button>
//             </>
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col">
//           <h2 className="text-3xl font-bold mb-2 text-cyan-400">{name}</h2>
//           <p className="text-4xl font-extrabold text-lime-400 mb-6">₹{price}</p>
//           <p className="text-gray-400 mb-4">{description}</p>
//           {/* Specs */}
//           <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-6">
//             <p><b>Processor:</b> {processor}</p>
//             <p><b>RAM:</b> {ram}</p>
//             <p><b>Storage:</b> {storage}</p>
//             <p><b>Display:</b> {display}</p>
//             <p><b>GPU:</b> {gpu}</p>
//             <p><b>OS:</b> {os}</p>
//             <p><b>Battery:</b> {battery}</p>
//             <p><b>Ports:</b> {ports}</p>
//           </div>
//           <p><b>Warranty:</b> {warranty}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;




import React, { useState } from "react";

const LaptopModal = ({ laptop, onClose }) => {
  if (!laptop) return null; // safety check

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    name,
    processor,
    ram,
    storage,
    display,
    gpu,
    price,
    images = [],
    description,
    battery,
    ports,
    os,
    // free,
    warranty,
  } = laptop;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-5xl w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-300 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Gallery */}
          <div className="relative overflow-hidden rounded-lg">
            {images.length > 0 && (
              <img
                src={images[currentImageIndex]}
                alt={name}
                className="w-full h-80 object-cover rounded-lg transition-opacity duration-500 ease-in-out"
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800/80 transition-all"
                >
                  ◀
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/60 hover:bg-gray-800/80 transition-all"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2 text-cyan-400">{name}</h2>
            <p className="text-4xl font-extrabold text-lime-400 mb-6">
              {price}
            </p>

            <p className="text-gray-400 mb-4">{description}</p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300 mb-6">
              <p><b>Processor:</b> {processor}</p>
              <p><b>RAM:</b> {ram}</p>
              <p><b>Storage:</b> {storage}</p>
              <p><b>Display:</b> {display}</p>
              <p><b>GPU:</b> {gpu}</p>
              <p><b>OS:</b> {os}</p>
              <p><b>Battery:</b> {battery}</p>
              <p><b>Ports:</b> {ports}</p>
              {/* <p><b>free:</b> {free}</p> */}
            </div>

            <div className="mt-4 text-sm text-gray-400">
              <p><b>Warranty:</b> {warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopModal;


// import React, { useState } from "react";

// const LaptopModal = ({ laptop, onClose }) => {
//   if (!laptop) return null;

//   // ✅ State maintain karo yahi pe
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? laptop.images.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prev) =>
//       prev === laptop.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const details = [
//     { label: "Processor", value: laptop.processor },
//     { label: "RAM", value: laptop.ram },
//     { label: "Storage", value: laptop.storage },
//     { label: "Display", value: laptop.display },
//     { label: "GPU", value: laptop.gpu },
//     { label: "Price", value: laptop.price },
//     { label: "Battery", value: laptop.battery },
//     { label: "Ports", value: laptop.ports },
//     { label: "OS", value: laptop.os },
//     { label: "Warranty", value: laptop.warranty },
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Left: Image Carousel */}
//           <div className="w-full sm:w-1/2 mb-4 sm:mb-0 relative">
//             <img
//               src={
//                 laptop?.images?.[currentImageIndex] ||
//                 "https://via.placeholder.com/300"
//               }
//               alt={laptop?.name || "Laptop"}
//               className="w-full h-64 object-contain rounded-lg shadow-md"
//             />

//             {/* Image Counter */}
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
//               {currentImageIndex + 1}/{laptop.images?.length || 0}
//             </div>

//             {/* Prev & Next */}
//             <button
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={handlePrev}
//             >
//               &#8592;
//             </button>
//             <button
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
//               onClick={handleNext}
//             >
//               &#8594;
//             </button>
//           </div>

//           {/* Right: Laptop Details */}
//           <div className="w-full sm:w-1/2">
//             <h2 className="text-2xl font-bold mb-4">{laptop.name}</h2>
//             <ul className="space-y-2">
//               {details.map(
//                 (item, index) =>
//                   item.value && (
//                     <li key={index} className="flex justify-between">
//                       <span className="font-semibold">{item.label}:</span>
//                       <span>{item.value}</span>
//                     </li>
//                   )
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopModal;
