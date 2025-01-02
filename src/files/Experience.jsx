import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdWork } from "react-icons/md";
import BMW from "../assets/bmwlogo.png";
import IBM from "../assets/ibmlogo.png";
import TCS from "../assets/tcs.png";
import Holtec from "../assets/Holtec.png";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        id="experience-section"
        className="max-w-[1000px] w-full h-auto md:h-[800px]  mx-auto md:mx-auto m-[20px]"
      >
        <div className="sm:px-16 py-6 ml-4 sm:py-10 flex sm:mt-[100px] lg:mt-0">
          <MdWork className="text-4xl text-blue-400 mr-2" />
          <h1 className="text-3xl font-bold text-blue-400">Experience</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] ">
          <div className="bg-gray-100 m-6 sm:m-0 drop-shadow-xl hover:drop-shadow-2xl ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <div className="flex justify-center">
              <img
                src={TCS}
                alt="logo"
                className="rounded-2xl w-[170px] h-[110px] mb-5  shadow-sm hover:shadow-md"
              />
            </div>
            <h1 className="font-bold text-2xl pb-1  justify-center flex">
              Tata Consultancy Service Ltd.
            </h1>
            <h2 className="text-xl font-semibold flex justify-center">
              ASE - Trainee
            </h2>
            <h3 className="font-semibold flex justify-center pb-3">
              Oct 2024 - Present
            </h3>
            <p>
              Currently working in design Projects & directly interacting with
              clients to achieve productivity.
            </p>
          </div>

          <div className="bg-gray-100 m-6 sm:m-0 drop-shadow-xl hover:drop-shadow-2xl ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <div className="flex justify-center">
              <img
                src={Holtec}
                alt="logo"
                className="rounded w-[150px] h-[130px] mb-5  shadow-sm hover:shadow-md"
              />
            </div>
            <h1 className="font-bold text-2xl pb-1  justify-center flex ">
              Holtec Consulting Pvt. Ltd.
            </h1>
            <h2 className="text-xl font-semibold flex justify-center">
              Assistant Project Executive
            </h2>
            <h3 className="font-semibold flex justify-center pb-3">
              July 2024 - September 2024
            </h3>
            <p>
              Performed Calculations,datasheet,Technical evaluation,Mclaren
              software to interact with new packages for Greenfield/brownfield
              projects. Overall technical assistance in project.
            </p>
          </div>

          <div className="bg-gray-100 m-6 sm:m-0 drop-shadow-xl hover:drop-shadow-2xl ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <div className="flex justify-center">
              <img
                src={IBM}
                alt="logo"
                className="rounded w-[150px] h-[70px] mb-5 mt-3 shadow-lg hover:shadow-md"
              />
            </div>
            <h1 className="font-bold text-2xl pb-1  justify-center flex pt-5">
              IBM (Skillsbuild)
            </h1>
            <h2 className="text-xl font-semibold flex justify-center">
              Frontend Developer Intern(Remote)
            </h2>
            <h3 className="font-semibold flex justify-center pb-3">
              Jan 2024 - March 2024
            </h3>
            <p>
              Crafted Frontend Projects as Skillsbuild Plan & Learning all
              Fundamentals in Frontend Fundamentals including HTML, CSS &
              Javascript with ReactJs.
            </p>
          </div>

          <div className="bg-gray-100 m-6 sm:m-0 drop-shadow-xl hover:drop-shadow-2xl ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-4">
            <div className="flex justify-center">
              <img
                src={BMW}
                alt="logo"
                className="rounded-full w-[110px] shadow-lg hover:shadow-md"
              />
            </div>
            <h1 className="font-bold text-2xl pb-1  justify-center flex pt-5 mb-50">
              BMW Bird Automotive
            </h1>
            <h2 className="text-xl font-semibold flex justify-center">
              Diagnosis & Testing Intern
            </h2>
            <h3 className="font-semibold flex justify-center pb-3">
              June 2023 - July 2023
            </h3>
            <p>
              Learned how Diagnosis, Calibration & Testing work at such a big
              firm, worked on ISTA & AIR technology to know the problem in Car
              Module which is connected to ECU & resolved it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
