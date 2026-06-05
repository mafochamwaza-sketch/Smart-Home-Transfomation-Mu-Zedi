import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 font-bold text-xl tracking-tight">
              SMART HOME <span className="text-brand-orange">& POWER</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#shop" className="hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Shop</a>
              <a href="#solar" className="hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Solar</a>
              <a href="#contractors" className="hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Contractors</a>
              <a href="#about" className="hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Request Quote</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-orange focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-blue border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:text-brand-orange px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#shop" className="block hover:text-brand-orange px-3 py-2 rounded-md text-base font-medium">Shop</a>
            <a href="#solar" className="block hover:text-brand-orange px-3 py-2 rounded-md text-base font-medium">Solar</a>
            <a href="#contractors" className="block hover:text-brand-orange px-3 py-2 rounded-md text-base font-medium">Contractors</a>
            <a href="#about" className="block hover:text-brand-orange px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="block bg-brand-orange text-center mx-3 my-4 py-2 rounded-md text-base font-medium">Request Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
