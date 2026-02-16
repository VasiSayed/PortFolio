export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-[var(--card-border)] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[var(--text-muted)] mb-4">
          © 2026 Vasi Sayed. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a
            href="https://linkedin.com/in/vasi25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            LinkedIn
          </a>
          <span className="text-[var(--text-muted)]">•</span>
          <a
            href="https://github.com/VasiSayed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            GitHub
          </a>
          <span className="text-[var(--text-muted)]">•</span>
          <a
            href="mailto:vasisayed09421@gmail.com"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm break-all"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
