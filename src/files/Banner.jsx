import React from "react";
import Photo from "../assets/Photo.png";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <>
      <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 px-5 lg:px-20 h-auto">
        <div className="w-full lg:w-1/2 py-8 lg:py-0 px-4 lg:px-8">
          <h1 className="text-red-600 font-bold text-4xl">
            Hey all, I'm Shivam Bisht
          </h1>
          <h2 className="text-2xl pt-3 font-semibold">
            {" "}
            I'm {""}
            <ReactTyped
              strings={["Web Developer", "CAD Designer"]}
              typeSpeed={100}
              loop
            />
          </h2>
          <p className="pt-4 text-xl">
            I'm a passionate Frontend Web developer with experience in making
            projects using Technologies like HTML, CSS, Javascript, ReactJs,
            Tailwindcss. I am strongly interested in learning new technologies
            and implementing them in my projects. I'm a self-motivated and
            hardworking individual who is always ready to learn new things and
            work in a team. No Matter how much load, I am ready to accelerate!
          </p>
          <div className="flex justify-center mt-8 lg:mt-12">
            <a href="#contact-section">
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg mr-4">
                Hire Me
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                Contact Me
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-8 lg:py-0 px-4 lg:px-8 flex justify-center items-center">
          {/* Conditionally render photo based on screen size */}
          <img
            className="rounded-full w-[300px] lg:w-[400px] hidden lg:block"
            src={Photo}
            alt="Shivam Bisht"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
