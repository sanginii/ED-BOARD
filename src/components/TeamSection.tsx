import { Link } from "react-router-dom";
import { teamMembers } from "@/data/teamData";

export default function TeamSection() {
  // Only show executive board members in the preview
  const executiveMembers = teamMembers.filter(
    (member) => member.department === "Executive Board"
  );
  const previewMembers = executiveMembers.slice(0, 2);

  return (
    <section
      id="team"
      className="py-20 bg-black text-[#C2B59B] relative overflow-hidden"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center mb-6 appear-on-scroll">
          <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            Meet Our Team
          </span>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </h2>

        <p className="text-center font-['Playfair_Display'] text-[#C2B59B] max-w-2xl mx-auto mb-10 appear-on-scroll">
          Our team consists of passionate individuals across various domains
          working together to create memorable content and experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewMembers.map((member, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-xl
                border border-[#E3D5B3]/20
                bg-black/40 backdrop-blur-sm
                shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                overflow-hidden
                transform transition-all duration-500 hover:-translate-y-2
                appear-on-scroll
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.55)]" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-56 h-56 rounded-full object-cover border border-[#E3D5B3]/25 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 font-['Cinzel'] text-[#E3D5B3] text-xl tracking-wide">
                  {member.name}
                </h3>
                <p className="mt-1 font-['Playfair_Display'] text-[#C2B59B]">
                  {member.position}
                </p>
              </div>
            </div>
          ))}

          {/* Teaser card */}
          <div className="group relative rounded-xl overflow-hidden border border-[#E3D5B3]/25 bg-black/40 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.45)] flex items-center justify-center appear-on-scroll">
            <div className="text-center p-8">
              <h3 className="font-['Cinzel'] text-[#E3D5B3] text-2xl mb-3 tracking-wide uppercase">
                Meet the Full Team
              </h3>
              <p className="font-['Playfair_Display'] text-[#C2B59B] mb-6">
                Discover all the talented individuals who make up the MIT
                Editorial Board.
              </p>

              <Link
                to="/team"
                className="
                  inline-block
                  px-6 py-3 rounded-md
                  border-2 border-[#E3D5B3]/50
                  bg-black/25
                  text-[#E3D5B3]
                  font-['Playfair_Display']
                  shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                  hover:border-[#E3D5B3]/85 hover:bg-black/35
                  transition
                "
              >
                View All Team Members
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
