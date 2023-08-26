"use client";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Link from "next/link";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between z-10">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center
        fixed top-6 left-1/2 -translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        "
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="flex items-center">
        <Link href="" className="w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </Link>
        <Link href="" className="w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </Link>
        <Link href="" className="w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </Link>
        <Link href="" className="w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </Link>
      </div>

      {/* <Search /> */}
    </header>
  );
};

export default Header;
