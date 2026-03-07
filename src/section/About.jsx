import React, { useEffect, useState } from "react";
import dionImg from "../assets/dion.png";
import glowBlue from "../assets/glow_blue.png";
import glowPurple from "../assets/glow_purple.png";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Track scroll position for parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about-me"
      className="relative w-full border-t-2 border-[#004fff]/30 overflow-hidden"
    >
      <img
        src={glowBlue}
        className="absolute top-36 md:top-4 left-0 -z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${offsetY * -0.2}px)`,
        }}
        alt=""
      />
      <img
        src={glowPurple}
        className="absolute top-1/2 md:top-8 right-0 -z-10 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${offsetY * -0.1}px)`,
        }}
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent -z-40 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#004fff]/10 via-transparent to-transparent -z-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center px-4 py-16 md:pb-24">
        <div className="flex flex-col gap-y-2">
          <div>
            <span className="text-4xl bg-gradient-to-r from-[#004fff] to-[#56b4f0] bg-clip-text text-transparent font-bold md:text-5xl">
              About Me
            </span>
          </div>
          <div>
            <p className="text-slate-300 text-lg">
              Building intelligent web solutions for the digital economy.
            </p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-full flex justify-center py-12">
          <img
            src={dionImg}
            alt="Dion"
            className="w-full md:w-[400px] px-8 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* NEW: Experiences & Certificates Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-4 text-left">
          {/* Column 1: Experiences */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#004fff] to-[#56b4f0] bg-clip-text text-transparent border-b border-[#004fff]/30 pb-2">
              Experiences
            </h3>

            {/* Experience Card 1 */}
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-[#004fff]/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  Core Team Curriculum UI/UX
                </h4>
                <span className="text-sm font-medium text-[#56b4f0]">
                  2026 - Present
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-3">
                GDGOC Universitas Indonesia
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mengembangkan materi kurikulum UI/UX dan memimpin sesi Study Jam
                mengenai Design Thinking dan User Research.
              </p>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-[#004fff]/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  Fullstack Web Developer
                </h4>
                <span className="text-sm font-medium text-[#56b4f0]">
                  2024 - Present
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-3">Freelance</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Membangun aplikasi web menggunakan ekosistem Next.js dan
                TypeScript. Saat ini mulai mengeksplorasi integrasi Web3.
              </p>
            </div>
          </div>

          {/* Column 2: Certificates */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#004fff] to-[#56b4f0] bg-clip-text text-transparent border-b border-[#004fff]/30 pb-2">
              Certificates & Awards
            </h3>

            {/* Certificate Card 1 */}
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-[#004fff]/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  Campus Representative Speaker
                </h4>
                <span className="text-sm font-medium text-[#56b4f0]">
                  Jan 2026
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-3">
                Smaga Campus Fair
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mewakili Universitas Indonesia sebagai pembicara untuk
                mempresentasikan kehidupan kampus di hadapan siswa SMAN 3
                Surabaya.
              </p>
            </div>

            {/* Certificate Card 2 */}
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-[#004fff]/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-white">
                  Capital Market Class
                </h4>
                <span className="text-sm font-medium text-[#56b4f0]">
                  Oct 2025
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-3">
                Bursa Efek Indonesia & CEDS UI
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Menyelesaikan program literasi keuangan, struktur ekuitas, dan
                dinamika pasar modal langsung di BEI SCBD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
