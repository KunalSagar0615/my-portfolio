import React from "react";
import {FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            Let’s Connect 👋
          </h3>
          <p className="text-gray-400 mb-6">
            Want to collaborate or just say hi? I’m always open to new
            opportunities and conversations.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span>kunalsagar0615@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <span>+91 7249176496</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            <a href="https://www.linkedin.com/in/kunal-sagar-9b8b25354/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition" >
              <FaLinkedin size={26} />
            </a>
            <a href="https://github.com/KunalSagar0615" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" >
              <FaGithub size={26} />
            </a>
            <a href="https://www.instagram.com/kunal.0615?igsh=YzVoYmM1czh3YjFr&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition" >
              <FaSquareInstagram size={26} />
            </a>
          </div>
        </div>
        <div>
          <div>
            <h2>Donwnload my CV: <a href="https://drive.google.com/file/d/19mZsxUlfxrD04-mfXIFMlk5rqG4AJJEg/view?usp=drivesdk"><CiLink size={22} /></a></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
