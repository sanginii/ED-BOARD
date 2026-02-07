import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";

const APPLY_URL = "https://forms.gle/sArbt8gRsbtpXda86";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Separate dropdown states (important)
  const [desktopNewsletterOpen, setDesktopNewsletterOpen] = useState(false);
  const [mobileNewsletterOpen, setMobileNewsletterOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopNewsletterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile dropdown when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) setMobileNewsletterOpen(false);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-md py-3 border-b border-[#E3D5B3]/10"
          : "py-5 bg-black/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* NAVBAR ROW */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="MIT Editorial Board"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E3D5B3] focus:outline-none"
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
            <Link
              to="/"
              className="link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
            >
              Home
            </Link>

            <Link
              to="/team"
              className="link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
            >
              Team
            </Link>

            {/* Desktop Newsletter Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
                onClick={() => setDesktopNewsletterOpen((prev) => !prev)}
              >
                <span>Newsletters</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform ${
                    desktopNewsletterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopNewsletterOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl bg-black/90 backdrop-blur-md border border-[#E3D5B3]/20 animate-fade-in overflow-hidden">
                  <div className="py-2">
                    <a
                      href="/HQFINALfinalfinal_compressed.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                    >
                      February 2024
                    </a>

                    <a
                      href="/September_Newsletter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                    >
                      September 2024
                    </a>

                    <a
                      href="/Netflix Newsletter Final.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                    >
                      May 2025
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/yearbook"
              className="link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
            >
              Yearbook
            </Link>

            <Link
              to="/gallery"
              className="link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="link-hover text-[#E3D5B3] font-['Playfair_Display'] font-medium tracking-wide"
            >
              Contact
            </Link>

            {/* Apply Button */}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                border-2 border-[#E3D5B3]/45
                bg-black/25
                text-[#E3D5B3]
                font-['Playfair_Display']
                px-5 py-2 rounded-md
                shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                hover:border-[#E3D5B3]/80 hover:bg-black/35
                transition-all
              "
            >
              Apply
            </a>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-md">
          <div className="pt-24 min-h-[100dvh] flex items-center justify-center px-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-black/85 border border-[#E3D5B3]/20 shadow-xl px-6 py-8">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 text-[#E3D5B3]/80 hover:text-[#E3D5B3]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mt-4 flex flex-col items-stretch gap-4">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                >
                  Home
                </Link>

                <Link
                  to="/team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                >
                  Team
                </Link>

                {/* Mobile Newsletter Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileNewsletterOpen((prev) => !prev)}
                    className="w-full flex items-center justify-center gap-2 font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                  >
                    Newsletters
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        mobileNewsletterOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileNewsletterOpen && (
                    <div className="mt-2 rounded-xl border border-[#E3D5B3]/15 bg-black/60 overflow-hidden">
                      <a
                        href="/HQFINALfinalfinal_compressed.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeout(() => setMobileMenuOpen(false), 0);
                        }}
                        className="block px-4 py-3 text-center font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                      >
                        February 2024
                      </a>

                      <a
                        href="/September_Newsletter.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeout(() => setMobileMenuOpen(false), 0);
                        }}
                        className="block px-4 py-3 text-center font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                      >
                        September 2024
                      </a>

                      <a
                        href="/Netflix Newsletter Final.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTimeout(() => setMobileMenuOpen(false), 0);
                        }}
                        className="block px-4 py-3 text-center font-['Playfair_Display'] text-[#C2B59B] hover:bg-[#E3D5B3]/10 hover:text-[#E3D5B3] transition"
                      >
                        May 2025
                      </a>
                    </div>
                  )}
                </div>

                <Link
                  to="/yearbook"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                >
                  Yearbook
                </Link>

                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center font-['Playfair_Display'] text-[#E3D5B3] text-lg py-2 rounded-lg hover:bg-[#E3D5B3]/10 transition"
                >
                  Contact
                </Link>

                {/* Apply button */}
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTimeout(() => setMobileMenuOpen(false), 0);
                  }}
                  className="
                    mt-2 w-full text-center
                    px-6 py-3 rounded-lg
                    border-2 border-[#E3D5B3]/45
                    bg-black/25
                    text-[#E3D5B3]
                    font-['Playfair_Display'] font-semibold
                    shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                    hover:border-[#E3D5B3]/80 hover:bg-black/35
                    transition
                  "
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
