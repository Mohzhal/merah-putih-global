import { Crown, UserCheck, Users, Star } from 'lucide-react';

const TeamSection = () => {
 const teamMembers = [
    {
      name: "YUSRIL I M",
      position: "Direktur Utama",
      icon: Crown,
      description: "Memimpin visi strategis perusahaan dan mengarahkan seluruh operasional PT. Merpati Putih Global Solution.",
      level: "director"
    },
    {
      name: "FIKRI PERMANA",
      position: "Direktur", 
      icon: UserCheck,
      description: "Mengawasi operasional perusahaan dan memastikan implementasi strategi bisnis yang efektif.",
      level: "director"
    },
    {
      name: "ALDO",
      position: "Manager Keuangan",
      icon: Users,
      description: "Mengelola sistem keuangan perusahaan dan memastikan kesehatan finansial yang optimal.",
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
      description: "Memberikan dukungan operasional dan membantu kelancaran berbagai aktivitas perusahaan.",
      level: "staff"
    },
    {
      name: "RICO M FIKRI",
      position: "Staff",
      icon: Star,
      description: "Berperan aktif dalam mendukung operasional dan administrasi perusahaan.",
      level: "staff"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'director':
        return 'bg-gradient-primary text-white';
      case 'manager':
        return 'bg-primary/10 text-primary';
      case 'staff':
        return 'bg-corporate-gray-light text-corporate-gray-dark';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'director':
        return 'Direktur';
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
          <h2 className="text-4xl font-bold text-corporate-gray-dark mb-4">
            Struktur <span className="text-primary">Tim</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
            Tim profesional yang berpengalaman dan berkomitmen untuk memberikan 
            layanan terbaik bagi setiap klien dan mitra bisnis kami.
          </p>
        </div>

        {/* Directors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-corporate-gray-dark mb-8 text-center">
            Jajaran Direktur
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.filter(member => member.level === 'director').map((member, index) => (
              <div
                key={index}
                className="bg-gradient-primary rounded-2xl p-8 text-white text-center shadow-corporate transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                  <member.icon className="w-10 h-10" />
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
          <h3 className="text-2xl font-semibold text-corporate-gray-dark mb-8 text-center">
            Tim Manager
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.filter(member => member.level === 'manager').map((member, index) => (
              <div
                key={index}
                className="bg-white border border-primary/20 rounded-xl p-6 text-center shadow-card-custom hover:shadow-corporate transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                    {getLevelBadge(member.level)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-corporate-gray-dark mb-2">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-3">{member.position}</p>
                <p className="text-xs text-corporate-gray leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div>
          <h3 className="text-2xl font-semibold text-corporate-gray-dark mb-8 text-center">
            Tim Staff
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.filter(member => member.level === 'staff').map((member, index) => (
              <div
                key={index}
                className="bg-corporate-gray-light rounded-xl p-6 text-center shadow-card-custom hover:shadow-corporate transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <member.icon className="w-7 h-7 text-corporate-gray-dark" />
                </div>
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-white text-corporate-gray-dark text-xs font-medium rounded-full mb-2">
                    {getLevelBadge(member.level)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-corporate-gray-dark mb-2">{member.name}</h4>
                <p className="text-sm text-corporate-gray font-medium mb-3">{member.position}</p>
                <p className="text-xs text-corporate-gray leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team stats */}
        <div className="mt-16 bg-gradient-section rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-corporate-gray">Direktur</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-corporate-gray">Manager</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-corporate-gray">Staff</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-corporate-gray">Total Tim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;