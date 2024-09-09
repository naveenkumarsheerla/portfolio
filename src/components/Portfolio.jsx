import React from "react";
import DV from "../assets/portfolio/DV.png";
import MCV from "../assets/portfolio/MCV.png";
import kidhood from "../assets/portfolio/Kidhood.png";
import JobFinder from "../assets/portfolio/JobFinder.png";
import IG from "../assets/portfolio/Ig.png";
import stacx from "../assets/portfolio/stacx-logo-cube-3d.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: stacx,
      name: "stacX",
    },
    {
      id: 2,
      src: MCV,
      name: "MCV"
    },
    {
      id: 3,
      src: kidhood,
      name: "Kidhood"
    },
    {
      id: 5,
      src: IG,
      name: "Instagram"
    },
    {
      id: 4,
      src: JobFinder,
      name: "Job Finder"
    },
    {
      id: 6,
      src: DV,
      name: "Devto"
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, name }) => (
            <div key={id} className="rounded-lg shadow-lg shadow-gray-600 overflow-hidden">
              <img
                src={src}
                alt={name}
                className="duration-200 rounded-md hover:scale-105 object-cover"
                style={{ height: "200px", width: "100%" }}
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {name}
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;