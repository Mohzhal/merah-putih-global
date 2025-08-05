import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, company, service, message } = formData;

    const whatsappMessage = `Halo, saya ${name} dari ${company || '-'}.\nEmail: ${email}\nTelepon: ${phone}\nLayanan: ${service}\n\nPesan:\n${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/6281389745982?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 123 456 7890", "+62 098 765 4321"],
      description: "Hubungi kami langsung untuk konsultasi"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@merpatiputihglobal.com", "business@merpatiputihglobal.com"],
      description: "Kirim email untuk pertanyaan detail"
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: ["Jl. Industri No. 123", "Karawang, Jawa Barat 41361"],
      description: "Kunjungi kantor kami untuk meeting"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
      description: "Kami siap melayani Anda"
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-corporate-gray-dark mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
            Siap membantu Anda dengan solusi bisnis terbaik. Konsultasikan kebutuhan 
            perusahaan Anda dengan tim ahli kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-corporate-gray-dark mb-8">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-card-custom border border-primary/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-corporate-gray-dark mb-2">{info.title}</h4>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-primary font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-corporate-gray text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-primary rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Konsultasi Gratis</h4>
              <p className="mb-4 opacity-90">
                Diskusikan kebutuhan bisnis Anda dengan tim ahli kami tanpa biaya.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => {
                  const message = encodeURIComponent("Halo, saya ingin konsultasi dengan tim PT Merpati Putih Global.");
                  window.open(`https://wa.me/6281389745982?text=${message}`, '_blank');
                }}
              >
                Mulai Konsultasi
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-corporate border border-primary/10">
            <h3 className="text-2xl font-semibold text-corporate-gray-dark mb-6">
              Kirim Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contoh@email.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                    Nomor Telepon *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 xxx xxxx xxxx"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                    Nama Perusahaan
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="PT/CV Nama Perusahaan"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                  Layanan yang Diminati *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                >
                  <option value="">Pilih layanan</option>
                  <option value="general-supplier">General Supplier</option>
                  <option value="outsourcing">Outsourcing</option>
                  <option value="desain-grafis">Desain Grafis</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="konsultasi">Konsultasi Umum</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-corporate-gray-dark mb-2">
                  Pesan *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Deskripsikan kebutuhan atau pertanyaan Anda..."
                  rows={5}
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="corporate" 
                size="xl" 
                className="w-full"
              >
                Kirim Pesan
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-sm text-corporate-gray text-center">
                Dengan mengirim pesan ini, Anda menyetujui kebijakan privasi kami dan 
                memberikan izin untuk dihubungi terkait layanan bisnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;