// Astronauts.tsx

import PageHeaders from "../components/PageHeaders";

const astronauts = [
  {
    name: "Sunita Williams",
    country: "USA",
    role: "Flight Engineer",
  },
  {
    name: "Butch Wilmore",
    country: "USA",
    role: "Commander",
  },
  {
    name: "Oleg Kononenko",
    country: "Russia",
    role: "Cosmonaut",
  },
];

const AstronautsInfo = () => {
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER */}
        {/* <div className="mb-10">
          <p
            className="text-[12px] tracking-[0.3em] uppercase text-[#7ec4ff]"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Astronaut Information
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Astronauts Currently In Orbit
          </h1>
        </div> */}
        <PageHeaders title="Astronaut Information" subtitle="Astronauts Currently In the International Space Station" description="Meet the brave individuals who are currently living and working in the International Space Station." />

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {astronauts.map((astro) => (
            <div
              key={astro.name}
              className="group rounded-3xl bg-[#0b1220]
                         border border-[rgba(99,180,255,0.12)]
                         p-6 transition-all duration-300
                         hover:border-[rgba(99,180,255,0.35)]
                         hover:-translate-y-1"
            >
              {/* AVATAR */}
              <div
                className="w-20 h-20 rounded-2xl
                           bg-[rgba(59,143,255,0.12)]
                           border border-[rgba(99,180,255,0.22)]
                           flex items-center justify-center
                           text-3xl"
              >
                👨‍🚀
              </div>

              {/* INFO */}
              <div className="mt-5">
                <h2 className="text-2xl font-semibold">{astro.name}</h2>

                <p className="mt-2 text-[#7ec4ff]">{astro.role}</p>

                <div className="mt-5 space-y-3 text-sm text-[rgba(220,232,255,0.65)]">
                  <div className="flex justify-between">
                    <span>Country</span>
                    <span>{astro.country}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Status</span>

                    <div className="flex items-center gap-2 text-[#8ed1a5]">
                      <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstronautsInfo;