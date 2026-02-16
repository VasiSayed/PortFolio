import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const certificates = [
    {
      title: "Full Stack Developer Intern",
      issuer: "Vibgyor",
      date: "March 2025",
      url: "https://drive.google.com/file/d/1bwHrddPnHhQarXVpg53BB8eU7ZY16Q2p/view?usp=sharing",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Master In Full Stack Development",
      issuer: "ITVEDANT",
      date: "February 2025",
      url: "https://drive.google.com/file/d/1XkvjCSWAthj04mHUFl5hSVadSPz6xurW/view?usp=sharing",
      icon: "🎓",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Python Web Development",
      issuer: "IBM",
      date: "December 2024",
      url: "https://drive.google.com/file/d/1Mg1PMPDM1kC9HiVltmElpbBWg6Ii2-lX/view?usp=sharing",
      icon: "💻",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Full Stack Development",
      issuer: "Devtown",
      date: "2024",
      url: "https://www.cert.devtown.in/verify/gGcyGXv2",
      icon: "📜",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--primary)]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-[var(--foreground)]">
              Education & <span className="gradient-text">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Academic achievements and professional certifications
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] relative overflow-hidden group animate-scale-in">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 border border-[var(--primary)]/30">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                      B.E. Computer Engineering
                    </h3>
                    <p className="text-[var(--accent)] font-medium">University of Mumbai</p>
                  </div>
                </div>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">May 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[var(--foreground)]">CGPA: 7.09</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] relative overflow-hidden group animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 border border-[var(--accent)]/30">
                    <span className="text-3xl">📜</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                      Diploma in Computer Engineering
                    </h3>
                    <p className="text-[var(--accent)] font-medium">Government Polytechnic Mumbai</p>
                  </div>
                </div>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">July 2022</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[var(--foreground)]">CGPA: 7.57</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Certificates Section */}
        <ScrollReveal delay={150}>
          <div>
            <h3 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
              Professional <span className="gradient-text">Certificates</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-card group relative bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] p-6 cursor-pointer overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${cert.gradient} bg-opacity-20 border border-[var(--card-border)] w-fit group-hover:scale-110 transition-transform`}>
                      <span className="text-3xl">{cert.icon}</span>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-[var(--accent)] font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mb-4">
                      {cert.date}
                    </p>

                    {/* View Certificate Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)] group-hover:gap-3 transition-all">
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
