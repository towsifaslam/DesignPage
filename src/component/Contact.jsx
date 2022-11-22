import React from "react";
import PageSection from "./PageSection";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import img from "../asset/Contac.JPG";
import ContackFrom from "./ContackFrom";
function Contact() {
  return (
    <div>
      <PageSection
        name="Contact"
        title="Contact"
        subtitle={`Learn how to make a responsive website with video background using React JS  project from scratch. I will walk you through  `}
      >
        <div className="flex flex-col lg:flex-row gap-7 mt-4">
          {/* left */}
          <div className="w-ful lg:w-1/2 h-full p-4 flex flex-col justify-center items-center">
            <img
              src={img}
              alt=""
              className="rounded-full object-cover w-72 h-72 shadow-md shadow-green-500"
            />
            <p className="py-12 max-w-md">
              off what no stronger that , og help this is tapping is door hear
              i,Rare in the tossed and him has , and hesitating i thy burned
              into or.
            </p>
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-green-500 p-4 hover:scale-105 duration-200 cursor-pointer">
                <FaLinkedin size={25} />
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-green-500 p-4 hover:scale-105 duration-200 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
            </div>
          </div>
          {/* rign */}
          <div className="w-full lg:w-1/2 h-full rounded-xl p-4  ">
            <ContackFrom />
          </div>
        </div>
      </PageSection>
    </div>
  );
}

export default Contact;
