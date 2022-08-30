import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Experience",
      key: "/experience",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const path = window.location.pathname;

  return (
    <div className="text-primary">
      <div
        className={`flex bg-secondary justify-between p-4 items-center shadow-lg ${
          showMenu == "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <h1 className="text-4xl font-semibold font-dynapuff">
            Yixin Deng (Emily)
          </h1>
          <CgMenuRound 
            onClick={() => {
              if (showMenu == "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="md:flex lg:hidden xl:hidden 2xl:hidden 3xl:hidden cursor-pointer"
          />
        </div>
        <div className="flex md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-2 font-semibold font-barlow ${
                  item.key == path && "bg-primary text-secondary rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={`md:flex mt-5 items-start w-full flex-col lg:hidden xl:hidden 2xl:hidden 3xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none my-1 p-2 font-semibold font-barlow ${
                  item.key == path && "bg-primary text-secondary rounded-md px-5"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
