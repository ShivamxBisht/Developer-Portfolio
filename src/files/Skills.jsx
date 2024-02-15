import React from "react";
import Lottie from "lottie-react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import skillsanimation from "../Animation/skills-animation.json";

function Skills() {
  return (
    <>
      <div id="skills-section" className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:grid md:grid-cols-3 h-auto md:h-[600px] pt-20 my-10">
        <div className="md:col-span-1 w-full md:w-[80%] flex justify-center items-center">
          <Lottie animationData={skillsanimation} className="cursor-pointer" />
        </div>
        <div className="md:col-span-2 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold pb-10">Frontend Developer</h1>
          <div className="text-5xl flex flex-wrap justify-center gap-10 pb-10">
            <div className="relative">
              <FaPython className="cursor-grab" />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                Python
              </span>
            </div>
            <div className="relative">
              <TbBrandJavascript />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                Javascript
              </span>
            </div>
            <div className="relative">
              <FaHtml5 />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                HTML5
              </span>
            </div>
            <div className="relative">
              <FaCss3Alt />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                CSS
              </span>
            </div>
            <div className="relative">
              <SiMysql />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                SQL
              </span>
            </div>
            <div className="relative">
              <FaReact />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                React.js
              </span>
            </div>
            <div className="relative">
              <SiTailwindcss />
              <span className="absolute text-bold text-xl opacity-0 right-5 translate-x-1/2 transform hover:opacity-100">
                Tailwindcss
              </span>
            </div>
          </div>
          <div className="flex flex-col text-xl items-center gap-5">
            <p>
              💎 Proficient in Developing SPA using Modern frameworks like
              React.js
            </p>
            <p>
              💎 Expertise in responsive web design across various devices and
              screen sizes
            </p>
            <p>
              💎 Dedicated to optimizing website performance and accessibility
            </p>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Skills;
