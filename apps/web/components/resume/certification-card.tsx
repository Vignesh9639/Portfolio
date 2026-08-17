type CertificationCardProps = {
  index: string;
  name: string;
  issuer: string;
  issued: string;
  validUntil: string;
  credentialId: string;
  href: string;
};

export function CertificationCard({
  index,
  name,
  issuer,
  issued,
  validUntil,
  credentialId,
  href,
}: CertificationCardProps) {
  return (
    <article className="group relative overflow-hidden border border-border-subtle bg-surface/30 p-6 transition-all duration-500 hover:border-accent/50 hover:bg-surface/60 sm:p-8">
      {/* Technical corner */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-20 bg-accent/70 transition-all duration-500 group-hover:w-32" />

      <div className="pointer-events-none absolute right-0 top-0 h-20 w-px bg-accent/30" />

      <div className="flex items-start justify-between gap-6">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
          AWS / {index}
        </div>

        <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,210,225,0.7)]" />
          VERIFIED
        </div>
      </div>

      {/* Certification icon */}
      <div className="mt-10 flex h-14 w-14 items-center justify-center border border-accent/30 bg-accent/[0.04]">
        <span className="font-mono text-sm text-accent">AWS</span>
      </div>

      <div className="mt-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground-subtle">
          {issuer}
        </p>

        <h3 className="mt-3 max-w-lg text-2xl font-medium uppercase leading-[0.95] tracking-[-0.04em] text-foreground sm:text-3xl">
          {name}
        </h3>
      </div>

      <div className="mt-8 grid grid-cols-2 border-t border-border-subtle pt-6">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
            ISSUED
          </p>

          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            {issued}
          </p>
        </div>

        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
            VALID UNTIL
          </p>

          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted">
            {validUntil}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-border-subtle pt-5">
        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
          CREDENTIAL ID
        </p>

        <p className="mt-2 break-all font-mono text-[9px] tracking-[0.08em] text-foreground-muted">
          {credentialId}
        </p>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-3 border border-border px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
      >
        View certificate
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </article>
  );
}