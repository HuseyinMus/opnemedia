import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Dijital pazarlama hizmetleriniz hangi ülkeleri kapsıyor?",
      answer: "Avrupa'nın tamamında hizmet veriyoruz. Almanya, Fransa, İtalya, Hollanda, İspanya, İngiltere ve diğer AB ülkelerinde yerel pazar bilgimizle stratejiler geliştiriyoruz."
    },
    {
      question: "Sonuçları ne kadar sürede görmeye başlarım?",
      answer: "Google Ads kampanyalarında ilk sonuçları 1-2 hafta içinde, SEO çalışmalarında 3-6 ay içinde, sosyal medya pazarlamasında ise 2-4 hafta içinde görmeye başlarsınız. Her proje farklıdır ve detaylı analiz sonrası net zaman çizelgesi sunuyoruz."
    },
    {
      question: "Hangi sektörlerde deneyiminiz var?",
      answer: "E-ticaret, teknoloji, sağlık, eğitim, finans, turizm, moda ve B2B hizmetler dahil olmak üzere geniş bir sektör yelpazesinde deneyimimiz bulunuyor. Her sektörün kendine özgü dinamiklerini anlıyor ve buna uygun stratejiler geliştiriyoruz."
    },
    {
      question: "GDPR uyumluluğu nasıl sağlıyorsunuz?",
      answer: "Tüm dijital pazarlama faaliyetlerimizde GDPR kurallarına tam uyum sağlıyoruz. Veri toplama, işleme ve saklama süreçlerimiz AB mevzuatına uygun olarak tasarlanmıştır. Müşterilerimize de GDPR uyumlu pazarlama stratejileri konusunda danışmanlık veriyoruz."
    },
    {
      question: "Aylık raporlama nasıl yapılıyor?",
      answer: "Her ay detaylı performans raporları hazırlıyoruz. Bu raporlarda trafik analizi, dönüşüm oranları, ROI hesaplamaları, rekabet analizi ve gelecek ay önerileri yer alıyor. Ayrıca aylık görüşmelerle sonuçları birlikte değerlendiriyoruz."
    },
    {
      question: "Minimum sözleşme süresi var mı?",
      answer: "Genellikle 6 aylık minimum sözleşme süresi uyguluyoruz çünkü dijital pazarlama sonuçları zaman içinde gelişir. Ancak proje bazlı çalışmalar için daha kısa süreli anlaşmalar da yapabiliyoruz. İlk 30 gün deneme süresi sunuyoruz."
    },
    {
      question: "Bütçem sınırlı, hangi hizmetlerle başlamalıyım?",
      answer: "Sınırlı bütçeli işletmeler için öncelikle Google Ads ve sosyal medya pazarlama ile başlamanızı öneriyoruz. Bu kanallar hızlı sonuç verir ve bütçenizi kontrol edebilirsiniz. Başarılı sonuçlar aldıktan sonra SEO ve diğer kanallara yatırım yapabilirsiniz."
    },
    {
      question: "Rakip analizi yapıyor musunuz?",
      answer: "Evet, kapsamlı rakip analizi hizmetimiz var. Rakiplerinizin dijital stratejilerini, kullandıkları anahtar kelimeleri, reklam metinlerini ve sosyal medya performanslarını analiz ediyoruz. Bu bilgilerle size rekabet avantajı sağlayacak stratejiler geliştiriyoruz."
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
              Sık Sorulan Sorular
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Merak Ettikleriniz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dijital pazarlama hizmetlerimiz hakkında en çok sorulan soruların yanıtlarını burada bulabilirsiniz.
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
              Sorunuz burada yok mu?
            </h3>
            <p className="text-orange-100 mb-6">
              Dijital pazarlama konusunda aklınıza takılan her şeyi sorabilirsiniz. 
              Uzmanlarımız size yardımcı olmaktan mutluluk duyar.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Bize Sorun
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;