import { domains } from "@/data/domainsData";

export default function DomainsSection() {
  return (
    <section
      id="domains"
      className="py-20 bg-black text-[#C2B59B] relative overflow-hidden"
    >
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center mb-6 appear-on-scroll">
          <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            Our Domains
          </span>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </h2>

        <p className="text-center font-['Playfair_Display'] text-[#C2B59B] max-w-2xl mx-auto mb-10 appear-on-scroll">
          Discover the specialized teams that bring MIT Edboard&apos;s vision to
          life through diverse skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                p-8
                border border-[#E3D5B3]/20
                bg-black/40 backdrop-blur-sm
                shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                transition-all duration-300
                hover:-translate-y-1 hover:border-[#E3D5B3]/35
                appear-on-scroll
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6 border border-[#E3D5B3]/25 bg-black/40">
                {domain.icon && (
                  <domain.icon className="h-8 w-8 text-[#E3D5B3]" />
                )}
              </div>

              <h3 className="font-['Cinzel'] text-[#E3D5B3] text-xl mb-3 tracking-wide uppercase">
                {domain.name}
              </h3>

              <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* subtle background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#E3D5B3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#E3D5B3]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
    </section>
  );
}
