import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Solar',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    alert('Thank you! We have received your inquiry and will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', interest: 'Solar', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Request a Custom Quote</h2>
            <p className="text-gray-600">Can't find what you're looking for? Tell us your requirements and we'll source it for you at the best price.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                placeholder="+260..."
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Primary Interest</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option>Solar Solutions</option>
                <option>Home Appliances</option>
                <option>Lighting & Electrical</option>
                <option>Hardware & Construction</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-semibold text-gray-700">Message / Requirements</label>
              <textarea 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                rows="4"
                placeholder="Tell us about the products you need..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-200">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
