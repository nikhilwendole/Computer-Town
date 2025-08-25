import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Use the same accessory data as your AccessoryGrid component
const accessories = [
    {
        id: "1",
        name: "Wireless RGB Gaming Mouse",
        price: "₹ 3,499",
        images: [
            "https://images.unsplash.com/photo-1542398573-f938c5b8ac97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1548809983-4a11b6d0284d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1550000000000-000000000000?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: "High-performance gaming mouse with customizable RGB lighting and ergonomic design.",
        fullDescription: "Experience superior control and comfort with this wireless gaming mouse. Featuring an advanced optical sensor, adjustable DPI settings, and customizable RGB lighting to match your setup. The ergonomic design ensures a comfortable grip for hours of intense gaming."
    },
    {
        id: "2",
        name: "Mechanical Keyboard",
        price: "₹ 5,999",
        images: [
            "https://images.unsplash.com/photo-1587829742618-ac106470652d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1616474135502-3c829e0a294d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1610466350764-a6907d721389?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        description: "Tactile mechanical keyboard for a satisfying typing experience.",
        fullDescription: "This mechanical keyboard features durable blue switches, providing a tactile and audible click for precise typing. It's built to last with an aluminum frame and is perfect for both work and gaming."
    },
    // ... All 16 accessories here with updated data
];

const AccessoryDetail = () => {
    const { id } = useParams();
    const [accessory, setAccessory] = useState(null);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        const foundAccessory = accessories.find((acc) => acc.id === id);
        if (foundAccessory) {
            setAccessory(foundAccessory);
            setMainImage(foundAccessory.images[0]);
        }
    }, [id]);

    if (!accessory) {
        return <div className="text-center text-gray-600 mt-20">Accessory not found.</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <div className="flex items-center mb-6">
                <Link to="/" className="text-indigo-600 hover:underline flex items-center">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-lg">
                {/* Image Gallery */}
                <div>
                    <img
                        src={mainImage}
                        alt={accessory.name}
                        className="w-full h-auto rounded-lg shadow-md mb-4 object-cover"
                    />
                    <div className="flex gap-4 overflow-x-auto">
                        {accessory.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${accessory.name} thumbnail ${index + 1}`}
                                className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200
                                    ${mainImage === img ? 'border-indigo-600 scale-105' : 'border-transparent hover:border-gray-300'}`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{accessory.name}</h1>
                    <p className="text-3xl font-bold text-indigo-600 mb-6">{accessory.price}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{accessory.fullDescription}</p>
                    <button className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccessoryDetail;
