import React from 'react';

const AboutCard = () => {
  return (
    <div id="about" className="relative overflow-hidden bg-gray-950 text-white font-sans p-8 md:p-16 flex items-center justify-center min-h-screen">
      
      {/* Background Effect: Subtle Animated Grid or Glow */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, #1c2b3a, transparent), radial-gradient(ellipse at bottom, #0a111a, transparent)`,
        }}
      ></div>
      
      {/* Main Content Card */}
      <div 
        className="relative z-10 w-full max-w-4xl bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 
        border border-gray-800 backdrop-filter backdrop-blur-sm
        transform transition-transform duration-500 ease-in-out hover:scale-[1.01]"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          
          {/* Image Section */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Computer Town Store"
              className="w-full md:w-64 lg:w-80 h-auto rounded-xl object-cover shadow-lg"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
              Welcome to Computer Town
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              For over a decade, Computer Town has been the trusted hub for tech enthusiasts and professionals alike. We are more than just a store; we are a community built on a shared passion for innovation and quality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-xl text-blue-400 mr-4">📍</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Our Location</h3>
                  <p className="text-gray-400">
                   Shop no 10, Upper ground, Abc Nirman Building, Dange Chowk Rd, Gujar Nagar, Sai Colony, Thergaon, Pimpri-Chinchwad, Pune, Maharashtra 411033
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-xl text-green-400 mr-4">⏰</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Store Hours</h3>
                  <p className="text-gray-400">
                    Mon - Sat: 9:00 AM - 7:00 PM<br/>
                    Sunday: 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-xl text-purple-400 mr-4">📞</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Contact Us</h3>
                  <p className="text-gray-400">
                    <a href="tel:+15551234567" className="hover:underline transition-colors duration-200">9637170075</a><br/>
                    <a href="mailto:info@computertown.com" className="hover:underline transition-colors duration-200">http://computertownstore.com/</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default AboutCard;