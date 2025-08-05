import { Package, Users, Palette, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "General Supplier",
      description: "Penyediaan berbagai kebutuhan bisnis dengan jaringan supplier terpercaya dan kualitas terjamin.",
      features: [
        "Pengadaan barang berkualitas",
        "Jaringan supplier terpercaya",
        "Harga kompetitif",
        "Sistem procurement yang efisien"
      ]
    },
    {
      icon: Users,
      title: "Outsourcing",
      description: "Layanan penyediaan tenaga kerja profesional yang sesuai dengan kebutuhan spesifik perusahaan Anda.",
      features: [
        "Tenaga kerja berkualitas",
        "Proses seleksi ketat",
        "Manajemen SDM profesional",
        "Fleksibilitas kontrak"
      ]
    },
    {
      icon: Palette,
      title: "Desain Grafis",
      description: "Jasa desain grafis kreatif untuk berbagai kebutuhan branding dan promosi bisnis Anda.",
      features: [
        "Desain logo dan branding",
        "Material promosi",
        "Desain digital marketing",
        "Konsep kreatif inovatif"
      ]
    },
    {
      icon: Building,
      title: "Real Estat",
      description: "Konsultasi dan layanan real estat untuk investasi properti yang menguntungkan dan strategis.",
      features: [
        "Konsultasi investasi properti",
        "Analisis market properti",
        "Manajemen aset properti",
        "Strategi investasi optimal"
      ]
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-gradient-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-corporate-gray-dark mb-6 tracking-tight">
            Layanan <span className="text-primary font-serif italic">Kami</span>
          </h2>
          <p className="text-xl md:text-2xl text-corporate-gray max-w-4xl mx-auto font-light leading-relaxed">
            Solusi komprehensif untuk berbagai kebutuhan bisnis Anda dengan 
            standar kualitas tinggi dan layanan profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-card hover:shadow-premium transition-all duration-500 transform hover:-translate-y-4 group border border-white/50"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-gray-dark mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-corporate-gray leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-corporate-gray">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="corporate-outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-white"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Memulai Kerjasama?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami. 
              Kami siap memberikan solusi terbaik untuk perusahaan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Konsultasi Gratis
              </Button>
              <Button 
                variant="corporate-outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;