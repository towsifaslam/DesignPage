import React from "react";

function Footer() {
  const menu = [
    {
      id: 1,
      title: "company",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
    {
      id: 2,
      title: "Support",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
    {
      id: 3,
      title: "Stuff",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
    {
      id: 4,
      title: "Developer API",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
  ];
  return (
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl  mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => {
            return (
              <div>
                <h1 className="text-lg font-bold">{title}</h1>
                <ul className="mt-1">
                  {subMenu.map(({ id, title }) => {
                    return <li key={id}>{title}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="my-12 text-center text-sm   text-green-600">
          Copy right 2022 anton LLC
        </p>
      </div>
    </div>
  );
}

export default Footer;
