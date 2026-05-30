// AboutISS.tsx

import PageHeaders from "../components/PageHeaders";
import SeparatorLine from "../components/SeparatorLine";
import { infos, issFacts } from "../constants/aboutIss";



const AboutISS = () => {
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <PageHeaders
          title="About The Station"
          subtitle="International Space Station"
          description="The ISS is a modular space station orbiting Earth and serves as a laboratory for scientific research, technology development, and international collaboration in space exploration."
        />

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

              <h2 className="text-2xl font-semibold mt-3">{item.value}</h2>
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

        <div className="mt-10 rounded-3xl bg-[#0b1220] border border-[rgba(99,180,255,0.12)] p-8 space-y-10">
            <h2
            className="text-xl font-semibold mb-8"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Interesting Facts
          </h2>
            {issFacts.map((data) => (
             <>
               <h2>{data.fact}</h2>
             {issFacts.length > 1 && <SeparatorLine /> }
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutISS;
