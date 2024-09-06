import React from "react";
import DV from "../assets/portfolio/DV.png";
import SBS from "../assets/portfolio/SBS.png";
import MCV from "../assets/portfolio/MCV.png";
import kidhood from "../assets/portfolio/Kidhood.png";
import PF from "../assets/portfolio/PF.png";
import JobFinder from "../assets/portfolio/JobFinder.png";
import IG from "../assets/portfolio/Ig.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PF,
    },
    {
      id: 2,
      src: MCV,
    },
    {
      id: 3,
      src: kidhood,
    },
    {
      id: 5,
      src: IG,
    },
    {
      id: 4,
      src: JobFinder,
    },
    {
      id: 6,
      src: DV,
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
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