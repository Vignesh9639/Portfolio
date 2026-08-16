import Link from "next/link";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 w-full max-w-[var(--content-width)] items-center justify-between px-5 sm:px-[var(--page-padding)]">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.16em] text-foreground transition-colors duration-300 hover:text-accent sm:text-sm sm:tracking-[0.18em]"
        >
          SYSTEM//V
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {navigation.map((item, index) => (
              <li
                key={item.href}
                className={index > 0 ? "hidden sm:block" : undefined}
              >
                <Link
                  href={item.href}
                  className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-muted transition-colors duration-300 hover:text-foreground sm:text-[10px] sm:tracking-[0.16em] lg:text-xs"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}