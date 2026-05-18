import EarthImg from "../assets/earth.png";

const Loader = () => {
  return (
    // <div className="fixed inset-0 bg-linear-to-br from-[#0a0a2a] to-[#1a1a3a] flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="absolute inset-0 overflow-hidden">
        
  {/* Generate 100 random stars for natural-looking starfield */}
  {[...Array(100)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full"
      style={{
        // Star size: 1-3px (smaller = more distant, realistic)
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        
        // Random position across entire screen (0-100%)
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        
        // Twinkle animation: each star blinks at different speed (2-5 seconds)
        // Creates varied, organic twinkling effect
        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
        
        // Stagger animation start times (0-2 sec delay)
        // Prevents all stars from twinkling in sync
        animationDelay: `${Math.random() * 2}s`,
        
        // Random brightness: 0.3 (dim) to 1.0 (bright)
        // Adds depth and realism to starfield
        opacity: Math.random() * 0.7 + 0.3,
      }}
    />
  ))}
</div>

      <div className="text-center">
        <img
          src={EarthImg}
          alt="Astronaut"
          className="w-30 mx-auto animate-float"
        />
        <div className="text-white font-mono mt-5 tracking-wide text-2xl">
          <span className="inline-block animate-bounce [animation-delay:0ms]">
            L
          </span>
          <span className="inline-block animate-bounce [animation-delay:100ms]">
            o
          </span>
          <span className="inline-block animate-bounce [animation-delay:200ms]">
            a
          </span>
          <span className="inline-block animate-bounce [animation-delay:300ms]">
            d
          </span>
          <span className="inline-block animate-bounce [animation-delay:400ms]">
            i
          </span>
          <span className="inline-block animate-bounce [animation-delay:500ms]">
            n
          </span>
          <span className="inline-block animate-bounce [animation-delay:600ms]">
            g
          </span>
          <span className="inline-block animate-bounce [animation-delay:700ms]">
            .
          </span>
          <span className="inline-block animate-bounce [animation-delay:800ms]">
            .
          </span>
          <span className="inline-block animate-bounce [animation-delay:900ms]">
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
