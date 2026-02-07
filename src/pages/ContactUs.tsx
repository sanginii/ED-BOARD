import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".appear-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-28 pb-20 bg-black text-[#C2B59B] relative overflow-hidden">
        {/* vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_240px_rgba(0,0,0,0.95)]" />

        <div className="container mx-auto px-6 relative">
          <section className="text-center py-10 appear-on-scroll">
            <h1 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.10em] text-4xl md:text-5xl mb-4">
              Connect With Us
            </h1>
            <p className="font-['Playfair_Display'] text-[#C2B59B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your thoughts matter to us. Got a question, feedback, or want to
              collaborate? Reach out anytime.
            </p>
            <div className="mx-auto mt-6 h-[2px] w-28 bg-[#E3D5B3]/30 rounded-full" />
          </section>

          <section className="max-w-xl mx-auto appear-on-scroll">
            <div className="rounded-xl border border-[#E3D5B3]/20 bg-black/40 backdrop-blur-sm p-8 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="space-y-4 font-['Playfair_Display'] text-[#C2B59B] text-lg">
                <p>We’d love to hear from you.</p>
                <p>Got a question?</p>
                <p>Want to share feedback?</p>
              </div>

              <div className="mt-8 space-y-6">
                <p className="font-['Playfair_Display'] text-[#C2B59B]">
                  Email:{" "}
                  <a
                    href="mailto:edboard2024@gmail.com"
                    className="text-[#E3D5B3] hover:text-[#E3D5B3]/80 transition underline underline-offset-4"
                  >
                    edboard2024@gmail.com
                  </a>
                </p>

                <div className="pt-6 border-t border-[#E3D5B3]/15">
                  <p className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-wide mb-4">
                    Follow us
                  </p>

                  <div className="flex items-center gap-5">
                    <a
                      href="https://www.instagram.com/mit.edboard?igsh=MTU5dG9haWFiZ2hhOA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center text-[#E3D5B3] hover:border-[#E3D5B3]/70 hover:bg-black/60 transition"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={20} />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/the-mit-editorial-board"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center text-[#E3D5B3] hover:border-[#E3D5B3]/70 hover:bg-black/60 transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
