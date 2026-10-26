
"use client";

import { useMemo, useState } from "react";

type CredentialCategory = "All" | "Google Cloud" | "Cognizant" | "AWS";

type Credential = {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  category: Exclude<CredentialCategory, "All">;
  kind: "Professional certification" | "Skill badge" | "Learning badge";
  href: string;
  image: string;
};

const credentials: Credential[] = [
  {
    id: "gemini-agents",
    name: "Add Agents to Gemini Enterprise",
    issuer: "Google Cloud",
    issued: "26 OCT 2026",
    category: "Google Cloud",
    kind: "Skill badge",
    href: "https://www.credly.com/badges/caa2d729-6875-4f78-8880-581c20836388/public_url",
    image: "/images/gemini-agents.png",
  },
  {
    id: "gemini-platform",
    name: "Build with Gemini — Track 2: Platform IT Developer",
    issuer: "Explore Google Cloud",
    issued: "14 OCT 2026",
    category: "Google Cloud",
    kind: "Skill badge",
    href: "https://www.credly.com/badges/15119ba8-041e-4ea1-a442-dc25dc87c797/public_url",
    image: "/images/gemini-platform.png",
  },
  {
    id: "gemini-enterprise-tools",
    name: "Deploy Gemini Enterprise with Workspace Data Sources and MCP Tools",
    issuer: "Google Cloud",
    issued: "04 OCT 2026",
    category: "Google Cloud",
    kind: "Skill badge",
    href: "https://www.credly.com/badges/40a7cb28-e2b9-4317-9c99-ad044b87a3e2/public_url",
    image: "/images/gemini-enterprise-tools.png",
  },
  {
    id: "gemini-governance",
    name: "Govern Agent Access with Gemini Enterprise Agent Platform",
    issuer: "Google Cloud",
    issued: "04 OCT 2026",
    category: "Google Cloud",
    kind: "Skill badge",
    href: "https://www.credly.com/badges/22e04bc4-4283-4ade-976-8c9d7b3d0e8d/public_url",
    image: "/images/gemini-governance.png",
  },
  {
    id: "context-engineering",
    name: "Context Engineering Foundation",
    issuer: "Cognizant",
    issued: "30 SEP 2026",
    category: "Cognizant",
    kind: "Learning badge",
    href: "https://www.credly.com/badges/d5a11060-a3ab-47f2-8d5a-7ea1cbe43962/public_url",
    image: "/images/context-engineering.png",
  },
  {
    id: "build-with-gemini",
    name: "Build with Gemini",
    issuer: "Google Cloud",
    issued: "22 SEP 2026",
    category: "Google Cloud",
    kind: "Skill badge",
    href: "https://www.credly.com/badges/683e7e89-3754-4895-9d5b-0c5fdc25a2e0/public_url",
    image: "/images/build-with-gemini.png",
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "16 AUG 2026",
    category: "AWS",
    kind: "Professional certification",
    href: "https://www.credly.com/badges/eb7b3f43-ee65-4e61-a27e-56b35a05f05c/public_url",
    image: "/images/aws-cloud-practitioner.png",
  },
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "15 AUG 2026",
    category: "AWS",
    kind: "Professional certification",
    href: "https://www.credly.com/badges/6bc555ea-ff46-4540-97be-b44df5839bb8/public_url",
    image: "/images/aws-ai-practitioner.png",
  },
];

const filters: CredentialCategory[] = [
  "All",
  "Google Cloud",
  "Cognizant",
  "AWS",
];

function CredentialCard({
  credential,
  index,
}: {
  credential: Credential;
  index: number;
}) {
  const isExternal = credential.href.startsWith("https://");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-border-subtle bg-surface/30 p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-surface/60 sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-16 bg-accent/70 transition-all duration-300 group-hover:w-28"
      />

      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-accent">
          CREDENTIAL / {String(index + 1).padStart(2, "0")}
        </span>
        <span className="shrink-0 border border-border-subtle px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-foreground-subtle">
          {credential.kind}
        </span>
      </div>

      
      <div className="group/badge mt-6 flex h-36 w-full items-center justify-center overflow-hidden border border-border-subtle bg-[#080b0c] p-4 transition-all duration-300 group-hover:border-accent/40 sm:h-40 sm:p-5">
        <img
          src={credential.image}
          alt={`${credential.name} badge`}
          width={240}
          height={240}
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          className="block max-h-full max-w-[85%] object-contain transition-transform duration-300 group-hover/badge:scale-105"
        />
      </div>


      <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-subtle">
        {credential.issuer}
      </p>

      <h3 className="mt-3 text-xl font-medium uppercase leading-tight tracking-[-0.035em] text-foreground">
        {credential.name}
      </h3>

      <div className="mt-6 border-t border-border-subtle pt-4">
        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
          ISSUED
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-wider text-foreground-muted">
          {credential.issued}
        </p>
      </div>

      <a
        href={credential.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="mt-6 inline-flex min-h-11 items-center justify-between gap-3 border border-border px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
      >
        VIEW BADGE
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export function Credentials() {
  const [activeFilter, setActiveFilter] =
    useState<CredentialCategory>("All");

  const visibleCredentials = useMemo(
    () =>
      activeFilter === "All"
        ? credentials
        : credentials.filter(
            (credential) => credential.category === activeFilter,
          ),
    [activeFilter],
  );

  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-border-subtle"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--content-width)] px-[var(--page-padding)] pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
          <span aria-hidden="true">● </span>
          CREDENTIALS / 06
        </div>

        <h2
          id="credentials-heading"
          className="mt-5 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-medium uppercase leading-[0.84] tracking-[-0.065em] text-foreground"
        >
          VERIFIED
          <br />
          <span className="text-foreground-muted">CREDENTIALS.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
          Professional certifications and technical learning milestones across
          cloud infrastructure, generative AI, and enterprise engineering.
        </p>

        <div
          aria-label="Filter credentials by issuer"
          className="mt-9 flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-11 border px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent ${
                  selected
                    ? "border-accent/60 bg-accent/[0.08] text-accent"
                    : "border-border-subtle text-foreground-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {filter}
                <span className="ml-2 opacity-60">
                  {filter === "All"
                    ? credentials.length
                    : credentials.filter((item) => item.category === filter)
                        .length}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-subtle">
          Showing {visibleCredentials.length} of {credentials.length} credentials
        </p>

        <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCredentials.map((credential, index) => (
            <CredentialCard
              key={credential.id}
              credential={credential}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border-subtle pt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-foreground-subtle sm:flex-row">
          <span>SYSTEM//V — CREDENTIAL REGISTRY</span>
          <span>8 ENTRIES / REVIEW CREDENTIAL LINKS</span>
        </div>
      </div>
    </section>
  );
}
