import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImBooks } from "react-icons/im";
import { FaCaretRight } from "react-icons/fa";

function Education() {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 transform -skew-y-6 bg-blue-500"></div>
        <div className="relative px-8 py-12">
          <div
            data-aos="fade-up"
            className="max-w-[1100px] w-full sm:h-[300px] mx-auto"
          >
            <div className=" py-6 ml-4 sm:py-10 flex sm:mt-[100px] md:mt-0">
              <ImBooks className="text-4xl text-black mr-2" />
              <h1 className="text-3xl font-bold text-black">Education</h1>
            </div>
            <div className="flex gap-4">
              <FaCaretRight />
              <h1 className="text-xl sm:text-2xl relative bottom-1 font-semibold">
                DPG Institute of Technology & Management,Gurgoan sec-34 @ MDU
              </h1>
            </div>
            <h2 className="text-xl sm:text-2xl pl-[30px]">
              BTech-Mechanical Engineering (2020-2024)
              <br />
              GPA - 7.2
            </h2>
            <br />
            <div className="flex gap-4">
              <FaCaretRight />
              <h1 className="text-xl sm:text-2xl relative bottom-1 font-semibold">
                K.L.K Saraswati Bal Mandir,Mehrauli,New delhi-110030 @ CBSE
              </h1>
            </div>
            <h2 className="text-xl sm:text-2xl pl-[30px]">
              12th Grade (2019-20) - 74.6%
              <br />
              10th Grade (2017-18) - 78%
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
