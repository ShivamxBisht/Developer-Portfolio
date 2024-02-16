import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Projects() {
  return (
    <>
      <div id="project-section" className="max-w-[1000px] h-auto md:h-[600px] md:mx-auto m-[20px] sm:mt-[140px]">
        <div className="sm:px-16 py-6 sm:py-10 flex ">
          <FaLaptopCode className="text-4xl text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold text-blue-400">PROJECTS</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[35px] ">
          <div className="bg-gray-100 shadow-md hover:shadow-lg ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <h2 className="font-bold text-2xl pb-4 pl-8">
              Developer Portfolio
            </h2>
            <p className="text-md w-[80%] pl-8">
              Developer Portfolio Template built with ReactJs and Tailwindcss
              that helps you showcase you work and skills as a Frontend
              developer
            </p>
            <div className="mt-5 pl-8">
              <a href="https://github.com/ShivamxBisht/Developer-Portfolio" target="_blank">
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-3 rounded mr-2">
                  <FaGithub />
                </button>
              </a>
              <a href="https://shivambishtportfolio.netlify.app/" target="_blank">

              <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-2 rounded">
                Demo
              </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md hover:shadow-lg ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <h2 className="font-bold text-2xl pb-4 pl-8">Weather API</h2>
            <p className="text-md w-[80%] pl-8">
              Developed a weather website having live cities or Countries
              weather Data such as Temperature,Humidity,wind speed.
            </p>
            <div className="mt-5 pl-8">
              <a
                href="https://github.com/ShivamxBisht/Simple-Weatherapi-website"
                target="_blank"
              >
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-3 rounded mr-2">
                  <FaGithub />
                </button>
              </a>
              <a target="_blank">
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-2 rounded">
                  Demo
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md hover:shadow-lg ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <h2 className="font-bold text-2xl pb-4 pl-8">News API</h2>
            <p className="text-md w-[80%] pl-8">
              Developed a news api website that fetch live results on request,
              having seperate buttons for some topics with dark mode
            </p>
            <div className="mt-5 pl-8">
              <a
                href="https://github.com/ShivamxBisht/News-API-Website"
                target="_blank"
              >
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-3 rounded mr-2">
                  <FaGithub />
                </button>
              </a>
              <a
                target="_blank"
                href="https://shivamxbisht.github.io/News-API-Website/"
              >
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-2 rounded">
                  Demo
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md hover:shadow-lg ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <h2 className="font-bold text-2xl pb-4 pl-8">
              Dreamworks Clone Website
            </h2>
            <p className="text-md w-[80%] pl-8">
              Cloned a website using HTML,CSS & JS having proper navigational
              section, proper utilization of Flex & Grid property
            </p>
            <div className="mt-5 pl-8">
              <a
                href="https://github.com/ShivamxBisht/Dreamworks-Clone-Website"
                target="_blank"
              >
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-3 rounded mr-2">
                  <FaGithub />
                </button>
              </a>
              <a
                target="_blank"
                href="https://shivamxbisht.github.io/Dreamworks-Clone-Website/"
              >
                <button className="bg-blue-300 hover:shadow-lg shadow-md hover:translate-y-[-2px] ease-linear text-black px-4 py-2 rounded">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
