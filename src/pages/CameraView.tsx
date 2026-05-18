// LiveView.tsx

const stats = [
  { label: "Speed", value: "27,600 km/h" },
  { label: "Altitude", value: "420 km" },
  { label: "Orbit Time", value: "90 mins" },
  { label: "Visibility", value: "Daylight" },
];

const CameraView = () => {
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-6">
        
        {/* LEFT - MAP */}
        <div
          className="relative rounded-3xl overflow-hidden border border-[rgba(99,180,255,0.15)]
                     bg-[#0b1220] shadow-[0_0_25px_rgba(59,143,255,0.08)]"
        >
          <div className="absolute top-4 left-4 z-[999]">
            <div className="px-4 py-2 rounded-xl bg-[rgba(8,12,20,0.82)]
                            border border-[rgba(99,180,255,0.18)] backdrop-blur-md">
              <p
                className="text-[12px] tracking-[0.25em] uppercase text-[#7ec4ff]"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Live Tracking
              </p>

              <h1 className="text-2xl font-bold mt-1">ISS Live View</h1>
            </div>
          </div>

          {/* YOUR MAP COMPONENT HERE */}
          <div className="h-[92vh] w-full bg-[#05080f] flex items-center justify-center text-[#7ec4ff]">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FuuC4dpSQ1M?si=pWhjs9lT3vKeUdCY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-5">
          {/* STATUS CARD */}
          <div
            className="rounded-3xl bg-[#0b1220]
                       border border-[rgba(99,180,255,0.15)]
                       p-5 shadow-[0_0_25px_rgba(59,143,255,0.08)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.25em] text-[#7ec4ff]"
                  style={{ fontFamily: "'Orbitron', monospace" }}
                >
                  Mission Status
                </p>

                <h2 className="text-xl font-semibold mt-1">
                  International Space Station
                </h2>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#8ed1a5]">
                <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" />
                Live
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[rgba(255,255,255,0.02)]
                             border border-[rgba(99,180,255,0.08)]
                             p-4"
                >
                  <p className="text-sm text-[rgba(200,218,255,0.55)]">
                    {item.label}
                  </p>

                  <h3 className="text-lg font-semibold mt-2 text-[#e8f2ff]">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* EXTRA INFO */}
          <div
            className="rounded-3xl bg-[#0b1220]
                       border border-[rgba(99,180,255,0.15)]
                       p-5"
          >
            <p
              className="text-[11px] uppercase tracking-[0.25em] text-[#7ec4ff]"
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              Current Mission
            </p>

            <p className="mt-4 leading-7 text-[rgba(220,232,255,0.72)] text-sm">
              The ISS continuously orbits Earth at approximately 27,600 km/h,
              completing one orbit every 90 minutes while supporting scientific
              research and international collaboration in space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraView;