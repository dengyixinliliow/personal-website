import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { FcList } from "react-icons/fc";

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
    <div className="text-fontcolor">
      <div
        className={`flex bg-transparent md:bg-secondary justify-between p-4 items-center ${
          showMenu == "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          <FcList
            size={30}
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
                className={`list-none mx-5 p-3 font-bold text-xl font-nunito ${
                  item.key == path &&
                  "bg-highlight rounded-xl px-5 border-b-4 border-neutral-600"
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
                className={`list-none my-1 p-2 font-semibold font-nunito ${
                  item.key == path &&
                  "bg-primary text-highlight rounded-md px-5"
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
