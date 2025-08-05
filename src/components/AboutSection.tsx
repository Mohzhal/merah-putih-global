import { Calendar, MapPin, Users, Target, FileText, Building, Palette, Home, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            Tentang <span className="text-blue-600 font-serif italic">Kami</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Membangun kepercayaan melalui dedikasi dan komitmen untuk memberikan 
            solusi bisnis terbaik bagi setiap mitra kerja kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 font-serif">
                Perjalanan Kami
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                PT Merpati Putih Global didirikan di Kabupaten Karawang pada tanggal 20 Desember 2020 
                dengan No AHU058560.AH Tahun 2020 yang beralamat di JL. Manunggal VII, Kp Rawa Bagi 
                Kel Palumbonsari Kab Karawang.
              </p>
              <p className="text-gray-600 leading-relaxed">
                PT Merpati Putih Global telah dilengkapi dengan berbagai persyaratan perizinan dan 
                legalitas dari instansi terkait. Sebagai perusahaan swasta, kami berkomitmen untuk 
                memberikan layanan terbaik di berbagai bidang usaha kami.
              </p>
            </div>

            {/* Key info cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200">
                <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Didirikan</h4>
                <p className="text-gray-600 font-medium">20 Desember 2020</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200">
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Lokasi</h4>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  Karawang - Jawa Barat<br />
                  JL. Manunggal VII, Kp Rawa Bagi<br />
                  Kel Palumbonsari
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Telepon</p>
                    <p className="text-gray-600">+62 813 89745 982</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600 text-sm">ptmerpatiputihglobal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Business Fields */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 font-serif">
              Bidang Usaha Kami
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Building className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">General Supplier</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Menyediakan berbagai kebutuhan bisnis dan industri dengan kualitas terjamin dan harga kompetitif.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Users className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Outsourcing</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Solusi tenaga kerja profesional yang fleksibel sesuai kebutuhan perusahaan Anda.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Palette className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Graphic Design</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Layanan desain grafis kreatif untuk membangun identitas visual brand Anda.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Home className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Real Estate</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Konsultasi dan layanan properti untuk investasi dan kebutuhan bisnis Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-6 text-center">Pencapaian Kami</h4>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">4+</div>
                  <div className="text-sm text-gray-300 mt-1">Tahun Berpengalaman</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">4</div>
                  <div className="text-sm text-gray-300 mt-1">Bidang Usaha</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">100%</div>
                  <div className="text-sm text-gray-300 mt-1">Legal & Berizin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Siap Bermitra dengan Kami?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi dan diskusi lebih lanjut mengenai kebutuhan bisnis Anda. 
              Tim profesional kami siap memberikan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Hubungi Kami Sekarang
              </button>
              <a href="tel:+6281389745982" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+62 813 89745 982</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;