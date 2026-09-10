"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from "@/components/ui/icons";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = !isHome || hasScrolled;

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/5 bg-[#060913]/90 shadow-lg shadow-black/40 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Left: Brand / Initials Badge */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-500/30 bg-[#141b32] text-xs font-bold text-indigo-300 shadow-sm shadow-indigo-500/20">
            PS
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-bold text-white">
              {siteConfig.name}
            </span>
            <span className="block truncate text-xs text-slate-400 font-medium">
              {siteConfig.title}
            </span>
          </span>
        </Link>

        {/* Center: Nav links */}
        <ul className="hidden items-center justify-center gap-1.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3.5 -bottom-[1.125rem] h-0.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Social icons & Hire Me button */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden items-center gap-1 sm:flex">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
          
          <Button
            href="/contact"
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex rounded-lg px-4 py-2 font-semibold shadow-md shadow-indigo-600/20"
          >
            Hire Me
          </Button>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-white/5 bg-[#0c1020]/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-indigo-500/10 text-indigo-400 font-semibold"
                      : "text-slate-400 hover:bg-white/5 hover:text-white",
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <Button href="/contact" variant="gradient" size="sm" className="flex-1 rounded-lg">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
