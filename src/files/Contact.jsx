import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

function Contact() {
  return (
    <>
      <div id="contact-section" className="bg-blue-500 p-4 mt-[100px] relative">
        <div className="max-w-[900px] w-full h-[250px] mx-auto">
          <div className="flex flex-col text-white gap-4">
            <h1 className="text-2xl md:justify-normal justify-center flex font-semibold">
              Have any Question?
            </h1>
            <h2 className="text-xl md:justify-normal justify-center flex">
              Simply Reach out to me!
            </h2>
            <div className="flex gap-4">
              <MdEmail className="sm:bg-black sm:text-4xl text-2xl sm:rounded-full sm:p-2" />
              <p className="text-xl hover:underline">
                bishtshivam2562002@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <FaPhoneSquareAlt className="sm:bg-black sm:text-4xl text-2xl sm:rounded-full sm:p-2" />
              <p className="text-xl">+91 9560165782</p>
            </div>
            <div className="flex gap-4">
              <FaLocationDot className="sm:bg-black sm:text-4xl text-2xl sm:rounded-full sm:p-2" />
              <p className="text-xl">India,South delhi-110030</p>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-white justify-center flex hover:underline">
          Made with{" "}
          <span className="flex">
            <TbBrandVite className="font-bold text-2xl m-1" />+
            <FaReact className="font-bold text-2xl m-1" />
          </span>{" "}
          by Shivam
        </h1>
      </div>
    </>
  );
}

export default Contact;
