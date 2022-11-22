import React from "react";
import PageSection from "./PageSection";
import {
  FaFacebook,
  FaGoogle,
  FaAmazon,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
function Customer() {
  const facts = [
    {
      id: 1,
      title: "$743m",
      subtitle: "was and broken pallas rustline thy .",
    },
    {
      id: 2,
      title: "57%",
      subtitle: "was and broken pallas rustline thy .",
    },
    {
      id: 3,
      title: "3 Months faster",
      subtitle: "was and broken pallas rustline thy .",
    },
    {
      id: 1,
      title: "7 new countries",
      subtitle: "was and broken pallas rustline thy .",
    },
  ];
  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "Facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "Amazon",
    },
    {
      id: 3,
      icon: <FaTwitter size={25} />,
      title: "Twittter",
    },
    {
      id: 3,
      icon: <FaLinkedin size={25} />,
      title: "Linkedin",
    },
  ];
  return (
    <div>
      <PageSection
        name="Customers"
        title="Customers"
        subtitle={`Learn how to make a responsive website with video background using React JS  project from scratch. I will walk you through  `}
      >
        <>
          <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
            {facts.map(({ id, title, subtitle }) => {
              return (
                <div
                  key={id}
                  className="odd:bg-blue-400 even:bg-orange-400 text-black p-4 odd:rounded-lg"
                >
                  <h1 className="text-3xl font-bold mb-2">{title}</h1>
                  <p>{subtitle}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
            {companies.map(({ id, icon, title }) => {
              return (
                <div
                  className="flex items-center capitalize p-4 rounded-lg"
                  key={id}
                >
                  {icon}
                  <p className="ml-2">{title}</p>
                </div>
              );
            })}
          </div>
        </>
      </PageSection>
    </div>
  );
}

export default Customer;
