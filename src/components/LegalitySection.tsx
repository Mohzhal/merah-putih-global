import { FileText, CreditCard, Building2, CheckCircle, Phone, Mail } from 'lucide-react';

const LegalitySection = () => {
  const legalDocuments = [
    {
      icon: FileText,
      title: "NIB (Nomor Induk Berusaha)",
      number: "2012220080385",
      description: "Nomor identitas resmi untuk kegiatan usaha yang diterbitkan oleh OSS",
      status: "Aktif"
    },
    {
      icon: FileText,
      title: "NPWP (Nomor Pokok Wajib Pajak)",
      number: "62.116.705.5-408.000",
      description: "Nomor identitas wajib pajak untuk keperluan administrasi perpajakan",
      status: "Aktif"
    }
  ];

  const bankInfo = [
    {
      bank: "Bank Mandiri",
      accountNumber: "Tersedia atas permintaan",
      accountName: "PT Merpati Putih Global",
      type: "Rekening Operasional"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section id="legalitas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Legalitas <span className="text-blue-600">Perusahaan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan yang telah terdaftar resmi dengan dokumen lengkap 
              dan memenuhi semua persyaratan hukum yang berlaku.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Legal Documents */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Dokumen Legal
              </h3>
              
              <div className="space-y-6">
                {legalDocuments.map((doc, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <doc.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-800">{doc.title}</h4>
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {doc.status}
                          </span>
                        </div>
                        <p className="text-blue-600 font-mono text-lg mb-2 font-semibold">{doc.number}</p>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Legal Info */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Dokumen Pendukung
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Akta Pendirian Perusahaan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">SK Kemenkumham</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">TDP (Tanda Daftar Perusahaan)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">SIUP (Surat Izin Usaha Perdagangan)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Information & Company Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                Informasi Bank
              </h3>

              <div className="space-y-6">
                {bankInfo.map((bank, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-800">{bank.bank}</h4>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {bank.type}
                          </span>
                        </div>
                        <p className="text-blue-600 font-mono text-lg mb-1 font-semibold">{bank.accountNumber}</p>
                        <p className="text-gray-600 text-sm">{bank.accountName}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Info */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-4">Informasi Perusahaan</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-4 h-4 opacity-80 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Nama:</span>
                          <span className="ml-2">PT Merpati Putih Global</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <svg className="w-4 h-4 opacity-80 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-medium">Alamat:</span>
                          <span className="ml-2">Karawang, Jawa Barat, Indonesia</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 opacity-80 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Telepon:</span>
                          <span className="ml-2">+62 813 89745 982</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 opacity-80 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Email:</span>
                          <span className="ml-2">ptmerpatiputihglobal@gmail.com</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 opacity-80 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Status:</span>
                          <span className="ml-2">Aktif dan Beroperasi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Hubungi Kami
                </h4>
                <div className="space-y-3">
                  <a href="tel:+6281389745982" className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Telepon</p>
                      <p className="text-green-600 font-medium">+62 813 89745 982</p>
                    </div>
                  </a>
                  <a href="mailto:ptmerpatiputihglobal@gmail.com" className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-blue-600 font-medium">ptmerpatiputihglobal@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Compliance Badge */}
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Fully Compliant</h4>
                <p className="text-green-700 text-sm max-w-sm mx-auto">
                  Semua dokumen legal lengkap dan memenuhi standar regulasi yang berlaku di Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Butuh Informasi Lebih Lanjut?
              </h3>
              <p className="text-gray-600 mb-6">
                Tim kami siap membantu Anda dengan pertanyaan seputar legalitas dan dokumen perusahaan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+6281389745982"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Sekarang
                </a>
                <a 
                  href="mailto:ptmerpatiputihglobal@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalitySection;