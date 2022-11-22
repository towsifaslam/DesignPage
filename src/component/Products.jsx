import React from "react";
import PageSection from "./PageSection";
import { FaRocket, FaMicrochip, FaRobot, FaSatellite } from "react-icons/fa";
function Products() {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={40} />,

      title: "reoket manufacturing",
      subtitle:
        "Learn how to make a responsive website with video background using React JS and Tailwind CSS. We will be building the project from scratch. I will walk you through installation of Tailwind which takes about 1",
    },
    {
      id: 2,
      icon: <FaMicrochip size={40} />,

      title: "reoket manufacturing",
      subtitle:
        "Learn how to make a responsive website with video background using React JS and Tailwind CSS. We will be building the project from scratch. I will walk you through installation of Tailwind which takes about 1",
    },
    {
      id: 3,
      icon: <FaRobot size={40} />,

      title: "reoket manufacturing",
      subtitle:
        "Learn how to make a responsive website with video background using React JS and Tailwind CSS. We will be building the project from scratch. I will walk you through installation of Tailwind which takes about 1",
    },
    {
      id: 4,
      icon: <FaSatellite size={40} />,

      title: "reoket manufacturing",
      subtitle:
        "Learn how to make a responsive website with video background using React JS and Tailwind CSS. We will be building the project from scratch. I will walk you through installation of Tailwind which takes about 1",
    },
  ];
  return (
    <div>
      <PageSection
        name="produdct"
        title="products"
        subtitle={`Learn how to make a responsive website with video background using React JS and Tailwind CSS. We will be building the project from scratch. I will walk you through installation of Tailwind which takes about 15 seconds. Website will look great on both desktop and mobile devices as it is responsive design. This tutorial is completely beginner friendly.`}
      >
        <div className="grid lg:grid-cols-2 gap-12 text-black">
          {products.map(({ id, icon, title, subtitle }) => {
            return (
              <div
                key={id}
                className="group bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="flex items-center justify-center duration-300 group-hover:scale-110">
                  <div className="flex text-white bg-black p-5 m-4 rounded-full">
                    {icon}
                  </div>
                </div>
                <h1 className="text-3xl lg:text-5xl my-8 capitalize">
                  {title}
                </h1>
                <p className="text-lg">{subtitle}</p>
              </div>
            );
          })}
        </div>
      </PageSection>
    </div>
  );
}

export default Products;
