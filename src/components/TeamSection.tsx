import { Crown, UserCheck, Users, Star } from 'lucide-react';
// Import images from assets folder
import dirutImage from '../assets/dirut.jpg';
import direkturImage from '../assets/direktur.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "FIKRI PERMANA",
      position: "Direktur Utama",
      icon: Crown,
      image: dirutImage,
      description: "Memimpin visi strategis perusahaan dan mengarahkan seluruh operasional PT. Merpati Putih Global Solution.",
      level: "director-utama"
    },
    {
      name: "MUHAMAD ALDO SERENA",
      position: "Direktur", 
      icon: UserCheck,
      image: direkturImage,
      description: "Mengawasi operasional perusahaan dan memastikan implementasi strategi bisnis yang efektif.",
      level: "director"
    },
    {
      name: "YUSRIL I M",
      position: "Manager",
      icon: Users,
      description: "Mengkoordinasikan berbagai divisi dan memastikan kelancaran operasional harian perusahaan.",
      level: "manager"
    },
    {
      name: "EVON SM CHRO",
      position: "Manager HRGA",
      icon: Users,
      description: "Bertanggung jawab atas manajemen SDM, hubungan industrial, dan urusan umum perusahaan.",
      level: "manager"
    },
    {
      name: "ADI YANA",
      position: "Manager Umum",
      icon: Users,
      description: "Mengkoordinasikan berbagai divisi dan memastikan kelancaran operasional harian perusahaan.",
      level: "manager"
    },
    {
      name: "FITRI DWIRATNASARI",
      position: "Staff",
      icon: Star,
      description: "Mendukung operasional harian dan administrasi perusahaan dengan dedikasi tinggi.",
      level: "staff"
    },
    {
      name: "AGUNG PURNAMA",
      position: "Staff",
      icon: Star,
      description: "Mendukung operasional harian dan administrasi perusahaan dengan dedikasi tinggi.",
      level: "staff"
    },
    {
      name: "RICO M FIKRI",
      position: "Staff",
      icon: Star,
      description: "Mendukung operasional harian dan administrasi perusahaan dengan dedikasi tinggi.",
      level: "staff"
    },
    {
      name: "AHMAD ANSORI",
      position: "Staff",
      icon: Star,
      description: "Mendukung operasional harian dan administrasi perusahaan dengan dedikasi tinggi.",
      level: "staff"
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'director':
        return 'bg-blue-600 text-white';
      case 'director-utama':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white';
      case 'manager':
        return 'bg-blue-50 text-blue-600 border border-blue-200';
      case 'staff':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getLevelBadge = (level) => {
    switch (level) {
      case 'director':
        return 'Direktur';
      case 'director-utama':
        return 'Direktur Utama';
      case 'manager':
        return 'Manager';
      case 'staff':
        return 'Staff';
      default:
        return '';
    }
  };

  return (
    <section id="tim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Struktur <span className="text-blue-600">Tim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim profesional yang berpengalaman dan berkomitmen untuk memberikan 
            layanan terbaik bagi setiap klien dan mitra bisnis kami.
          </p>
        </div>

        {/* Direktur Utama - Posisi Teratas */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Direktur Utama
          </h3>
          <div className="flex justify-center">
            {teamMembers.filter(member => member.level === 'director-utama').map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300 max-w-md"
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/30 shadow-lg"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-xl opacity-90 mb-4">{member.position}</p>
                <p className="text-sm opacity-80 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Direktur - Di bawah Direktur Utama */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Direktur
          </h3>
          <div className="flex justify-center">
            {teamMembers.filter(member => member.level === 'director').map((member, index) => (
              <div
                key={index}
                className="bg-blue-600 rounded-2xl p-8 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300 max-w-md"
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white/30 shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-lg opacity-90 mb-4">{member.position}</p>
                <p className="text-sm opacity-80 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Managers */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Tim Manager
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.filter(member => member.level === 'manager').map((member, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                  <member.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-2">
                    {getLevelBadge(member.level)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Tim Staff
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.filter(member => member.level === 'staff').map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <member.icon className="w-7 h-7 text-gray-600" />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full mb-2">
                    {getLevelBadge(member.level)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-sm text-gray-600 font-medium mb-3">{member.position}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <div className="text-sm text-gray-600">Direktur Utama</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-sm text-gray-600">Direktur</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Manager</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;