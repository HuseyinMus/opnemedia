import React, { useState } from 'react';
import { ArrowRight, Calendar, Zap, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';

const Hero = () => {
  const [showAppointment, setShowAppointment] = useState(false);

  const floatingLogos = [
    { 
      src: '/Zapier_logo.svg.png', 
      alt: 'Zapier',
      initialX: -100,
      initialY: -50,
      floatX: 20,
      floatY: -20,
      delay: 0
    },
    { 
      src: '/tiktok-6338432_1280.png', 
      alt: 'TikTok',
      initialX: 150,
      initialY: -80,
      floatX: -30,
      floatY: 15,
      delay: 0.5
    },
    { 
      src: '/LinkedIn_2021.svg.png', 
      alt: 'LinkedIn',
      initialX: -80,
      initialY: 100,
      floatX: 25,
      floatY: -25,
      delay: 1
    },
    { 
      src: '/HubSpot_Logo.svg.png', 
      alt: 'HubSpot',
      initialX: 120,
      initialY: 80,
      floatX: -20,
      floatY: 20,
      delay: 1.5
    }
  ];

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 right-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Logos */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingLogos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
              initial={{ 
                x: logo.initialX, 
                y: logo.initialY,
                opacity: 0,
                scale: 0.5,
                rotate: -10
              }}
              animate={{ 
                x: [logo.initialX, logo.initialX + logo.floatX, logo.initialX],
                y: [logo.initialY, logo.initialY + logo.floatY, logo.initialY],
                opacity: [0, 0.3, 0.2, 0.3],
                scale: [0.5, 0.8, 0.6, 0.8],
                rotate: [-10, 10, -5, 10]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: logo.delay
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${15 + index * 15}%`
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6"
                >
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span className="text-orange-500 text-sm font-semibold">Digital Marketing Experts</span>
                </motion.div>

                <motion.h1 
                  className="text-6xl lg:text-8xl font-light text-white leading-none mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  openMedia
                </motion.h1>
                
                <motion.div 
                  className="space-y-6 text-lg text-gray-300 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-2xl font-light text-white mb-4">
                    We Take Your Brand to Mars! 🚀
                  </p>
                  <p>
                    We're architects of digital success — Crafting 
                    data-driven strategies that launch your business beyond the competition.
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span>200% ROI Growth</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-orange-500" />
                      <span>50+ European Clients</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button 
                  onClick={() => setShowAppointment(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  BOOK MEETING
                </motion.button>
                <motion.button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="group-hover:mr-2 transition-all">GET STARTED</span>
                  <ArrowRight className="h-5 w-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Visual Element */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div 
                  className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl p-12 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0 bg-white/10"
                      animate={{ 
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                  </div>

                  {/* Abstract geometric shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-80 h-80 bg-white/20 rounded-full"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="relative z-10 text-white">
                    <div className="text-right mb-8">
                      <motion.div 
                        className="text-sm font-medium mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        DIGITAL MARKETING
                      </motion.div>
                      <motion.div 
                        className="text-xs opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        EXPERTS • 2025
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute bottom-8 right-8"
                      animate={{ 
                        x: [0, 5, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Floating Elements Inside Card */}
                  <motion.div
                    className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-16 left-8 w-2 h-2 bg-white/60 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>

                {/* Floating Cards Around Main Card */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-xs font-semibold">ROI</div>
                  <div className="text-lg font-bold text-orange-400">+200%</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="text-xs font-semibold">CLIENTS</div>
                  <div className="text-lg font-bold text-orange-400">50+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <span className="text-sm">A digital marketing agency</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm">based in Europe.</span>
            </div>
          </motion.div>
        </div>

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