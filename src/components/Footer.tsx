export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#C2B59B] py-14 relative overflow-hidden">
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_240px_rgba(0,0,0,0.95)]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="MIT Editorial Board"
                className="h-14 w-auto mr-3"
              />
            </div>

            <p className="font-['Playfair_Display'] text-[#C2B59B] mb-6 max-w-md leading-relaxed">
              The MIT Editorial Board is the creative hub behind Manipal
              Institute of Technology&apos;s yearbook and student publications.
              We capture memories and shape narratives that last a lifetime.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center transition hover:border-[#E3D5B3]/70 hover:bg-black/60 text-[#E3D5B3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <path d="M17.5 6.5L17.5 6.5" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/the-mit-editorial-board/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center transition hover:border-[#E3D5B3]/70 hover:bg-black/60 text-[#E3D5B3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-wide text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 font-['Playfair_Display']">
              <li>
                <a
                  href="#about"
                  className="text-[#C2B59B] hover:text-[#E3D5B3] transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-[#C2B59B] hover:text-[#E3D5B3] transition"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-[#C2B59B] hover:text-[#E3D5B3] transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#domains"
                  className="text-[#C2B59B] hover:text-[#E3D5B3] transition"
                >
                  Domains
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-wide text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-3 font-['Playfair_Display']">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-[#E3D5B3]"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[#C2B59B]">
                  MIT Manipal, Karnataka, India - 576104
                </span>
              </li>

              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-[#E3D5B3]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-[#C2B59B]">mitedboard@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E3D5B3]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Playfair_Display'] text-[#C2B59B]/70 text-sm">
            &copy; {currentYear} MIT Editorial Board. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 font-['Playfair_Display']">
            <a
              href="#"
              className="text-[#C2B59B]/70 text-sm hover:text-[#E3D5B3] transition"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-[#C2B59B]/50">•</span>
            <a
              href="#"
              className="text-[#C2B59B]/70 text-sm hover:text-[#E3D5B3] transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
