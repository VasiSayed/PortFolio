"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // Using EmailJS - Replace with your EmailJS service ID, template ID, and public key
    // Get these from https://www.emailjs.com/
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    try {
      // For now, we'll use a simple mailto fallback
      // You can integrate EmailJS by installing: npm install @emailjs/browser
      const mailtoLink = `mailto:vasisayed09421@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Simulate success (remove this when EmailJS is configured)
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      }, 1000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 bottom-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent)] blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-8 mx-auto"></div>
            <p className="text-lg text-[var(--text-muted)] mb-12 max-w-2xl mx-auto">
              Feel free to reach out for opportunities, collaborations, or just to say hello!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <a
                href="mailto:vasisayed09421@gmail.com"
                className="card-hover hover-lift p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] group block"
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  Email
                </h3>
                <p className="text-sm text-[var(--text-muted)] break-all">
                  vasisayed09421@gmail.com
                </p>
              </a>

              <a
                href="tel:+918104771784"
                className="card-hover p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] group block"
              >
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                  Phone
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  +91 81047 71784
                </p>
              </a>

              <div className="card-hover hover-lift p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Location</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Mahim, Mumbai
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-hover hover-lift p-8 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    {errorMessage || "Failed to send message. Please try again."}
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com/in/vasi25"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/VasiSayed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
