import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import companyLogo from '@/assets/company-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-card sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="border-b border-border/50 py-3 hidden md:block backdrop-blur-sm">
          <div className="flex justify-between items-center text-sm text-muted-foreground/80">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@merpatiputihglobal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Karawang, Jawa Barat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-5">
          {/* Logo and company name */}
          <div className="flex items-center space-x-4">
            <img src={companyLogo} alt="PT Merpati Putih Global" className="w-14 h-14 filter drop-shadow-sm" />
            <div>
              <h1 className="text-2xl font-bold text-primary font-serif tracking-tight">PT Merpati Putih Global</h1>
              <p className="text-sm text-corporate-gray font-medium tracking-wide">SOLUTION FOR YOUR BUSINESS PARTNER</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('tentang')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('visi-misi')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Visi & Misi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('layanan')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Layanan
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('tim')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Tim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('legalitas')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Legalitas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button 
              variant="corporate" 
              size="lg"
              onClick={() => scrollToSection('kontak')}
            >
              Hubungi Kami
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('tentang')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection('visi-misi')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Visi & Misi
              </button>
              <button
                onClick={() => scrollToSection('layanan')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('tim')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Tim
              </button>
              <button
                onClick={() => scrollToSection('legalitas')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Legalitas
              </button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Kontak
              </button>
              <Button 
                variant="corporate" 
                size="lg"
                onClick={() => scrollToSection('kontak')}
                className="w-full"
              >
                Hubungi Kami
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;