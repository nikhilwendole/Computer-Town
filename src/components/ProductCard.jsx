// src/components/ProductCard.jsx
export default function ProductCard({ laptop, onClick }) {
    return (
        <div
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => onClick(laptop)}
        >
            <img src={laptop?.images} alt={laptop.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{laptop.name}</h3>
                <p className="text-blue-600 font-bold">{laptop.price}</p>
            </div>
        </div>
    );
}
