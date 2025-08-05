import { useState } from 'react';
import klien1 from '@/assets/klien1.jpg';
import klien2 from '@/assets/klien2.jpg';
import klien3 from '@/assets/klien3.jpg';
import klien4 from '@/assets/klien4.jpg';
import klien5 from '@/assets/klien5.jpg';
import klien6 from '@/assets/klien6.jpg';
import klien7 from '@/assets/klien7.jpg';
import klien8 from '@/assets/klien8.jpg';
import klien9 from '@/assets/klien9.jpg';
import klien10 from '@/assets/klien10.jpg';
import klien11 from '@/assets/klien11.jpg';

const PartnersSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Partner data with actual client logos - FIXED SYNTAX
  const partners = [
    { name: "Klien 1", logo: klien1 },
    { name: "Klien 2", logo: klien2 },
    { name: "Klien 3", logo: klien3 },
    { name: "Klien 4", logo: klien4 },
    { name: "Klien 5", logo: klien5 },
    { name: "Klien 6", logo: klien6 },
    { name: "Klien 7", logo: klien7 },
    { name: "Klien 8", logo: klien8 },
    { name: "Klien 9", logo: klien9 },
    { name: "Klien 10", logo: klien10 },
    { name: "Klien 11", logo: klien11 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .pause-animation {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Dukungan & <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Klien</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dipercaya oleh berbagai perusahaan dan organisasi untuk memberikan 
              solusi bisnis terbaik dan membangun kemitraan jangka panjang.
            </p>
          </div>

          {/* Partners logos with horizontal scroll animation */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-3xl py-16 shadow-2xl border border-blue-100">
            {/* Gradient overlays untuk efek fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
            
            <div 
              className="flex items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Animasi scroll otomatis */}
              <div 
                className={`flex items-center space-x-8 ${isHovered ? 'pause-animation' : 'animate-scroll'}`}
                style={{ 
                  minWidth: '200%'
                }}
              >
                {/* Duplikasi partners untuk seamless loop */}
                {partners.concat(partners).map((partner, index) => (
                  <div
                    key={`partner-${index}`}
                    className="flex-shrink-0 w-40 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:shadow-2xl transition-all duration-500 transform hover:scale-110 cursor-pointer border-2 border-gray-100 hover:border-blue-200 group"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-32 max-h-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-lg filter group-hover:brightness-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback jika gambar error
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="hidden w-full h-full bg-blue-100 rounded-lg items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <span className="text-blue-600 font-semibold text-sm">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Klien Aktif", color: "blue" },
              { number: "100+", label: "Proyek Selesai", color: "green" },
              { number: "3+", label: "Tahun Pengalaman", color: "purple" },
              { number: "100%", label: "Kepuasan Klien", color: "orange" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${
                  stat.color === 'blue' ? 'from-blue-600 to-blue-400' :
                  stat.color === 'green' ? 'from-green-600 to-green-400' :
                  stat.color === 'purple' ? 'from-purple-600 to-purple-400' :
                  'from-orange-600 to-orange-400'
                } bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

       
          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">
                  Bergabunglah dengan Klien-Klien Terpercaya Kami
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
                  Dapatkan solusi bisnis terbaik dan rasakan pengalaman kerja sama yang profesional bersama PT Merpati Putih Global.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+6281389745982"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    📞 Konsultasi Gratis
                  </a>
                  <a 
                    href="mailto:ptmerpatiputihglobal@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all duration-300 border-2 border-blue-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    ✉️ Kirim Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersSection;