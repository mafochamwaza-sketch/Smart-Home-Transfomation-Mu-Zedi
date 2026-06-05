import React from 'react';

const ContractorSection = () => {
  return (
    <section id="contractors" className="py-20 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Contractor & Partner Program</h2>
            <p className="text-xl text-blue-100 mb-8">
              We partner with electricians, plumbers, builders, and developers to provide priority sourcing and bulk pricing for large-scale projects.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Bulk Pricing</h4>
                  <p className="text-blue-200">Exclusive discounts for volume orders and recurring trade partners.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Priority Sourcing</h4>
                  <p className="text-blue-200">Faster turnarounds and dedicated support for time-sensitive projects.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Special Quotations</h4>
                  <p className="text-blue-200">Customized pricing for tenders and multi-unit developments.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Apply for Partner Account
            </button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" 
                alt="Contractor working" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange p-6 rounded-2xl hidden sm:block">
              <p className="text-4xl font-bold">15%</p>
              <p className="text-sm font-medium">Bulk Discount up to</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractorSection;
