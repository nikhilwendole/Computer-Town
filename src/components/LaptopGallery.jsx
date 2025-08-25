


// src/pages/LaptopGallery.jsx
import React, { useState } from "react";
import { laptops } from "../data/laptops";
import LaptopModal from "../components/LaptopModal";

const LaptopGallery = () => {
    const [brandFilter, setBrandFilter] = useState("All");
    const [selectedLaptop, setSelectedLaptop] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);

    const filtered = brandFilter === "All"
        ? laptops
        : laptops.filter((lap) => lap.brand === brandFilter);

    const handleLaptopClick = (laptop) => {
        setSelectedLaptop(laptop);
        setImageIndex(0);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">Premium Laptop Collection</h1>
                <p className="text-lg text-gray-600">Discover the latest models from top brands</p>
            </div>

            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {["All", "HP", "Dell", "Lenovo"].map((brand) => (
                    <button
                        key={brand}
                        onClick={() => setBrandFilter(brand)}
                        className={`px-6 py-2 rounded-full font-semibold transition ${brandFilter === brand
                            ? "bg-indigo-600 text-white"
                            : "bg-white border border-indigo-600 text-indigo-700"
                            }`}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((laptop) => (
                    <div
                        key={laptop.id}
                        onClick={() => handleLaptopClick(laptop)}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer"
                    >
                        <img
                            src={laptop.images[0]}
                            alt={laptop.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{laptop.name}</h2>
                            <p className="text-sm text-gray-600">{laptop.description}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-indigo-600 font-bold">{laptop.price}</span>
                                <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                                    {laptop.brand}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedLaptop && (
                <LaptopModal
                    laptop={selectedLaptop}
                    currentImageIndex={imageIndex}
                    onClose={() => setSelectedLaptop(null)}
                    onPrev={() => setImageIndex((prev) => Math.max(prev - 1, 0))}
                    onNext={() =>
                        setImageIndex((prev) =>
                            Math.min(prev + 1, selectedLaptop.images.length - 1)
                        )
                    }
                />
            )}
        </div>
    );
};

export default LaptopGallery;


