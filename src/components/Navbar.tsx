import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HİZMETLER', href: '#services' },
    { name: 'FİYATLAR', href: '#pricing' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex space-x-0">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-8 py-4 text-sm font-medium transition-colors border-r border-gray-200 last:border-r-0 ${
                    index === 0 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Side Navigation */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-8">
          <motion.div 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-black font-bold text-lg">o</span>
          </motion.div>
          
          <div className="flex flex-col space-y-6 text-white text-xs font-medium tracking-wider transform -rotate-90 origin-center">
            <motion.button 
              onClick={() => scrollToSection('#services')}
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.1 }}
            >
              DIGITAL MARKETING
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('#about')}
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.1 }}
            >
              DESIGNING
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('#case-studies')}
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.1 }}
            >
              DEVELOPMENT
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Top Right Menu */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 right-6 z-50 flex items-center space-x-4"
      >
        <motion.button 
          onClick={onSearchClick}
          className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Search className="h-5 w-5" />
        </motion.button>
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-medium">MENU</span>
          <div className="flex flex-col space-y-1">
            <motion.div 
              className="w-6 h-0.5 bg-current"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
            />
            <motion.div 
              className="w-6 h-0.5 bg-current"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.div 
              className="w-6 h-0.5 bg-current"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile/Desktop Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <div className="flex items-center justify-between p-6">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold">o</span>
              </div>
              <span className="text-white text-xl font-light">openMedia</span>
            </motion.div>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
          </div>
          
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-8">
              {['Home', 'About', 'Services', 'Works', 'Blog', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="block text-6xl md:text-8xl font-light text-white hover:text-orange-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;