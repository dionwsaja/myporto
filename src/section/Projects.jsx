import React from "react";
import minimiwaste from "../assets/projects/minimiwaste.png";
import wedding from "../assets/projects/wedding.png";
import ac from "../assets/projects/ac.png";
import fusion from "../assets/projects/fusion.png";
import profitara from "../assets/projects/profitara.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex w-full py-8 items-center justify-center">
          <span className="text-center text-4xl bg-gradient-to-r from-purple-600  to-cyan-500 bg-clip-text text-transparent font-bold md:text-5xl">
            Projects
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-y-8  gap-x-4">
          <a
            href="https://dionwsaja.github.io/ac_kw_2"
            target="_blank"
            className="hover:scale-102 transition-all ease-in-out duration-200 "
          >
            <div className="w-full  h-full   rounded-lg overflow-hidden md:h-[250px] border border-purple-600">
              <img
                src={ac}
                alt=""
                className="object-cover h-full w-full bg-center bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://minimiwaste.vercel.app/"
            target="_blank"
            className="hover:scale-102 transition-all ease-in-out duration-200"
          >
            <div className="w-full rounded-lg overflow-hidden md:h-[250px] border border-purple-600">
              <img
                src={minimiwaste}
                alt=""
                className="object-cover h-full w-full bg-center bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://dionwsaja.github.io/wedding/#home"
            target="_blank"
            className="hover:scale-102 transition-all ease-in-out duration-200"
          >
            <div className="w-full   rounded-lg overflow-hidden md:h-[250px] border border-purple-600">
              <img
                src={wedding}
                alt=""
                className="object-cover bg-center h-full w-full bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://profitara.vercel.app"
            target="_blank"
            className="hover:scale-102 transition-all ease-in-out duration-200"
          >
            <div className="w-full   rounded-lg overflow-hidden md:h-[250px] border border-purple-600">
              <img
                src={profitara}
                alt=""
                className="object-cover bg-center h-full w-full bg-no-repeat"
              />
            </div>
          </a>
          <a
            href="https://fusionlab.vercel.app"
            target="_blank"
            className="hover:scale-102 transition-all ease-in-out duration-200"
          >
            <div className="w-full   rounded-lg overflow-hidden md:h-[250px] border border-purple-600">
              <img
                src={fusion}
                alt=""
                className="object-cover bg-center h-full w-full bg-no-repeat"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
