import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Resume from "../assets/Resume.pdf";
import { IoIosCloseCircle } from "react-icons/io";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdDesignServices,
} from "react-icons/md";

function Header() {
  const [menutog, setmenutog] = useState(false);
  const [theme, settheme] = useState(false);
  const [activelink, setactivelink] = useState("Home");

  const toggleTheme = () => {
    settheme(!theme);
    document.documentElement.classList.toggle("dark");
  };

  const handleLinkClick = (link) => {
    setactivelink(link);
  };

  return (
    <>
      <div id="home-section" className="bg-gray-800 text-white p-3 font-bold">
        <div className=" mx-auto py-[15px] px-[20px] flex items-center justify-between cursor-pointer ">
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/shivam-bisht25/"
              target="blank"
            >
              <FaLinkedin className=" text-blue-600 sm:text-2xl md:text-3xl " />
            </a>
            <a href="https://github.com/ShivamxBisht" target="_blank">
              <FaGithub className="md:text-3xl sm:text-2xl" />
            </a>
            <a href="https://grabcad.com/shivam.bisht-4" target="_blank">
              <MdDesignServices className="md:text-3xl sm:text-2xl" />
            </a>
            <a href={Resume} download="Shivam-Resume.pdf">
              <div className="relative group">
                <IoDocument className="md:text-3xl sm:text-2xl " />
                <span className="absolute border bg-white bottom-[-20px] left-1/2 transform -translate-x-1/2 text-bold opacity-0 text-black text-xs  mt-2 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  Resume
                </span>
              </div>
            </a>
          </div>

          <ul className="md:flex hidden gap-10 cursor-pointer">
            <a href="#home-section">
              <li
                className={
                  activelink === "Home" ? "custom duration-300 ease-in-out" : ""
                }
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </li>
            </a>
            <a href="#skills-section">
              <li
                className={
                  activelink === "Skills"
                    ? "custom duration-300 ease-in-out"
                    : ""
                }
                onClick={() => handleLinkClick("Skills")}
              >
                Skills
              </li>
            </a>
            <a href="#project-section">
              <li
                className={
                  activelink === "Projects"
                    ? "custom duration-300 ease-in-out"
                    : ""
                }
                onClick={() => handleLinkClick("Projects")}
              >
                Projects
              </li>
            </a>
            <a href="#experience-section">
              <li
                className={
                  activelink === "Experience"
                    ? "custom duration-300 ease-in-out"
                    : ""
                }
                onClick={() => handleLinkClick("Experience")}
              >
                Experience
              </li>
            </a>
            <a href="#contact-section">
              <li
                className={
                  activelink === "Contact"
                    ? "custom duration-300 ease-in-out"
                    : ""
                }
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </li>
            </a>
          </ul>
          <ul
            className={`md:hidden z-10 font-extrabold text-3xl duration-500 transition-all fixed bg-gradient-to-b from-purple-600 to-blue-600 top-0 w-full h-screen grid content-center justify-center
            ${menutog ? "right-[0]" : "right-[-100%]"}`}
          >
            <a href="#home-section" onClick={() => setmenutog(false)}>
              <li className="py-10 hover:text-black ease-in-out duration-500">
                Home
              </li>
            </a>
            <a href="#skills-section" onClick={() => setmenutog(false)}>
              <li className="py-10 hover:text-black ease-in-out duration-500">
                Skills
              </li>
            </a>
            <a href="#project-section" onClick={() => setmenutog(false)}>
              <li className="py-10 hover:text-black ease-in-out duration-500">
                Projects
              </li>
            </a>
            <a href="#experience-section" onClick={() => setmenutog(false)}>
              <li className="py-10 hover:text-black ease-in-out duration-500">
                Experience
              </li>
            </a>
            <a href="#contact-section" onClick={() => setmenutog(false)}>
              <li className="py-10 hover:text-black ease-in-out duration-500">
                Contact
              </li>
            </a>
          </ul>
        </div>
        {/*Toggle in Menu bar*/}
        <div>
          {menutog ? (
            <IoIosCloseCircle
              onClick={() => setmenutog(!menutog)}
              className="md:text-3xl  z-10 sm:text-2xl md:hidden font-bold text-white relative float-right bottom-8 right-4 sm:bottom-10"
            />
          ) : (
            <FiMenu
              onClick={() => setmenutog(!menutog)}
              className="md:text-3xl z-10 sm:text-2xl relative font-extrabold md:hidden float-right bottom-8 right-4 sm:bottom-10"
            />
          )}
        </div>

        {/*Toggle in Theme*/}
        <div>
          {theme ? (
            <MdOutlineLightMode
              onClick={toggleTheme}
              className="cursor-pointer hidden sm:block xx:block sm:text-2xl relative float-right bottom-8 right-8 md:right-[-10px] sm:bottom-10 "
            />
          ) : (
            <MdOutlineDarkMode
              onClick={toggleTheme}
              className="cursor-pointer hidden sm:block xx:block sm:text-2xl relative float-right bottom-8 right-8 md:right-[-10px] sm:bottom-10"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
