
import PageHeaders from "../components/PageHeaders";

const CameraView = () => {
  return (
    <section className="min-h-screen bg-[#080c14] text-[#e8f2ff] px-6 py-6">
      {/* <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-6"> */}
      <div
        className="relative rounded-3xl overflow-hidden border border-[rgba(99,180,255,0.15)]
                      bg-[#0b1220] shadow-[0_0_25px_rgba(59,143,255,0.08)]"
      >
        <div className="absolute top-4 left-4 z-50">
          {/* <div
              className="px-4 py-2 rounded-xl bg-[rgba(8,12,20,0.82)]
                            border border-[rgba(99,180,255,0.18)] backdrop-blur-md"
            >
                 <p
                className="text-[12px] tracking-[0.25em] uppercase text-[#7ec4ff]"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Camera View
              </p>
              <h1 className="text-2xl font-semibold mt-1">International Space Station Live Camera View By Official <span className="font-bold text-blue-500">NASA </span>Youtube Channel</h1>
            </div> */}
          <PageHeaders
            title="Camera View"
            subtitle="International Space Station Live Camera View"
            description="Watch the International Space Station in real-time through NASA's official YouTube channel."
          />
        </div>

        <div className="h-[92vh] w-full bg-[#05080f] flex items-center justify-center text-[#7ec4ff] mt-12">
          <iframe
            width="860"
            height="485"
            src="https://www.youtube.com/embed/FuuC4dpSQ1M?si=pWhjs9lT3vKeUdCY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CameraView;
