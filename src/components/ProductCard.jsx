import React from 'react';

const ProductCard = ({ product }) => {
  const whatsappLink = `https://wa.me/260000000000?text=I'm interested in the ${product.name} (${product.id})`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <div className="absolute top-2 right-2 bg-brand-orange text-white px-2 py-1 rounded text-xs font-bold">
          {product.category}
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-brand-blue mb-2 leading-tight">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-brand-blue font-bold">{product.priceRange}</span>
          <span className="text-xs text-gray-400">Est. Price</span>
        </div>
      </div>
      <div className="p-4 border-t border-gray-50 flex gap-2">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded font-semibold text-sm transition-colors flex items-center justify-center gap-1"
        >
          Inquire
        </a>
        <button className="flex-1 bg-brand-blue hover:bg-blue-900 text-white py-2 rounded font-semibold text-sm transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
