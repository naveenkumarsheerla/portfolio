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
          I am a results-driven Full Stack Developer with 3+ years of experience and an MCA qualification, specializing in React.js, Next.js, and Node.js. Currently at mTouch Labs Private Limited, I build core modules for CRM, HR, and project-management platforms, delivering measurable improvements in performance and usability.
        </p>

        <br />

        <p className="text-xl">
          My experience spans building scalable UI components, RESTful APIs with Node.js and Express, and secure authentication with NextAuth and Keycloak, backed by MySQL and MongoDB. I'm skilled in state management (Redux, Zustand, React Query), schema-based form validation, and performance optimization — with growing expertise in GraphQL and backend architecture.
        </p>

        <br />


      </div>
    </div>
  );
};

export default About;
