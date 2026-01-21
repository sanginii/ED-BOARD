import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";
import McFormsBanner from "./McFormsBanner";

const APPLY_URL =
  "https://forms.gle/sArbt8gRsbtpXda86"; // change to your real form link

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterDropdownOpen, setNewsletterDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-3"
          : "py-5 bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* ===== NAVBAR ROW ===== */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="logo.png"
              alt="MIT Editorial Board"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="link-hover text-foreground font-medium">
              Home
            </Link>
            <Link to="/team" className="link-hover text-foreground font-medium">
              Team
            </Link>

            {/* Newsletter Dropdown */}
            <div className="relative">
              <button
                className="flex items-center link-hover text-foreground font-medium"
                onClick={() =>
                  setNewsletterDropdownOpen((prev) => !prev)
                }
              >
                <span>Newsletters</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    newsletterDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {newsletterDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border animate-fade-in">
                  <div className="py-2 rounded-md">
                    <a
                      href="/HQFINALfinalfinal_compressed.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      February 2024
                    </a>
                    <a
                      href="/September_Newsletter.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      September 2024
                    </a>
                    <a
                      href="/Netflix Newsletter Final.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      May 2025
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link to="/yearbook" className="link-hover font-medium">
              Yearbook
            </Link>
            <Link to="/gallery" className="link-hover font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="link-hover font-medium">
              Contact us
            </Link>

            {/* DESKTOP APPLY BUTTON – hyperlinked */}
            <a
              id="apply-button"
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-edboard-accent text-white font-medium px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              Apply
            </a>
          </nav>
        </div>

        {/* ===== MC FORMS BANNER ===== */}
        <McFormsBanner applyUrl={APPLY_URL} />
      </div>

      {/* ===== MOBILE MENU ===== */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md">
            {/* This wrapper accounts for the fixed navbar */}
            <div className="pt-24 min-h-[100dvh] flex items-center justify-center px-4">
              <div className="relative w-full max-w-sm rounded-2xl bg-card border border-border shadow-xl px-6 py-8">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 p-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="mt-4 flex flex-col items-stretch gap-4">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-lg font-medium py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    Home
                  </Link>

                  <Link
                    to="/team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-lg font-medium py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    Team
                  </Link>

                  <Link
                    to="/yearbook"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-lg font-medium py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    Yearbook
                  </Link>

                  <Link
                    to="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-lg font-medium py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-lg font-medium py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    Contact us
                  </Link>

                  {/* Apply button */}
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 w-full text-center bg-edboard-accent text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

    </header>
  );
}
