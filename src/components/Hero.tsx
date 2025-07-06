import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const Hero = () => {
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl lg:text-8xl font-light text-white leading-none mb-8">
                  openMedia
                </h1>
                <div className="space-y-4 text-lg text-gray-300 max-w-lg">
                  <p>
                    We're architects of digital success — Crafting 
                    data-driven strategies that stand out from the noise.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  BOOK MEETING
                </button>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-12 relative overflow-hidden">
                {/* Abstract geometric shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-white/20 rounded-full transform rotate-12"></div>
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 text-white">
                  <div className="text-right mb-8">
                    <div className="text-sm font-medium mb-2">PART OF THE SKY</div>
                    <div className="text-xs">2025</div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <span className="text-sm">An imaginary agency</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm">based in Europe.</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-white/10 rounded-full"></div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={showAppointment} 
        onClose={() => setShowAppointment(false)} 
      />
    </>
  );
};

export default Hero;