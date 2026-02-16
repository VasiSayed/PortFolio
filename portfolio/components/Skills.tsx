export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Django", level: 95 },
        { name: "Django REST Framework", level: 90 },
        { name: "React", level: 85 },
        { name: "AngularJS", level: 75 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      category: "Databases & Caching",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      category: "Tools & Version Control",
      icon: "🛠️",
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Visual Studio Code", level: 95 },
        { name: "PythonAnywhere", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build amazing applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] relative overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 border border-[var(--card-border)]`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white group-hover/skill:text-[var(--primary)] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--background)] rounded-full overflow-hidden border border-[var(--card-border)]">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-[var(--primary)]/30`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--card-border)]">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-badge px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all relative overflow-hidden"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
