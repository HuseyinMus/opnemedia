import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: 'Google Partner',
      logo: '/Google Partner-01.png',
      description: 'Certified Google Ads Partner'
    },
    {
      name: 'Meta Business Partner',
      logo: '/Met-Business-Partners.png',
      description: 'Official Meta Business Partner'
    },
    {
      name: 'LinkedIn Marketing Partner',
      logo: '/lms-partner-specialty-li-marketing-partner-logo-dsk-v01.jpg.original.jpg',
      description: 'LinkedIn Marketing Solutions Partner'
    },
    {
      name: 'TikTok Marketing Partner',
      logo: '/tipdilz7wysq-3w7mlZOV5GO03vIfCpUki2.png',
      description: 'TikTok for Business Partner'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4"
          >
            <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/20">
              Partnerlerimiz
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Güvenilir Ortaklıklar
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Dünyanın en büyük dijital pazarlama platformlarının resmi partneri olarak, 
            size en güncel araçlar ve stratejilerle hizmet veriyoruz.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative mb-6 w-full h-20 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-sm font-medium">Resmi Sertifikalı Partnerlikler</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;