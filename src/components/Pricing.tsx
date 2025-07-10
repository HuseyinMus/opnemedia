import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Target, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Başlangıç",
      description: "Küçük işletmeler için ideal",
      monthlyPrice: 1500,
      annualPrice: 15000,
      icon: Target,
      color: "blue",
      features: [
        "Google Ads yönetimi",
        "Temel SEO optimizasyonu",
        "Sosyal medya yönetimi (2 platform)",
        "Aylık performans raporu",
        "Email destek",
        "Temel rakip analizi"
      ],
      limitations: [
        "Maksimum 3 kampanya",
        "Aylık 10.000 TL reklam bütçesi"
      ]
    },
    {
      name: "Profesyonel",
      description: "Büyüyen işletmeler için",
      monthlyPrice: 3500,
      annualPrice: 35000,
      icon: Zap,
      color: "orange",
      popular: true,
      features: [
        "Tüm Başlangıç özellikleri",
        "Meta Ads (Facebook & Instagram)",
        "LinkedIn Ads yönetimi",
        "Gelişmiş SEO stratejisi",
        "İçerik pazarlama",
        "Conversion rate optimization",
        "Haftalık performans toplantıları",
        "Telefon desteği",
        "Detaylı rakip analizi"
      ],
      limitations: [
        "Maksimum 8 kampanya",
        "Aylık 50.000 TL reklam bütçesi"
      ]
    },
    {
      name: "Kurumsal",
      description: "Büyük şirketler için",
      monthlyPrice: 7500,
      annualPrice: 75000,
      icon: TrendingUp,
      color: "purple",
      features: [
        "Tüm Profesyonel özellikleri",
        "TikTok Ads yönetimi",
        "Marketing automation",
        "Influencer marketing",
        "Video content creation",
        "Advanced analytics & BI",
        "Dedicated account manager",
        "24/7 öncelikli destek",
        "Özel strateji geliştirme",
        "Aylık yüz yüze toplantılar"
      ],
      limitations: [
        "Sınırsız kampanya",
        "Sınırsız reklam bütçesi"
      ]
    }
  ];

  const getColorClasses = (color: string, isPopular?: boolean) => {
    const colors = {
      blue: {
        border: isPopular ? 'border-blue-500' : 'border-gray-800',
        bg: isPopular ? 'bg-blue-500/10' : 'bg-gray-900',
        icon: 'bg-blue-500',
        button: 'bg-blue-500 hover:bg-blue-600'
      },
      orange: {
        border: isPopular ? 'border-orange-500' : 'border-gray-800',
        bg: isPopular ? 'bg-orange-500/10' : 'bg-gray-900',
        icon: 'bg-orange-500',
        button: 'bg-orange-500 hover:bg-orange-600'
      },
      purple: {
        border: isPopular ? 'border-purple-500' : 'border-gray-800',
        bg: isPopular ? 'bg-purple-500/10' : 'bg-gray-900',
        icon: 'bg-purple-500',
        button: 'bg-purple-500 hover:bg-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/20">
              Fiyatlandırma
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Size Uygun Planı Seçin
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            İşletmenizin büyüklüğüne ve ihtiyaçlarına göre tasarlanmış esnek fiyatlandırma seçenekleri.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Aylık
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.2 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Yıllık
            </span>
            {isAnnual && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                2 Ay Ücretsiz
              </span>
            )}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <AnimatedSection key={plan.name} delay={index * 0.2}>
                <motion.div
                  className={`relative ${colorClasses.bg} ${colorClasses.border} border-2 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  whileHover={{ scale: 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        En Popüler
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`${colorClasses.icon} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">₺{price.toLocaleString()}</span>
                        <span className="text-gray-400 ml-2">
                          /{isAnnual ? 'yıl' : 'ay'}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-green-400 mt-2">
                          Aylık ₺{(price / 10).toLocaleString()} (2 ay ücretsiz)
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations && (
                    <div className="border-t border-gray-800 pt-6 mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Limitler:</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start mb-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full ${colorClasses.button} text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                  >
                    Başlayın
                  </button>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Özel İhtiyaçlarınız mı Var?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Standart planlarımız ihtiyaçlarınızı karşılamıyorsa, size özel bir paket hazırlayabiliriz. 
              Büyük ölçekli projeler için özel fiyatlandırma seçeneklerimiz mevcuttur.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-gray-700 hover:border-orange-500/50"
            >
              Özel Teklif İsteyin
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;