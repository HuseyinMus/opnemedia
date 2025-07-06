import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Video, Phone } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState('consultation');

  const services = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      duration: '30 minutes',
      description: 'Discuss your digital marketing needs and get expert advice',
      icon: Video,
      calendlyUrl: 'https://calendly.com/heser000/30min'
    },
    {
      id: 'strategy',
      title: 'Strategy Session',
      duration: '60 minutes',
      description: 'Deep dive into your marketing strategy and create an action plan',
      icon: Calendar,
      calendlyUrl: 'https://calendly.com/heser000/30min'
    },
    {
      id: 'audit',
      title: 'Marketing Audit',
      duration: '45 minutes',
      description: 'Complete analysis of your current marketing efforts',
      icon: Clock,
      calendlyUrl: 'https://calendly.com/heser000/30min'
    }
  ];

  const selectedServiceData = services.find(s => s.id === selectedService);

  const handleBookAppointment = () => {
    if (selectedServiceData) {
      window.open(selectedServiceData.calendlyUrl, '_blank');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-white">Book a Meeting</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedService === service.id
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <service.icon className={`h-8 w-8 mb-4 ${
                    selectedService === service.id ? 'text-orange-500' : 'text-gray-400'
                  }`} />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{service.duration}</p>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </motion.button>
              ))}
            </div>

            {selectedServiceData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-xl p-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedServiceData.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedServiceData.description}</p>
                <div className="flex items-center text-orange-500 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{selectedServiceData.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Video className="h-5 w-5 mr-2" />
                  <span>Online meeting via Google Meet</span>
                </div>
              </motion.div>
            )}

            <div className="flex space-x-4">
              <motion.button
                onClick={handleBookAppointment}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </motion.button>
              <motion.button
                onClick={onClose}
                className="px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancel
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              You'll be redirected to Calendly to select your preferred time slot
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;