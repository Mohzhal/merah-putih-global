import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import companyLogo from '@/assets/company-logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-corporate-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={companyLogo} alt="PT Merpati Putih Global" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">PT Merpati Putih Global</h3>
                <p className="text-sm text-gray-300">SOLUTION FOR YOUR BUSINESS PARTNER</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Mitra bisnis terpercaya yang mengutamakan kualitas, efisiensi biaya, 
              dan ketepatan pengiriman untuk kesuksesan perusahaan Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigasi</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('tentang')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection('visi-misi')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Visi & Misi
              </button>
              <button
                onClick={() => scrollToSection('layanan')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('tim')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Tim
              </button>
              <button
                onClick={() => scrollToSection('legalitas')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Legalitas
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                General Supplier
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Outsourcing
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Desain Grafis
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Real Estate
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Konsultasi Bisnis
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Jl. Industri No. 123</p>
                  <p className="text-gray-300">Karawang, Jawa Barat 41361</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+62 123 456 7890</p>
                  <p className="text-gray-300">+62 098 765 4321</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@merpatiputihglobal.com</p>
                  <p className="text-gray-300">business@merpatiputihglobal.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 PT Merpati Putih Global. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;