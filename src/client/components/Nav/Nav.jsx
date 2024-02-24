"use client";
import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Nav = (props) => {
  const router = useRouter();
  const navTextColor = props.darkMode ? "text-white" : "text-black";
  const [navOn, setNavOn] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="fixed top-0 left-0 z-[100] bg-transparent">
      <div
        className={`min-h-12 w-screen flex items-center justify-between bg-transparent px-4 md:px-8 z-[200] ${
          scrollingUp ? (navOn ? "text-white" : "text-black") : "hidden"
        }`}
      >
        <a href="/admin"><h1 className="nav-logo z-[100] text-2xl font-bold">ANSHU</h1></a>
        <div
          className="nav-menu-button z-[100] cursor-pointer m-6"
          onClick={() => setNavOn((prev) => !prev)}
        >
          <div
            className={
              "m-2 p-4 rounded-full text-xl shadow-around " +
              (navOn ? " text-black bg-white" : " text-white bg-black")
            }
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div
        className={
          "absolute z-[90] top-0 right-0 nav-screen bg-black text-white " +
          (navOn ? "nav-screen-on" : "nav-screen-off")
        }
      >
        <div className="relative z-[100] m-8 h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-between h-8/12 w-full">
            <a
              href="/"
              className="py-2 px-4 md:text-2xl my-2 hover:bg-black  hover:text-white hover:scale-110 rounded-xl transition-all duration-300"
            >
              <h1 className="">Home</h1>
            </a>
            <a
              href="/projects"
              className="py-2 px-4 md:text-2xl my-2 hover:bg-black  hover:text-white hover:scale-110 rounded-xl transition-all duration-300"
            >
              <h1 className="">Projects</h1>
            </a>
            <a
              href="/gallery"
              className="py-2 px-4 md:text-2xl my-2 hover:bg-black  hover:text-white hover:scale-110 rounded-xl transition-all duration-300"
            >
              <h1 className="">Gallery</h1>
            </a>
            <a
              href="/booking"
              className="py-2 px-4 md:text-2xl my-2 hover:bg-black  hover:text-white hover:scale-110 rounded-xl transition-all duration-300"
            >
              <h1 className="">Book Photoshoot</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
