import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
        I am a passionate Front-end Developer with an MCA qualification, specializing in React.js and Next.js. Currently at Apaar Software Technology Services Private Limited, I leverage my expertise to deliver impactful solutions using cutting-edge technologies. 
        </p>

        <br />

        <p className="text-xl">
        My journey in the tech world has equipped me with a profound understanding of both Front-end and Back-end technologies, enabling me to create robust and efficient software solutions.
        As a proactive learner, I consistently stay ahead in the ever-evolving tech landscape, keeping myself updated with the latest industry trends. My confidence, dedication, and strong work ethic make me a valuable asset to any team or organization seeking innovative solutions in technology.
        </p>

        <br />

      
      </div>
    </div>
  );
};

export default About;
