import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which countries do your digital marketing services cover?",
      answer: "We serve throughout Europe. We develop strategies with our local market knowledge in Germany, France, Italy, Netherlands, Spain, UK and other EU countries."
    },
    {
      question: "How soon will I start seeing results?",
      answer: "You'll start seeing first results in Google Ads campaigns within 1-2 weeks, SEO work within 3-6 months, and social media marketing within 2-4 weeks. Each project is different and we provide a clear timeline after detailed analysis."
    },
    {
      question: "What industries do you have experience in?",
      answer: "We have experience in a wide range of sectors including e-commerce, technology, healthcare, education, finance, tourism, fashion and B2B services. We understand the unique dynamics of each sector and develop appropriate strategies."
    },
    {
      question: "How do you ensure GDPR compliance?",
      answer: "We ensure full compliance with GDPR rules in all our digital marketing activities. Our data collection, processing and storage processes are designed in accordance with EU legislation. We also advise our clients on GDPR-compliant marketing strategies."
    },
    {
      question: "How is monthly reporting done?",
      answer: "We prepare detailed performance reports every month. These reports include traffic analysis, conversion rates, ROI calculations, competitive analysis and next month's recommendations. We also evaluate the results together with monthly meetings."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "We usually apply a 6-month minimum contract period because digital marketing results develop over time. However, we can also make shorter-term agreements for project-based work. We offer a 30-day trial period."
    },
    {
      question: "My budget is limited, which services should I start with?",
      answer: "For businesses with limited budgets, we recommend starting with Google Ads and social media marketing first. These channels deliver quick results and you can control your budget. After achieving successful results, you can invest in SEO and other channels."
    },
    {
      question: "Do you do competitor analysis?",
      answer: "Yes, we have comprehensive competitor analysis services. We analyze your competitors' digital strategies, keywords they use, ad copy and social media performance. With this information, we develop strategies that will give you a competitive advantage."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Your Questions Answered
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most frequently asked questions about our digital marketing services.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
                whileHover={{ borderColor: 'rgba(249, 115, 22, 0.3)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-orange-500" />
                    ) : (
                      <Plus className="h-6 w-6 text-orange-500" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Don't see your question here?
            </h3>
            <p className="text-orange-100 mb-6">
              You can ask anything about digital marketing that comes to mind. 
              Our experts are happy to help you.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ask Us
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;