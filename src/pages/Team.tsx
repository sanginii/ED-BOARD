import { useEffect } from "react";
import { teamMembersData } from "@/data/teamData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
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
          {/* Team Photo Hero */}
          <section className="mb-16 appear-on-scroll">
            <div className="relative overflow-hidden rounded-xl border border-[#E3D5B3]/20 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
              <img
                src="/Board26.jpeg"
                alt="MIT Editorial Board Team"
                className="w-full h-[380px] md:h-[520px] object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end">
                <div className="p-8">
                  <h1 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-5xl mb-2">
                    Meet Our Team
                  </h1>
                  <p className="font-['Playfair_Display'] text-[#C2B59B] text-lg md:text-xl max-w-2xl">
                    The passionate individuals who bring creativity to life at
                    MIT Editorial Board.
                  </p>
                </div>
              </div>

              {/* image vignette */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.7)]" />
            </div>
          </section>

          {/* Team Quote */}
          <section className="text-center mb-16 appear-on-scroll">
            <blockquote className="font-['Playfair_Display'] text-[#C2B59B] text-2xl md:text-3xl italic leading-relaxed">
              “A team is not just a group of people, but a family brought
              together by shared dreams.”
            </blockquote>
            <div className="mx-auto mt-6 h-[2px] w-28 bg-[#E3D5B3]/30 rounded-full" />
          </section>

          {/* Team Members by Department */}
          <section>
            {Object.entries(teamMembersData).map(([department, members], index) => (
              <div
                key={department}
                className="mb-16 appear-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-center mb-10">
                  <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-2xl md:text-3xl">
                    {department}
                  </span>
                  <div className="mx-auto mt-4 h-[2px] w-24 bg-[#E3D5B3]/30 rounded-full" />
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {members.map((member: any, idx: number) => (
                    <div
                      key={idx}
                      className="
                        group
                        rounded-xl
                        overflow-hidden
                        border border-[#E3D5B3]/20
                        bg-black/40 backdrop-blur-sm
                        shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                        transform transition-all duration-500 hover:-translate-y-2 hover:border-[#E3D5B3]/35
                      "
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-64 sm:h-auto overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-6 flex-1">
                          <h3 className="font-['Cinzel'] text-[#E3D5B3] text-xl tracking-wide">
                            {member.name}
                          </h3>

                          <p className="font-['Playfair_Display'] text-[#C2B59B] mb-3">
                            {member.position}
                          </p>

                          <p className="font-['Playfair_Display'] text-[#C2B59B] italic text-base md:text-lg leading-relaxed">
                            “{member.quote}”
                          </p>
                        </div>
                      </div>

                      {/* card vignette */}
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.55)]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
