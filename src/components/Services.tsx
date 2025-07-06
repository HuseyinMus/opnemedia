import React from 'react';
import { 
  Target, 
  Search, 
  Lightbulb, 
  FileText, 
  TrendingUp, 
  Mail 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Meta & Google Ads',
      description: 'High-ROI advertising campaigns tailored for your audience with advanced targeting and optimization.',
      features: ['Campaign Strategy', 'Ad Creation', 'Performance Tracking', 'Budget Optimization']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Make your business visible on Google and generate organic leads with proven SEO strategies.',
      features: ['Technical SEO', 'Content Optimization', 'Local SEO', 'Link Building']
    },
    {
      icon: Lightbulb,
      title: 'Marketing Consultancy',
      description: 'We help you build a custom strategy that actually works for your specific business needs.',
      features: ['Strategy Development', 'Market Analysis', 'Competitor Research', 'Growth Planning']
    },
    {
      icon: FileText,
      title: 'Content Strategy & Creation',
      description: 'Blog articles, social media content, and more to engage your audience and drive conversions.',
      features: ['Content Planning', 'Blog Writing', 'Social Media', 'Video Content']
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate Optimization',
      description: 'Turn your traffic into paying customers with data-driven CRO strategies and testing.',
      features: ['A/B Testing', 'Landing Pages', 'User Experience', 'Analytics Setup']
    },
    {
      icon: Mail,
      title: 'Email Marketing & Automation',
      description: 'Retain your audience and grow with personalized email flows and automated campaigns.',
      features: ['Email Campaigns', 'Automation Setup', 'List Building', 'Performance Analysis']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to drive growth and maximize your ROI across all channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="bg-orange-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <Target className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;