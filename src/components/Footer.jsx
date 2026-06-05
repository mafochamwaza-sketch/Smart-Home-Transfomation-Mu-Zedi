import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">SMART HOME <span className="text-brand-orange">& POWER</span></h3>
            <p className="text-gray-400">
              Zambia's leading online retailer and sourcing partner for modern home, power, and hardware solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Product Categories</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Solar Solutions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Home Appliances</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Lighting Solutions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Hardware Products</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Electrical Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contractor Program</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Lusaka, Zambia (Online Operations)</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+260 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>sales@smarthomezambia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Home & Power Solutions Zambia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
