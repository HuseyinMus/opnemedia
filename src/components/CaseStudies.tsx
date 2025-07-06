import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const testimonials = [
    {
      quote: "openMedia helped us reduce our ad spend by 30% while increasing conversions by 45%. Their data-driven approach completely transformed our marketing strategy.",
      author: "Johann M.",
      location: "Berlin",
      company: "Tech Startup",
      rating: 5,
      results: {
        metric1: "30% Cost Reduction",
        metric2: "45% More Conversions",
        metric3: "3x ROI Increase"
      }
    },
    {
      quote: "Their strategic input changed how we do marketing. We trust them 100% with our digital presence and they consistently deliver outstanding results.",
      author: "Lara B.",
      location: "Amsterdam",
      company: "E-commerce Brand",
      rating: 5,
      results: {
        metric1: "200% Revenue Growth",
        metric2: "50% Lower CPA",
        metric3: "5x Organic Traffic"
      }
    },
    {
      quote: "Working with openMedia has been a game-changer for our business. Their expertise in European markets is unmatched.",
      author: "Marco R.",
      location: "Milan",
      company: "Fashion Retailer",
      rating: 5,
      results: {
        metric1: "150% Sales Increase",
        metric2: "60% Better CTR",
        metric3: "4x Lead Generation"
      }
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped European companies achieve their digital marketing goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-200 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mb-6">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.location} • {testimonial.company}</div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-orange-500 font-semibold text-sm">{testimonial.results.metric1}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-blue-400 font-semibold text-sm">{testimonial.results.metric2}</div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-green-400 font-semibold text-sm">{testimonial.results.metric3}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;