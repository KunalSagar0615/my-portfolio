import React from "react";
import profilePic from "../assets/profile/identity.jpg"

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center min-h-[90vh] px-8 py-10 bg-gray-900 text-gray-100">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Kunal Ananda Sagar</span>
        </h1>
        <h2 className="text-2xl text-gray-300">
          A Passionate{" "}
          <span className="text-purple-400">Web Developer</span> & Designer
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I build responsive and creative web applications using{" "}
          <span className="text-blue-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">Tailwind CSS</span>, and{" "}
          <span className="text-blue-400 font-medium">Node.js</span>. I also
          love backend development using{" "}
          <span className="text-blue-400 font-medium">Java</span>,{" "}
          <span className="text-blue-400 font-medium">C</span>, and{" "}
          <span className="text-blue-400 font-medium">SQL</span>. I’m
          continuously learning and improving my craft to deliver beautiful,
          efficient user experiences.
        </p>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-100 h-100 rounded-full border-4 border-blue-500 object-cover shadow-lg animate-[float_3s_ease-in-out_infinite]"
        />

      </div>

      <style>
        {`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `}
      </style>


    </div>
  );
};

export default Home;
