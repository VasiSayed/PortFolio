import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[var(--card-bg)] relative overflow-hidden"
    >
      {/* background ribbon */}
      <div className="pointer-events-none absolute -left-40 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.3),transparent)] blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-12"></div>

          <div className="space-y-8">
            {/* Vibe Copilot */}
            <div className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Full Stack Developer (Python + React)
                  </h3>
                  <p className="text-[var(--accent)] font-medium">
                    Vibe Copilot / Digielves Tech Wizards Pvt Ltd
                  </p>
                </div>
                <p className="text-sm text-[var(--text-muted)] mt-2 md:mt-0">
                  Jun 2025 – Feb 2026
                </p>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Malad West, Mumbai
              </p>
            </div>

            {/* Vibgyor */}
            <div className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Python-Django Developer Intern
                  </h3>
                  <p className="text-[var(--accent)] font-medium">
                    Vibgyor Advicorp Private Limited
                  </p>
                </div>
                <p className="text-sm text-[var(--text-muted)] mt-2 md:mt-0">
                  Jan 2025 – Mar 2025
                </p>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Andheri East, Mumbai
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
