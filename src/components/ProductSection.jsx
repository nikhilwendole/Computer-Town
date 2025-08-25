import { useState } from 'react';
import { laptops } from '../data/laptops';
import ProductCard from './ProductCard';
import LaptopModal from './LaptopModal';
import LaptopCard from '../components/LaptopCard'; // path depends on your folder
import { laptops } from '../data/laptops'; // dummy data

const brands = ["HP", "Dell", "Lenovo"];

export default function ProductSection() {
    const [selectedBrand, setSelectedBrand] = useState("HP");
    const [selectedLaptop, setSelectedLaptop] = useState(null);

    const filteredLaptops = laptops.filter((laptop) =>
        laptop.name.startsWith(selectedBrand)
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Our Laptops</h2>

            {/* Brand Selection */}
            <div className="flex justify-center gap-4 mb-6">
                {brands.map((brand) => (
                    <button
                        key={brand}
                        className={`px-5 py-2 font-semibold rounded-full transition-all ${selectedBrand === brand
                            ? "bg-indigo-600 text-white shadow-md scale-105"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => setSelectedBrand(brand)}
                    >
                        {brand}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredLaptops.map((laptop) => (
                    <ProductCard key={laptop.id} laptop={laptop} onClick={setSelectedLaptop} />
                ))}
            </div>

            {/* Modal */}
            {selectedLaptop && (
                <LaptopModal laptop={selectedLaptop} onClose={() => setSelectedLaptop(null)} />
            )}
        </section>
    );
}
