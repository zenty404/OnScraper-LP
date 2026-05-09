"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════════════
   NAVBAR — Floating Pill OnScraper (Liquid Glass Style)
   Desktop: pill centered, scroll down contracts, scroll up expands
   Mobile: transparent bar, logo left, burger right, fullscreen menu
   ═══════════════════════════════════════════════════════════ */

const DESKTOP_LINKS = NAV_LINKS.filter((l) => l.href !== "/contact" && !l.href.startsWith("#"));

export default function Navbar() {
  const [contracted, setContracted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 20; // Seuil pour ignorer micro-scrolls

    const updateNavbar = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScrollY.current);

      // Ignorer les petits changements
      if (delta < SCROLL_THRESHOLD) {
        ticking.current = false;
        return;
      }

      // Vérifier la direction
      if (y > 50 && y > lastScrollY.current) {
        setContracted(true);
      } else if (y < lastScrollY.current) {
        setContracted(false);
      }

      lastScrollY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 300);
    return () => clearTimeout(t);
  }, []);

  const showFull = !contracted;

  return (
    <>
      {/* ════════════════════════════════════════════
          MOBILE NAVBAR — transparent, full-width
          ════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex h-16 items-center justify-between px-5">
          {/* Logo icon */}
          <Link
            href="/"
            aria-label="OnScraper — Accueil"
            className="select-none cursor-pointer"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-[#092B7E] to-[#092B7E] bg-clip-text text-transparent">
              OnScraper
            </div>
          </Link>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex flex-col items-center justify-center w-10 h-10 cursor-pointer"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[1px] rotate-45 bg-[#092B7E]"
                  : "bg-[#092B7E] -translate-y-1"
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[1px] -rotate-45 bg-[#092B7E]"
                  : "bg-[#092B7E] translate-y-1"
              }`}
            />
          </button>
        </div>

        {/* Mobile fullscreen menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-start h-full px-8 gap-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-display font-semibold text-gray-900 cursor-pointer transition-all duration-300 hover:text-[#092B7E]"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#092B7E] to-[#092B7E] px-8 py-4 text-[15px] font-medium text-white transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/30"
              style={{
                transitionDelay: mobileOpen ? `${NAV_LINKS.length * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              Rejoindre la waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          DESKTOP NAVBAR — floating pill
          ════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-4 pt-4">
        <nav
          aria-label="Navigation principale"
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            contracted
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-500/10"
              : "bg-white/80 backdrop-blur-xl shadow-md shadow-blue-500/15"
          } ${
            expanded
              ? showFull
                ? "w-full max-w-[780px] rounded-full"
                : "w-full max-w-[380px] rounded-full"
              : "w-[180px] rounded-full"
          }`}
          style={{
            border: "1px solid rgba(9, 43, 126, 0.15)",
          }}
        >
          <div
            className={`flex h-14 items-center transition-opacity duration-500 ${
              expanded ? "opacity-100" : "opacity-0"
            } ${showFull ? "justify-between px-6" : "justify-between px-3"}`}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="OnScraper — Accueil"
              className="relative select-none shrink-0 cursor-pointer"
            >
              <div
                className={`text-xl font-bold bg-gradient-to-r from-[#092B7E] to-[#092B7E] bg-clip-text text-transparent transition-all duration-500 whitespace-nowrap ${
                  showFull ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                OnScraper
              </div>
              <div
                className={`absolute top-1/2 left-0 -translate-y-1/2 text-lg font-bold bg-gradient-to-r from-[#092B7E] to-[#092B7E] bg-clip-text text-transparent transition-all duration-500 ${
                  !showFull ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                OS
              </div>
            </Link>

            {/* Nav links (full state) */}
            <ul
              className={`flex items-center gap-7 absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showFull
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {DESKTOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-[13px] font-medium text-gray-600 transition-colors duration-200 hover:text-[#092B7E] cursor-pointer whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#092B7E] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* "Waitlist" (contracted state) */}
            <div
              className={`flex absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                !showFull
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="#waitlist"
                className="inline-flex items-center rounded-[8px] bg-blue-50 px-4 py-1.5 text-[12px] font-medium text-[#0D3AA1] transition-all duration-200 hover:bg-blue-100 cursor-pointer whitespace-nowrap"
              >
                Waitlist
              </Link>
            </div>

            {/* CTA */}
            <Link
              href="#waitlist"
              className={`inline-flex items-center bg-gradient-to-r from-[#092B7E] to-[#092B7E] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 cursor-pointer whitespace-nowrap shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ${
                showFull
                  ? "rounded-full px-5 py-2 text-[13px]"
                  : "rounded-full px-4 py-1.5 text-[12px]"
              }`}
              aria-label="Rejoindre la waitlist"
            >
              {showFull ? "Rejoindre la waitlist" : "Waitlist"}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
