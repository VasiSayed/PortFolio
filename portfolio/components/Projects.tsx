"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [expandedTech, setExpandedTech] = useState<{ [key: number]: boolean }>({});
  
  const toggleTechExpansion = (index: number, e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTech(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      name: "PreSale",
      subtitle: "Real Estate CRM + Lead Conversion System",
      url: "https://presales.myciti.life",
      tech: ["Django", "DRF", "React", "PostgreSQL", "Celery", "Redis"],
      highlights: [
        "Built a full-scale Real Estate CRM managing 1,000+ leads from inquiry to booking and customer conversion",
        "Built configurable lead pipeline system (Site Visit, Revisit, Negotiation, Booking) reducing manual follow-ups by 35%",
        "Implemented asynchronous email automation using Celery & Redis, handling 500+ notifications/month",
        "Designed real-time flat inventory & booking management system with dynamic cost sheet generation, improving booking tracking accuracy by 40%"
      ],
      company: "Vibe Copilot / Digielves Tech Wizards Pvt Ltd",
      gradient: "from-amber-500/20 to-orange-500/20",
      icon: "🏢"
    },
    {
      name: "Lease Management System",
      subtitle: "Enterprise Leasing Platform",
      url: "https://lease.vibecopilot.ai/login",
      tech: ["Django", "React", "PostgreSQL", "Enterprise Architecture"],
      highlights: [
        "Enterprise-grade leasing management platform with comprehensive lease lifecycle management",
        "Secure authentication and role-based access control for lease operations",
        "Automated lease document generation and tracking system"
      ],
      company: "Vibe Copilot / Digielves Tech Wizards Pvt Ltd",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "📋"
    },
    {
      name: "Konstruct",
      subtitle: "Enterprise Construction Management Platform",
      url: "https://konstruct.world/login",
      tech: ["Django REST Framework", "React", "PostgreSQL", "Microservices"],
      highlights: [
        "Architected and deployed micro-services-based enterprise platform with 4 independent services handling authentication, multi-tenant organizations, and role-based workflow automation",
        "Implemented secure authentication using JWT with RS256 asymmetric encryption for inter-service communication and API security",
        "Engineered multi-stage approval workflow system with Maker-Checker-Supervisor-Inspector roles and configurable routing logic, improving construction quality control process efficiency by 20%"
      ],
      company: "Vibe Copilot / Digielves Tech Wizards Pvt Ltd",
      gradient: "from-indigo-500/20 to-purple-500/20",
      icon: "🏗️"
    },
    {
      name: "LUXESTAY",
      subtitle: "Django-based Hotel Management System",
      url: "https://vasisayed2002.pythonanywhere.com/",
      tech: ["Django", "Razorpay API", "MySQL", "Bootstrap5"],
      highlights: [
        "Integrated Razorpay API for secure, real-time payment processing and instant invoice generation",
        "Built admin dashboard to manage hotels, track bookings, and monitor performance metrics",
        "Integrated real-time revenue tracking, providing insights into total earnings, monthly bookings, improving financial decision making",
        "Automated booking confirmation emails, reducing customer inquiries by 20%"
      ],
      company: "Personal Project",
      gradient: "from-pink-500/20 to-rose-500/20",
      icon: "🏨"
    },
    {
      name: "HRMS",
      subtitle: "Human Resource Management System",
      url: "https://vasiisayed.pythonanywhere.com",
      tech: ["Django", "MySQL", "RBAC"],
      highlights: [
        "Implemented automated role transitions based on performance metrics within the HRMS, which reduced task assignment errors by 15% and accelerated overall performance evaluation workflows",
        "Spearheaded a hierarchical leave approval system, cutting down the need for manual intervention by 30% and saving HR staff 7 hours per week managing employee time off",
        "Designed secure Role-Based Access Control (RBAC) with granular permission management and audit logging, improving data security and access transparency across departments"
      ],
      company: "Vibgyor",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "👥"
    },
    {
      name: "Tiffin Service Management",
      subtitle: "Food Delivery & Management System",
      url: "https://sakshitiffin.pythonanywhere.com/",
      tech: ["Django", "MySQL", "Bootstrap", "PythonAnywhere"],
      highlights: [
        "Complete tiffin service management system with user authentication and role-based access",
        "Order management system for tracking daily tiffin orders and deliveries",
        "Admin dashboard for managing customers, menus, and daily operations",
        "Real-time order tracking and status updates for customers"
      ],
      company: "Personal Project",
      gradient: "from-yellow-500/20 to-amber-500/20",
      icon: "🍱"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              Showcasing enterprise-grade applications built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card card-3d group relative bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] overflow-hidden cursor-pointer animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.company}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[var(--background)] border border-[var(--card-border)] group-hover:border-[var(--primary)] transition-colors">
                      <svg
                        className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-[var(--accent)] text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(expandedTech[index] ? project.tech : project.tech.slice(0, 3)).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--text-muted)] group-hover:border-[var(--primary)]/50 group-hover:text-[var(--primary)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <button
                        onClick={(e) => toggleTechExpansion(index, e)}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-pointer"
                      >
                        {expandedTech[index] ? `-${project.tech.length - 3}` : `+${project.tech.length - 3}`}
                      </button>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="flex-1 space-y-2 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--primary)] mt-1 flex-shrink-0">✓</span>
                        <p className="text-sm text-[var(--text-muted)] line-clamp-2 group-hover:text-white/80 transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="pt-4 border-t border-[var(--card-border)] group-hover:border-[var(--primary)]/30 transition-colors">
                    <span className="text-sm font-medium text-[var(--primary)] group-hover:gap-2 flex items-center gap-1 transition-all">
                      View Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
