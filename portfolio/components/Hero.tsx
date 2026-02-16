import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import FloatingElements from "./FloatingElements";
import SocialSharing from "./SocialSharing";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      <FloatingElements />
      
      {/* Hero background graphics */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.35),transparent)] blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[-120px] right-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.3),transparent)] blur-3xl animate-float-medium" />
      </div>

      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-lg hover-lift animate-scale-in-rotate">
            <Image
              src="/Vasi Sayed.jpeg"
              alt="Vasi Sayed"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <div className="mb-6">
          <span className="text-[var(--accent)] text-sm font-medium tracking-wider uppercase">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm <span className="gradient-text">Vasi Sayed</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-muted)] mb-4">
          Emerging Full Stack Developer with hands-on experience building enterprise-grade applications using Python, Django, and React.
        </p>
        
        <p className="max-w-2xl mx-auto text-base text-[var(--text-muted)] mb-12">
          Demonstrated expertise in microservices architecture, RESTful API development, and database design.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-[var(--primary-hover)] transition-all duration-300 hover:scale-105 hover-glow relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="/Vasi Sayed Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[var(--accent)] text-[var(--accent)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover-lift"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover-lift relative overflow-hidden group"
          >
            <span className="relative z-10 block group-hover:text-white transition-colors">Contact Me</span>
            <div className="absolute inset-0 bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0" />
          </a>
        </div>

        <div className="flex justify-center gap-6 text-[var(--text-muted)] text-sm">
          <a href="mailto:vasisayed09421@gmail.com" className="hover:text-[var(--primary)] transition-colors">
            vasisayed09421@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+918104771784" className="hover:text-[var(--primary)] transition-colors">
            +91 81047 71784
          </a>
          <span>•</span>
          <span>Mahim, Mumbai</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
          <a
            href="https://linkedin.com/in/vasi25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/VasiSayed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
          >
            GitHub
          </a>
          <SocialSharing />
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
