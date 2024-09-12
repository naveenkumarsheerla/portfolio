import React, { useEffect } from "react";
import HeroImage from "../assets/Naveen.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "ReactJS",
        "NextJS",
        "Front End",
        "Web"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-500 sm:text-3xl">
            I'm a{" "}
            <span className="text-teal-300 typing-element "> </span> Developer
          </h2>
          <p className="max-w-md py-4 text-gray-400">
            I love to work on web applications using technologies like
            HTML, CSS, JavaScript, ReactJS, NextJS.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-blue-500 to-teal-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="ml-10 md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="w-full mx-auto duration-500 md:w-2/3 md:ml-10 rounded-2xl hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
