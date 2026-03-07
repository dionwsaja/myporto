import React from "react";
import me from "../assets/me.png";
import glow from "../assets/glow.png";

const Hero = () => {
  return (
    <div id="home" className=" relative">
      <div className="max-w-7xl mx-auto pt-36 md:pt-0 px-4">
        <div className="flex flex-col md:flex-row md:items-center ">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-7xl font-bold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#004fff]  to-[#56b4f0] bg-clip-text text-transparent">
                  Dion
                </span>
              </h1>
            </div>
            <div>
              <p className="text-xl">
                Web Developer, AI Enthusiast, Entrepreneur
              </p>
            </div>
            <div>
              <p>
                Fullstack Developer with a passion for AI-driven solutions and
                entrepreneurial growth.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#004fff] hover:bg-transparent hover:border hover:border-[#004fff] transition-all ease-in-out duration-100 "
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-[#004fff] hover:bg-[#004fff] hover:border hover:border-[#004fff] transition-all ease-in-out duration-100"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div>
            <img src={me} alt="dion" className="w-[800px]" />
          </div>
        </div>
      </div>
      <img src={glow} className="absolute top-0 left-0 w-full h-full -z-10" />
    </div>
  );
};

export default Hero;
