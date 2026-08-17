"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = navigation.map((item) => item.href.slice(1));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const openMenu = () => {
    setMenuVisible(true);

    requestAnimationFrame(() => {
      setMenuOpen(true);
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);

    window.setTimeout(() => {
      setMenuVisible(false);
    }, 1400);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Lock page scrolling while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Detect which section is currently visible.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-96px 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const id = href.slice(1);
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const navbarHeight = 80;
    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.history.pushState(null, "", href);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(id);

    if (menuOpen) {
      closeMenu();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Header */}
      <div className="relative z-[110] border-b border-border-subtle bg-background">
        <div className="mx-auto flex h-20 w-full max-w-[var(--content-width)] items-center justify-between px-[var(--page-padding)]">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="font-mono text-[11px] tracking-[0.14em] text-foreground transition-colors duration-300 hover:text-accent sm:text-sm sm:tracking-[0.18em]"
          >
            R VIGNESH REDDY
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-8">
              {navigation.map((item) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) =>
                        handleNavigation(event, item.href)
                      }
                      className={`relative py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-foreground-muted hover:text-accent"
                      }`}
                    >
                      {item.label}

                      {/* Active indicator */}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={toggleMenu}
            className="border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent active:scale-[0.98] md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuVisible && (
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`fixed inset-x-0 bottom-0 top-20 z-[100] bg-background transition-opacity duration-[1200ms] ease-out md:hidden ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="h-full"
          >
            <ul className="mx-auto w-full max-w-[var(--content-width)] px-[var(--page-padding)] py-8">
              {navigation.map((item, index) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;

                return (
                  <li
                    key={item.href}
                    className="border-b border-border-subtle"
                  >
                    <Link
                      href={item.href}
                      aria-current={
                        isActive ? "location" : undefined
                      }
                      onClick={(event) =>
                        handleNavigation(event, item.href)
                      }
                      className={`group flex min-h-20 items-center justify-between py-5 font-mono text-sm uppercase tracking-[0.18em] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-8 opacity-0"
                      } ${
                        isActive
                          ? "text-accent"
                          : "text-foreground-muted"
                      }`}
                      style={{
                        transitionDelay: menuOpen
                          ? `${index * 140 + 100}ms`
                          : `${
                              (navigation.length - index - 1) *
                                140 +
                              120
                            }ms`,
                      }}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={
                            isActive
                              ? "text-accent"
                              : "text-foreground-subtle"
                          }
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>/</span>

                        <span>{item.label}</span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}