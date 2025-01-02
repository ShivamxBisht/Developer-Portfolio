import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

function Feedback() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <>
      <div data-aos="fade-right ">
        <div className="max-w-[1000px] w-full mx-auto md:h-[350px]">
          <div className="sm:px-16 py-6 ml-4 sm:py-10 flex sm:mt-[100px]">
            <FaStar className="text-4xl text-blue-400 mr-2 " />
            <h1 className="text-3xl font-bold text-blue-400">Feedback</h1>
          </div>

          <div className="grid sm:grid-flow-row  gap-[50px]">
            <div className="bg-gray-100 m-6 sm:m-0 drop-shadow-xl hover:drop-shadow-2xl ease-linear duration-300 text-black rounded-sm flex flex-col justify-center p-9">
              <h1 className="text-2xl">Mr.Rahil</h1>
              <h2 className="text-xl pb-2">BMW Certified Engineer-3</h2>
              <p>
                <strong>"</strong>I'm very happy to meet with Mr.Shivam Bisht,
                Thanks to him for showing his skills,dedication in Automotive.
                It's my pleasure to seen his attractive appearance of mind
                during work platform. Ethics,Discipline like a working
                Professional. Thanks to Mr.Shivam for join us our team as a
                member of apprentice trainee.<strong>"</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
