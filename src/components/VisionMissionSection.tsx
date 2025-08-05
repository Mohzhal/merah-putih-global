import { Eye, Target, Star, Clock, DollarSign, Truck } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section id="visi-misi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visi & <span className="text-blue-600">Misi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Panduan dan arah perusahaan dalam memberikan layanan terbaik 
            untuk mencapai kesuksesan bersama mitra bisnis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                <Eye className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Visi Kami</h3>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <p className="text-lg leading-relaxed text-center">
                Menjadi salah satu perusahaan yang memegang suatu komitmen untuk memberikan 
                kepuasan pada pelanggan dengan mengutamakan Quality, Cost & Delivery (QCD) 
                dalam pelayanan.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Fokus Utama:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-600"><strong className="text-gray-800">Quality</strong> - Kualitas terjamin</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-600"><strong className="text-gray-800">Cost</strong> - Efisiensi biaya</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-600"><strong className="text-gray-800">Delivery</strong> - Ketepatan pengiriman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                <Target className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Misi Kami</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed mb-4 text-center">
                  Membangun citra kerja sama yang baik dalam membantu kegiatan bisnis pelanggan 
                  dengan melaksanakan sistem mutu yang terkendali serta berupaya untuk selalu berinovasi.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 text-center">Nilai-Nilai Perusahaan</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                        <Star className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Jujur</h4>
                      <p className="text-sm text-gray-600">Integritas dalam setiap tindakan</p>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                        <Target className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Profesional</h4>
                      <p className="text-sm text-gray-600">Keahlian dan dedikasi tinggi</p>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                        <Eye className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Transparan</h4>
                      <p className="text-sm text-gray-600">Keterbukaan dalam komunikasi</p>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                        <Clock className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Fleksibel</h4>
                      <p className="text-sm text-gray-600">Adaptasi sesuai kebutuhan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Komitmen Kami untuk Anda</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Quality</h4>
                <p className="text-gray-300 text-sm">Standar kualitas tinggi dalam setiap layanan</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Cost Efficiency</h4>
                <p className="text-gray-300 text-sm">Solusi hemat biaya tanpa mengurangi kualitas</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">On-Time Delivery</h4>
                <p className="text-gray-300 text-sm">Ketepatan waktu sebagai prioritas utama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;