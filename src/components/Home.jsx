import React from "react";
import profilePic from "../assets/profile/identity.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center min-h-[90vh] px-8 py-10 bg-gray-900 text-gray-100">
      
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Kunal Ananda Sagar</span>
        </h1>

        <h2 className="text-2xl text-gray-300">
          <span className="text-purple-400">Full Stack Java Developer</span> 
        </h2>

        <p className="text-gray-400 leading-relaxed">
          A motivated <span className="text-blue-400 font-medium">Java Developer</span> with
          strong foundations in{" "}
          <span className="text-blue-400 font-medium">OOPs</span>,{" "}
          <span className="text-blue-400 font-medium">Data Structures & Algorithms</span>, and{" "}
          <span className="text-blue-400 font-medium">Core Java</span>.
          <br /><br />
          Experienced in building scalable{" "}
          <span className="text-blue-400 font-medium">RESTful APIs</span> using{" "}
          <span className="text-blue-400 font-medium">Spring Boot</span> and implementing
          clean, layered backend architecture. Hands-on with{" "}
          <span className="text-blue-400 font-medium">MySQL</span>,{" "}
          <span className="text-blue-400 font-medium">PostgreSQL</span>,{" "}
          <span className="text-blue-400 font-medium">Swagger (OpenAPI)</span>, and{" "}
          <span className="text-blue-400 font-medium">GitHub</span>.
          <br /><br />
          On the frontend, I build responsive and modern user interfaces using{" "}
          <span className="text-blue-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">JavaScript</span>, and{" "}
          <span className="text-blue-400 font-medium">Tailwind CSS</span>, enabling seamless
          integration between frontend and backend systems.
          <br /><br />
          A quick learner with a strong problem-solving mindset, eager to contribute to
          scalable full-stack applications in a growth-oriented organization.
        </p>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 rounded-full border-4 border-blue-500 object-cover shadow-lg animate-[float_3s_ease-in-out_infinite]"
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
