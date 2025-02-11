"use client";
import {
  Briefcase,
  Cog,
  HomeIcon,
  MenuIcon,
  MessageCircle,
  MessageSquare,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses: string[] = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-24",
        "right-10",
        "flex-col",
        "gap-5",
        "bg-transparent",
        "bg-secondary/70",
        "py-8",
        "px-10",
        "border",
        "border-neutral/70",
        "rounded-lg",
        "justify-between",
      ];
    } else {
      menuClasses = ["hidden", "md:flex", "justify-between"];
    }
    return menuClasses.join(" ");
  }

  const navItems = [
    {
      label: "Home",
      icon: <HomeIcon />,
      link: "/",
    },

    {
      label: "Services",
      icon: <Briefcase />,
      link: "#services",
    },
    {
      label: "Features",
      icon: <Sparkles />,
      link: "#features",
    },
    {
      label: "Testimonials",
      icon: <MessageCircle />,
      link: "#testimonials",
    },
  ];
  return (
    <nav className=" flex md:max-w-4xl  space-y-3 fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-neutral/50 rounded-2xl dark:bg-transparent backdrop-blur-md bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-4  items-center justify-center space-x-4 ">
      <div className=" flex justify-between items-center max-w-4xl w-full ">
        <ul className={`${getMenuClasses()} justify-between gap-10`}>
          {navItems.map((nav) => (
            <li key={nav.label}>
              <a
                href={`${nav.link}`}
                className="flex items-center  gap-2 text-neutral/80"
              >
                <span>{nav.icon}</span>
                <span className="font-bold ">{nav.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="">
          <button className="capitalize bg-neutral/90 px-6 py-2 flex justify-self-end  text-secondary rounded-lg hover:bg-secondary hover:text-neutral transition-colors duration-300 eas ease-in-out">
            book a free call
          </button>
        </div>
        <div className="md:hidden flex pr-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-neutral/70 p-1 rounded-full"
          >
            {isOpen ? <X size={30} /> : <MenuIcon size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
