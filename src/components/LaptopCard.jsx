import React from "react";
import { laptops } from "../data/laptops";

const LaptopCard = () => {
  return (
    // <div className="grid grid-cols-3 gap-6">
    //   {laptops.map((laptop) => (
    //     <div key={laptop.id} className="p-4 shadow-lg rounded-xl bg-white">
    //       <img
    //         src={laptop.images[0]}   // ✅ fixed
    //         alt={laptop.name}
    //         className="w-full h-48 object-cover rounded-lg"
    //       />
    //       <h2 className="text-lg font-bold mt-3">{laptop.name}</h2>
    //       <p className="text-gray-700">{laptop.brand}</p>
    //       <p className="text-red-600 font-semibold">{laptop.price}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {laptops.map((laptop) => (
    <div key={laptop.id} className="p-4 shadow-lg rounded-xl bg-white">
      <img
        src={laptop.images && laptop.images.length > 0 ? laptop.images[0] : "/fallback.jpg"}
        alt={laptop.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-3">{laptop.name}</h2>
      <p className="text-gray-700">{laptop.brand}</p>
      <p className="text-red-600 font-semibold">{laptop.price}</p>
    </div>
  ))}
</div>

  );
};

export default LaptopCard;
