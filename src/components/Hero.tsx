import React, { useState } from 'react';
import { ArrowRight, Calendar, Zap, TrendingUp, Target, Sparkles, Rocket, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';

const Hero = () => {
  const [showAppointment, setShowAppointment] = useState(false);

  const floatingLogos = [
    { 
      src: '/linkedin-logo-linkedin-icon-transparent-free-png copy.webp', 
      alt: 'LinkedIn',
      initialX: -120,
      initialY: -60,
      floatX: 40,
      floatY: -30,
      delay: 0,
      size: 'w-16 h-16'
    },
    { 
      src: '/Google_2015_logo.svg.png', 
      alt: 'Google',
      initialX: 180,
      initialY: -100,
      floatX: -50,
      floatY: 25,
      delay: 0.7,
      size: 'w-20 h-20'
    },
    { 
      src: '/meta-logo.webp', 
      alt: 'Meta',
      initialX: -100,
      initialY: 120,
      floatX: 35,
      floatY: -35,
      delay: 1.4,
      size: 'w-18 h-18'
    }
  ];

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Main Glow Effects */}
          <motion.div 
            className="absolute top-1/4 right-10 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1.2, 1],
              opacity: [0.3, 0.8, 0.5, 0.3],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-10 w-40 h-40 bg-orange-500/25 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.4, 1.2],
              opacity: [0.4, 0.2, 0.6, 0.4],
              x: [0, -25, 15, 0],
              y: [0, 20, -5, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional Glow Layers */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.1, 0.3, 0.1, 0.1],
              rotate: [0, 90, 180, 360]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`
              }}
              variants={sparkleVariants}
              animate="animate"
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-orange-400/60" />
            </motion.div>
          ))}
        </div>

        {/* Minimalist Floating Logos */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingLogos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              className="absolute opacity-20 hover:opacity-60 transition-opacity duration-700"
              initial={{ 
                x: logo.initialX, 
                y: logo.initialY,
                opacity: 0,
                scale: 0.5,
                filter: 'blur(2px)'
              }}
              animate={{ 
                x: [logo.initialX, logo.initialX + logo.floatX, logo.initialX - logo.floatX/2, logo.initialX],
                y: [logo.initialY, logo.initialY + logo.floatY, logo.initialY - logo.floatY/2, logo.initialY],
                opacity: [0, 0.3, 0.15, 0.3],
                scale: [0.5, 1, 0.8, 1],
                filter: ['blur(2px)', 'blur(0px)', 'blur(1px)', 'blur(0px)']
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: logo.delay
              }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${15 + index * 25}%`
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  filter: 'brightness(1.3) saturate(1.2)'
                }}
                className="relative"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className={`${logo.size} object-contain filter drop-shadow-lg transition-all duration-500`}
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-lg blur-md scale-110 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Enhanced Text Content */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="h-5 w-5 text-orange-400" />
                  </motion.div>
                  <span className="text-orange-400 font-bold text-sm tracking-wide">DIGITAL MARKETING EXPERTS</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4 text-orange-400" />
                  </motion.div>
                </motion.div>

                <motion.h1 
                  className="text-7xl lg:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-orange-200 leading-none mb-10 tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  openMedia
                </motion.h1>
                
                <motion.div 
                  className="space-y-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <div className="relative">
                    <motion.p 
                      className="text-3xl font-light text-white mb-6 leading-tight"
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(249, 115, 22, 0)",
                          "0 0 20px rgba(249, 115, 22, 0.3)",
                          "0 0 0px rgba(249, 115, 22, 0)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      We Take Your Brand to Mars! 
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block ml-2"
                      >
                        🚀
                      </motion.span>
                    </motion.p>
                    
                    {/* Rocket Trail Effect */}
                    <motion.div
                      className="absolute -right-8 top-2 w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"
                      animate={{ 
                        scaleX: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We're architects of digital success — Crafting 
                    <span className="text-orange-400 font-semibold"> data-driven strategies</span> that 
                    launch your business beyond the competition into the stratosphere.
                  </p>
                  
                  <motion.div 
                    className="flex items-center space-x-8 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <motion.div 
                      className="flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                    >
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-bold">200% ROI Growth</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    >
                      <Users className="h-5 w-5 text-blue-400" />
                      <span className="text-blue-400 font-bold">50+ European Clients</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.button 
                  onClick={() => setShowAppointment(true)}
                  className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-2xl shadow-orange-500/25 flex items-center justify-center group overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10 tracking-wide">BOOK MEETING</span>
                  
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute top-1 right-1"
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Sparkles className="h-3 w-3 text-white/80" />
                  </motion.div>
                </motion.button>
                
                <motion.button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-5 rounded-full font-bold transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-orange-500/25 group overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#f97316"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hover Fill Effect */}
                  <motion.div
                    className="absolute inset-0 bg-orange-500"
                    initial={{ scale: 0, borderRadius: "50%" }}
                    whileHover={{ scale: 1, borderRadius: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 group-hover:mr-3 transition-all tracking-wide">GET STARTED</span>
                  <ArrowRight className="h-6 w-6 inline ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Ultra Enhanced Visual Element */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 80, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Main Enhanced Card */}
                <motion.div 
                  className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 rounded-3xl p-16 relative overflow-hidden shadow-2xl"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Enhanced Animated Background Pattern */}
                  <div className="absolute inset-0">
                    <motion.div 
                      className="absolute inset-0"
                      animate={{ 
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)"
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                    
                    {/* Additional Pattern Layers */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        backgroundImage: [
                          "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
                          "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%)",
                          "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%)"
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                  </div>

                  {/* Multiple Rotating Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-96 h-96 border-2 border-white/30 rounded-full"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                    <motion.div 
                      className="absolute w-80 h-80 border border-white/20 rounded-full"
                      animate={{ 
                        rotate: -360,
                        scale: [1.1, 1, 1.1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                    <motion.div 
                      className="absolute w-64 h-64 bg-white/10 rounded-full backdrop-blur-sm"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Enhanced Content overlay */}
                  <div className="relative z-10 text-white">
                    <div className="text-right mb-12">
                      <motion.div 
                        className="text-lg font-bold mb-3 tracking-wider"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        DIGITAL MARKETING
                      </motion.div>
                      <motion.div 
                        className="text-sm opacity-90 tracking-widest"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        EXPERTS • 2025
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute bottom-12 right-12"
                      animate={{ 
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="relative">
                        <ArrowRight className="h-10 w-10 text-white drop-shadow-lg" />
                        <motion.div
                          className="absolute -inset-2 bg-white/20 rounded-full blur-md"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Floating Elements Inside Card */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-${2 + i % 3} h-${2 + i % 3} bg-white/${30 + i * 10} rounded-full`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + i * 12}%`
                      }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>

                {/* Fixed Floating Cards Around Main Card */}
                <motion.div
                  className="absolute -top-8 -right-8 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 text-white shadow-2xl min-w-[140px]"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-xs font-bold text-green-400 mb-1 uppercase tracking-wide">ROI Growth</div>
                  <div className="text-2xl font-black text-white">+200%</div>
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 text-white shadow-2xl min-w-[140px]"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wide">Clients</div>
                  <div className="text-2xl font-black text-white">50+</div>
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users className="h-4 w-4 text-blue-400" />
                  </motion.div>
                </motion.div>

                {/* New Conversion Rate Card */}
                <motion.div
                  className="absolute top-1/4 -left-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-5 text-white shadow-2xl min-w-[130px]"
                  animate={{ 
                    x: [0, -10, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="text-xs font-bold text-purple-400 mb-1 uppercase tracking-wide">Conversion</div>
                  <div className="text-xl font-black text-white">+45%</div>
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <BarChart3 className="h-4 w-4 text-purple-400" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Bottom Section */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-4 text-gray-400">
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="text-sm font-medium">A digital marketing agency</span>
              <motion.div 
                className="w-3 h-3 bg-orange-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">based in Europe.</span>
              <motion.div
                className="w-16 h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 border border-white/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-64 h-64 border border-white/20 rounded-full"
            animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
          />
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