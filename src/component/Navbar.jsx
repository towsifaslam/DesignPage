import React from "react";
import GradientBtn from "./GradientBtn";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar({ isMenushown, setIsMenuShown }) {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer API",
    },
    {
      id: 4,
      link: "Customers",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <>
      <div className="absolute w-full h-25  text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full ">
          <div>
            <h1 className=" text-blue-400 tracking-widest text-3xl">Anton</h1>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex flex-row">
              {links.map(({ id, link }) => {
                return (
                  <li
                    key={id}
                    className="p-4 uppercase duration-200 hover:text-blue-400 cursor-pointer"
                  >
                    <Link to={link} smooth duration={500}>
                      {" "}
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <GradientBtn clasName="ml-4 capitalize" title="get anton" />
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenushown)}
            className="block md:hidden cursor-pointer"
          >
            {isMenushown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 md:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenushown ? "top-24 rounded-b-2xl opacity-95 " : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => {
            return (
              <li className="uppercase p-4 cursor-pointer" key={id}>
                {
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                }
              </li>
            );
          })}
          <GradientBtn title="get anton" clasName="mt-10 capitalize" />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
