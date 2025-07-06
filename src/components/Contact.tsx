import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Clock, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AppointmentModal from './AppointmentModal';
import { validateForm, sanitizeInput, FormData } from '../utils/formValidation';
import { sendEmail, sendNotificationToAdmin } from '../utils/emailService';

interface ContactProps {
  onSubmitSuccess: () => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    message: '',
    honeypot: '',
    timestamp: Date.now()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showAppointment, setShowAppointment] = useState(false);
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Add submission timestamp
    const submissionData = {
      ...formData,
      timestamp: formStartTime
    };

    // Validate form
    const validation = validateForm(submissionData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    if (validation.isSpam) {
      console.warn('Spam detected:', validation.spamReasons);
      // Don't show error to user, just silently reject
      setIsSubmitting(false);
      // Show success message to prevent spam detection
      onSubmitSuccess();
      setFormData({ 
        fullName: '', 
        email: '', 
        companyName: '', 
        message: '', 
        honeypot: '',
        timestamp: Date.now()
      });
      return;
    }

    try {
      // Sanitize inputs
      const sanitizedData = {
        fullName: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        companyName: sanitizeInput(formData.companyName),
        message: sanitizeInput(formData.message),
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent
      };

      // Send email
      const emailSent = await sendEmail(sanitizedData);
      
      if (emailSent) {
        // Send notification to admin
        await sendNotificationToAdmin(sanitizedData);
        
        onSubmitSuccess();
        setFormData({ 
          fullName: '', 
          email: '', 
          companyName: '', 
          message: '', 
          honeypot: '',
          timestamp: Date.now()
        });
        setFormStartTime(Date.now());
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Let's Grow Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital marketing? Get in touch with our experts and let's discuss how we can help your business grow.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left" className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get a Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white ${
                      errors.fullName ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white"
                    placeholder="Your company name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white ${
                      errors.message ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Tell us about your project and how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </motion.div>

                {errors.submit && (
                  <div className="bg-red-500/10 border border-red-500 rounded-lg p-4">
                    <p className="text-red-500 text-sm">{errors.submit}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to take your digital marketing to the next level? We're here to help you grow your business with proven strategies and transparent results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', content: 'heser000@gmail.com', href: 'mailto:heser000@gmail.com' },
                  { icon: Phone, title: 'Phone', content: '+90 537 936 94 55', href: 'tel:+905379369455' },
                  { icon: MapPin, title: 'Coverage', content: 'Serving businesses across Europe' },
                  { icon: Clock, title: 'Response Time', content: 'We respond within 24 hours' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-gray-300 hover:text-orange-500 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white"
              >
                <h4 className="text-lg font-semibold mb-2">Book a Meeting</h4>
                <p className="text-orange-100 mb-4">
                  Prefer to talk? Schedule a free consultation call with our experts.
                </p>
                <button
                  onClick={() => setShowAppointment(true)}
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Meeting
                </button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={showAppointment} 
        onClose={() => setShowAppointment(false)} 
      />
    </>
  );
};

export default Contact;