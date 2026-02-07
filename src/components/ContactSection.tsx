import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Idea: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.Name.trim(),
      email: formData.Email.trim(),
      idea: formData.Idea.trim(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby8UvSFJQNg4VZEEOqyvi-KXkJqiNqCIHxBDTvOYcr12AjiHL5oarMcTMgyF7wUiDWi/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      alert("Thank you for sharing your idea! We will get back to you soon.");
      setFormData({ Name: "", Email: "", Idea: "" });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert(
        "Sorry, there was an error submitting your idea. Please try again later."
      );
    }
  };

  return (
    <section className="py-20 bg-black text-[#C2B59B] relative overflow-hidden">
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="appear-on-scroll space-y-6">
            <h2 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
              Join Our Creative Journey
            </h2>

            <p className="font-['Playfair_Display'] text-[#C2B59B] text-lg leading-relaxed">
              Be part of MIT Editorial Board — the creative hub behind MIT&apos;s
              official yearbook, newsletters, and social media presence. We&apos;re
              looking for passionate storytellers, designers, and content creators.
            </p>

            <div className="space-y-4 font-['Playfair_Display'] text-[#C2B59B]">
              <div className="flex items-start space-x-3">
                <span className="text-[#E3D5B3] text-xl">✦</span>
                <p>Create content for MIT&apos;s official yearbook and newsletters</p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E3D5B3] text-xl">✦</span>
                <p>Shape engaging social media narratives for the institute</p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E3D5B3] text-xl">✦</span>
                <p>Document and preserve MIT&apos;s memorable moments</p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#E3D5B3] text-xl">✦</span>
                <p>Build a network with creative minds across departments</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-8 py-3 rounded-md
                border-2 border-[#E3D5B3]/50
                bg-black/25
                text-[#E3D5B3]
                font-['Playfair_Display']
                shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                hover:border-[#E3D5B3]/85 hover:bg-black/35
                transition
              "
            >
              Explore More
            </a>
          </div>

          {/* Right side form */}
          <div className="appear-on-scroll">
            <h2 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl mb-8">
              Share Your Ideas
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black/40 border border-[#E3D5B3]/20 rounded-xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            >
              <div>
                <label className="block font-['Playfair_Display'] text-[#C2B59B] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.Name}
                  onChange={(e) =>
                    setFormData({ ...formData, Name: e.target.value })
                  }
                  className="
                    w-full px-4 py-3 rounded-md
                    bg-black/40 border border-[#E3D5B3]/25
                    text-[#E3D5B3]
                    font-['Playfair_Display']
                    focus:outline-none focus:ring-2 focus:ring-[#E3D5B3]/40
                  "
                  required
                />
              </div>

              <div>
                <label className="block font-['Playfair_Display'] text-[#C2B59B] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                  }
                  className="
                    w-full px-4 py-3 rounded-md
                    bg-black/40 border border-[#E3D5B3]/25
                    text-[#E3D5B3]
                    font-['Playfair_Display']
                    focus:outline-none focus:ring-2 focus:ring-[#E3D5B3]/40
                  "
                  required
                />
              </div>

              <div>
                <label className="block font-['Playfair_Display'] text-[#C2B59B] mb-2">
                  Your Idea
                </label>
                <textarea
                  value={formData.Idea}
                  onChange={(e) =>
                    setFormData({ ...formData, Idea: e.target.value })
                  }
                  className="
                    w-full px-4 py-3 rounded-md h-32
                    bg-black/40 border border-[#E3D5B3]/25
                    text-[#E3D5B3]
                    font-['Playfair_Display']
                    focus:outline-none focus:ring-2 focus:ring-[#E3D5B3]/40
                  "
                  required
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
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
                Submit Your Idea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
