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
                <span className="bg-gradient-to-r from-purple-600  to-cyan-500 bg-clip-text text-transparent">
                  Dion
                </span>
              </h1>
            </div>
            <div>
              <p className="text-xl">Web Developer, Graphic Designer</p>
            </div>
            <div>
              <p>
                Helping brands and individuals build their online presence
                through modern web development and creative design.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-purple-600 hover:bg-transparent hover:border hover:border-purple-600 transition-all ease-in-out duration-100 "
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-purple-600 hover:bg-purple-600 hover:border hover:border-purple-600 transition-all ease-in-out duration-100"
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
