import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-mesh overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
          {/* Left content */}
          <div className="space-y-10 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-corporate-gray-dark leading-[1.1] tracking-tight">
                Solusi Terpercaya untuk
                <span className="text-primary font-serif italic"> Bisnis Anda</span>
              </h1>
              <p className="text-xl md:text-2xl text-corporate-gray leading-relaxed font-light max-w-2xl">
                PT Merpati Putih Global hadir sebagai mitra bisnis yang mengutamakan kualitas, 
                efisiensi biaya, dan ketepatan pengiriman untuk kesuksesan perusahaan Anda.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-corporate-gray-dark font-medium">General Supplier Terpercaya</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-corporate-gray-dark font-medium">Layanan Outsourcing Profesional</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-corporate-gray-dark font-medium">Desain Grafis Berkualitas</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-corporate-gray-dark font-medium">Konsultasi Real Estat</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="corporate" 
                size="xl"
                onClick={() => scrollToSection('layanan')}
                className="group"
              >
                Jelajahi Layanan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="corporate-outline" 
                size="xl"
                onClick={() => scrollToSection('tentang')}
              >
                Tentang Kami
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-scale-up">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src={heroImage}
                alt="PT Merpati Putih Global Office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-glass p-8 animate-fade-up border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-serif">3+</div>
                <div className="text-sm text-corporate-gray font-medium">Tahun Pengalaman</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-glass p-8 animate-fade-up border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-serif">100%</div>
                <div className="text-sm text-corporate-gray font-medium">Kepuasan Klien</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-corporate-blue-light/15 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;