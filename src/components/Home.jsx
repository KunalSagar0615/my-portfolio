import React from "react";

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
        <img src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png" alt="Profile" className="w-64 h-64 rounded-full border-4 border-blue-500 object-cover shadow-lg" />
      </div>

     
    </div>
  );
};

export default Home;
