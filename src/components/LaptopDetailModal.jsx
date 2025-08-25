// src/components/LaptopDetailModal.jsx
// const LaptopDetailModal = ({
//     laptop,
//     currentImageIndex,
//     onPrev,
//     onNext,
//     onClose
// }) => {
//     const details = [
//         { label: 'Processor', value: laptop.processor },
//         { label: 'RAM', value: laptop.ram },
//         { label: 'Storage', value: laptop.storage },
//         { label: 'Display', value: laptop.display },
//         { label: 'GPU', value: laptop.gpu },
//         { label: 'Operating System', value: laptop.os },
//         { label: 'Battery', value: laptop.battery },
//         { label: 'Weight', value: laptop.weight },
//         { label: 'Price', value: laptop.price, isPrice: true }
//     ];

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
//                 {/* Modal Header */}
//                 <div className="relative p-6 border-b border-gray-200 flex justify-between items-center">
//                     <h3 className="text-2xl font-bold text-gray-900">
//                         {laptop.name} Details
//                     </h3>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
//                         aria-label="Close"
//                     >
//                         <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                 d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Modal Content */}
//                 <div className="p-6">
//                     <div className="mb-6 flex flex-col sm:flex-row items-center sm:space-x-6">
//                         <div className="w-full sm:w-1/2 flex-shrink-0 mb-4 sm:mb-0">
//                             <div className="relative">
//                                 <img
//                                     src={laptop.images[currentImageIndex]}
//                                     alt="Laptop"
//                                     className="w-full h-64 object-contain rounded-lg shadow-md"
//                                 />

//                                 {/* Image counter */}
//                                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
//                                     {currentImageIndex + 1}/{laptop.images.length}
//                                 </div>

//                                 {/* Navigation Buttons */}
//                                 <button
//                                     onClick={onPrev}
//                                     disabled={currentImageIndex === 0}
//                                     className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-70'
//                                         }`}
//                                 >
//                                     &#8592;
//                                 </button>
//                                 <button
//                                     onClick={onNext}
//                                     disabled={currentImageIndex === laptop.images.length - 1}
//                                     className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentImageIndex === laptop.images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-70'
//                                         }`}
//                                 >
//                                     &#8594;
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="w-full sm:w-1/2">
//                             <p className="text-gray-700 text-base mb-4">
//                                 {laptop.description}
//                             </p>
//                             <div className="grid grid-cols-1 gap-3 text-sm">
//                                 {details.map((detail, index) => (
//                                     <div key={index} className="flex justify-between items-start py-1 border-b border-gray-100 last:border-b-0">
//                                         <span className="font-medium text-gray-600">{detail.label}:</span>
//                                         <span className={`text-gray-800 ${detail.isPrice ? 'font-bold text-indigo-700' : ''}`}>
//                                             {detail.value}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-4">
//                         <h4 className="text-lg font-semibold text-gray-800 mb-2">Ports & Connectivity:</h4>
//                         <p className="text-gray-700 text-base">{laptop.ports}</p>
//                     </div>
//                 </div>

//                 {/* Modal Footer */}
//                 <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
//                     <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow-md">
//                         Buy Now
//                     </button>
//                     <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md">
//                         Add to Cart
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium hover:bg-gray-400 transition duration-200 shadow-md"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

//  export default LaptopDetailModal;


//import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
//       <div className="relative overflow-hidden h-48 w-full">
//         <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-6">
//         <span className="text-xs text-gray-500 uppercase tracking-widest">{product.brand}</span>
//         <h3 className="mt-2 text-xl font-semibold text-gray-900">{product.name}</h3>
//         <ul className="mt-2 text-sm text-gray-600">
//           <li><span className="font-bold">Processor:</span> {product.processor}</li>
//           <li><span className="font-bold">RAM:</span> {product.ram}</li>
//           <li><span className="font-bold">Storage:</span> {product.storage}</li>
//         </ul>
//         <p className="mt-4 text-2xl font-bold text-blue-600">₹{product.price}</p>
//         <button className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React from "react";

const LaptopDetailModal = ({
    laptop,
    currentImageIndex = 0, // ✅ default value set
    onPrev,
    onNext,
    onClose
}) => {
    // Agar images available na ho to empty array
    const images = laptop.images || [];

    const details = [
        { label: 'Processor', value: laptop.processor },
        { label: 'RAM', value: laptop.ram },
        { label: 'Storage', value: laptop.storage },
        { label: 'Display', value: laptop.display },
        { label: 'GPU', value: laptop.gpu },
        { label: 'Operating System', value: laptop.os },
        { label: 'Battery', value: laptop.battery },
        { label: 'Weight', value: laptop.weight },
        { label: 'Price', value: laptop.price, isPrice: true }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
                {/* Modal Header */}
                <div className="relative p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                        {laptop.name} Details
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
                        aria-label="Close"
                    >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                    <div className="mb-6 flex flex-col sm:flex-row items-center sm:space-x-6">
                        <div className="w-full sm:w-1/2 flex-shrink-0 mb-4 sm:mb-0">
                            <div className="relative">
                                {/* ✅ Safe check for images */}
                                {images.length > 0 && (
                                    <>
                                        <img
                                            src={images[currentImageIndex]}
                                            alt="Laptop"
                                            className="w-full h-64 object-contain rounded-lg shadow-md"
                                        />

                                        {/* Image counter */}
                                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                                            {currentImageIndex + 1}/{images.length}
                                        </div>

                                        {/* Navigation Buttons */}
                                        <button
                                            onClick={onPrev}
                                            disabled={currentImageIndex === 0}
                                            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-70'
                                                }`}
                                        >
                                            &#8592;
                                        </button>
                                        <button
                                            onClick={onNext}
                                            disabled={currentImageIndex === images.length - 1}
                                            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentImageIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-70'
                                                }`}
                                        >
                                            &#8594;
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="text-gray-700 text-base mb-4">
                                {laptop.description}
                            </p>
                            <div className="grid grid-cols-1 gap-3 text-sm">
                                {details.map((detail, index) => (
                                    <div key={index} className="flex justify-between items-start py-1 border-b border-gray-100 last:border-b-0">
                                        <span className="font-medium text-gray-600">{detail.label}:</span>
                                        <span className={`text-gray-800 ${detail.isPrice ? 'font-bold text-indigo-700' : ''}`}>
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Ports & Connectivity:</h4>
                        <p className="text-gray-700 text-base">{laptop.ports}</p>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                    <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow-md">
                        Buy Now
                    </button>
                    <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition duration-200 shadow-md">
                        Add to Cart
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium hover:bg-gray-400 transition duration-200 shadow-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetailModal;
