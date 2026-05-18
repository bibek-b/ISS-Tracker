import { useState } from "react";
import { NAVBAR_OPTIONS } from "../constants/navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentNav, setCurrentNav] = useState<string | null>(null);

  console.log({currentNav})
  return (
    <nav
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative flex items-center justify-between px-8 h-15 bg-[#080c14] border-b border-[rgba(99,180,255,0.18)] overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(56,140,255,0.08),transparent_70%)]" />

      {/* Brand */}
      <a href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8.5 h-8.5 rounded-lg bg-[rgba(56,140,255,0.12)] border border-[rgba(99,180,255,0.3)] flex items-center justify-center">
          <img src="/space-station.png" alt="ISS" className="w-4.5 h-4.5" />
        </div>
        <span
          className="text-[13.5px] font-bold tracking-widest text-[#e8f2ff] uppercase"
          style={{ fontFamily: "'Orbitron', monospace" }}
        >
          ISS <span className="text-[#3b8fff]">Tracker</span>
        </span>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-0.5">
        {NAVBAR_OPTIONS.map((opt) => (
          <Link
            key={opt.link}
            to={opt.link}
            onClick={() => setCurrentNav(opt.link)}
            className={`relative px-3.5 py-1.5 rounded-md text-[13.5px] font-medium tracking-wide
                       text-[rgba(200,218,255,0.6)] transition-colors duration-200
                       hover:text-[#e8f2ff] hover:bg-[rgba(56,140,255,0.1)] ${currentNav === opt.link ? "bg-[rgba(56,140,255,0.1)]": ""}`}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Speed */}
        <div className="hidden md:flex flex-col leading-none">
          <span
            className="text-[10px] uppercase tracking-[0.22em] text-[rgba(200,218,255,0.38)]"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            Orbit Speed
          </span>

          <span className="mt-1 text-[13px] font-semibold text-[#e8f2ff]">
            27,600 km/h
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-7 bg-[rgba(99,180,255,0.12)]" />

        {/* Live status */}
        <div className="flex items-center gap-2 text-[12px] tracking-wide text-[#8ed1a5]">
          <span className="w-2 h-2 rounded-full bg-[#3ddc84] shadow-[0_0_8px_#3ddc84] animate-pulse" />
          LIVE
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
