import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality smart home and power solutions sourced just for you. Explore our digital showroom and inquire for availability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 rounded-full font-bold transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
