import { articles } from "@/data/articlesData";

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="py-20 bg-black text-[#C2B59B] relative overflow-hidden"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center mb-6 appear-on-scroll">
          <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            Featured Articles
          </span>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </h2>

        <p className="text-center font-['Playfair_Display'] text-[#C2B59B] max-w-2xl mx-auto mb-10 appear-on-scroll">
          Explore our collection of thought-provoking articles covering campus
          life, student achievements, and more.
        </p>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`rounded-lg overflow-hidden border border-[#E3D5B3]/20 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-300 transform hover:-translate-y-1 hover:border-[#E3D5B3]/35 appear-on-scroll ${
                article.size === "big"
                  ? "md:col-span-8 md:row-span-2"
                  : "md:col-span-4"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 sm:h-64 md:h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />

                  {/* vintage overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 p-6 flex flex-col justify-end">
                    <h3 className="font-['Cinzel'] text-[#E3D5B3] text-xl md:text-2xl tracking-wide mb-2">
                      {article.title}
                    </h3>
                    <p className="font-['Playfair_Display'] text-[#C2B59B] text-sm md:text-base line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* edge vignette */}
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
