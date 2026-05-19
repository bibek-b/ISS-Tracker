// AboutISS.tsx

import PageHeaders from "../components/PageHeaders";

const infos = [
  { label: "Launch Year", value: "1998" },
  { label: "Orbit Speed", value: "27,600 km/h" },
  { label: "Orbit Time", value: "90 mins" },
  { label: "Altitude", value: "420 km" },
  { label: "Crew Capacity", value: "7 Astronauts" },
  { label: "Agencies", value: "NASA · ESA · JAXA" },
];

const AboutISS = () => {
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        {/* <div
          className="rounded-4xl overflow-hidden
                     border border-[rgba(99,180,255,0.15)]
                     bg-[#0b1220]
                     p-10 shadow-[0_0_35px_rgba(59,143,255,0.08)]"
        >
          <p
            className="text-[12px] tracking-[0.3em] uppercase text-[#7ec4ff]"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            About The Station
          </p>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            International
            <br />
            Space Station
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-[rgba(220,232,255,0.7)]">
            The ISS is a modular space station orbiting Earth and serves as a
            laboratory for scientific research, technology development, and
            international collaboration in space exploration.
          </p>
        </div> */}
        <PageHeaders title="About The Station" subtitle="International Space Station" description="The ISS is a modular space station orbiting Earth and serves as a laboratory for scientific research, technology development, and international collaboration in space exploration." />

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {infos.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-[#0b1220]
                         border border-[rgba(99,180,255,0.12)]
                         p-6"
            >
              <p className="text-sm text-[rgba(200,218,255,0.55)]">
                {item.label}
              </p>

              <h2 className="text-2xl font-semibold mt-3">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="mt-10 rounded-3xl bg-[#0b1220] border border-[rgba(99,180,255,0.12)] p-8">
          <h2
            className="text-xl font-semibold mb-8"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            ISS Timeline
          </h2>

          <div className="space-y-8 border-l border-[rgba(99,180,255,0.18)] pl-6">
            <div>
              <p className="text-[#7ec4ff] text-sm">1998</p>
              <h3 className="text-lg font-semibold mt-1">
                First ISS Module Launched
              </h3>
            </div>

            <div>
              <p className="text-[#7ec4ff] text-sm">2000</p>
              <h3 className="text-lg font-semibold mt-1">
                Continuous Human Presence Begins
              </h3>
            </div>

            <div>
              <p className="text-[#7ec4ff] text-sm">Present</p>
              <h3 className="text-lg font-semibold mt-1">
                Ongoing Scientific Missions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutISS;