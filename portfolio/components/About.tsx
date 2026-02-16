import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent)] blur-3xl" />
      <ScrollReveal>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-8"></div>
          
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Emerging Full Stack Developer with hands-on experience building enterprise-grade applications using Python, Django, and React. 
            Demonstrated expertise in microservices architecture, RESTful API development, and database design through projects like 
            Konstruct (construction management platform) serving real-world clients. Proficient in end-to-end development, from backend 
            logic with Django/PostgreSQL to frontend implementation.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
