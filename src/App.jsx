import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ContractorSection from './components/ContractorSection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Value Proposition Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue">Why Zambia Chooses Us</h2>
              <div className="w-20 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-10 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed">We source directly from international manufacturers to ensure you get authentic, long-lasting hardware and solar solutions.</p>
              </div>
              <div className="p-10 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Sourcing Advantage</h3>
                <p className="text-gray-600 leading-relaxed">Our 'Sell by Order' model eliminates warehousing costs, allowing us to offer prices lower than traditional retail stores.</p>
              </div>
              <div className="p-10 rounded-3xl bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🚛</div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Nationwide Logistics</h3>
                <p className="text-gray-600 leading-relaxed">From Lusaka to the Copperbelt and beyond, we handle the shipping and delivery right to your construction site or home.</p>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        <ContractorSection />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
