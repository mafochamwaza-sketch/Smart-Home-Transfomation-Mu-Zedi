import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-brand-blue h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Home" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Affordable Smart Home, <span className="text-brand-orange">Solar & Hardware</span> Solutions Delivered to Your Door
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Browse. Inquire. Order. We Source Quality Products at Competitive Prices Across Zambia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all transform hover:scale-105">
              Browse Products
            </a>
            <a href="#contact" className="bg-white hover:bg-gray-100 text-brand-blue px-8 py-4 rounded-full font-bold text-lg text-center transition-all border-2 border-transparent">
              Request Quote
            </a>
            <a href="https://wa.me/260000000000" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.503.893 3.129 1.364 4.791 1.365 5.279 0 9.571-4.292 9.573-9.571 0-2.556-1.003-4.943-2.812-6.752s-4.195-2.812-6.753-2.812c-5.281 0-9.586 4.44-9.574 9.719 0 1.777.472 3.51 1.366 5.043l-1.01 3.687 3.753-.984zm11.305-6.813c-.274-.137-1.62-.8-1.874-.891-.254-.091-.44-.137-.626.137-.186.274-.716.891-.876 1.074-.16.183-.321.206-.594.069-.273-.137-1.156-.426-2.202-1.359-.815-.726-1.364-1.623-1.524-1.897-.16-.274-.017-.422.12-.558.123-.122.274-.32.411-.48.137-.16.183-.274.274-.457.091-.183.046-.343-.023-.48-.069-.137-.626-1.509-.857-2.067-.225-.544-.45-.47-.626-.479-.16-.008-.344-.01-.527-.01-.183 0-.48.069-.732.343-.251.274-.961.938-.961 2.287 0 1.349.983 2.653 1.121 2.836.137.183 1.935 2.956 4.688 4.147.654.282 1.165.451 1.564.578.657.208 1.255.178 1.728.108.527-.078 1.62-.663 1.848-1.303.228-.641.228-1.189.16-1.303-.069-.115-.254-.184-.528-.321z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
