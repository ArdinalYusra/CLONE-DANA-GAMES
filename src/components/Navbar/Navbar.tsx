"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Navbar/Logo";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoGameController, IoMenu } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { NavLinks, NavLinks_Mobile } from "@/constants";
import { RiNewspaperLine } from "react-icons/ri";
import { LiaNewspaperSolid } from "react-icons/lia";
import { SiPocket } from "react-icons/si";
import Navlinks_Mobile from "./Navlinks_Mobile";

const Navbar = () => {
  const [openToggle, setOpenToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = usePathname();

  const toggle = () => {
    setOpenToggle(!openToggle);

    // document.body.style.overflow = openToggle ? "auto" : "hidden";
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className=" bg-[#201343]">
      <div>
        <div className="wrapper flex items-center justify-between px-3 h-20 w-full">
          <div className="flex items-center text-slate-200 ">
            <Logo />
            <div className="hidden lg:flex flex-row text-lg mx-5 py-1 gap-5 items-center min-w-[450px]">
              {NavLinks.map((link) => (
                <Link key={link.title} href={link.path}>
                  <button
                    className={`hidden lg:flex flex-row text-lg h-16 items-center w-auto text-center text-wrap ${
                      pathname === link.path &&
                      "border-b border-solid border-blue-700"
                    }`}
                  >
                    {link.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex my-auto ml-5 lg:hidden">
              <button onClick={handleSearch}>
                <CiSearch color="white" size={25} />
                {search && (
                  <div className="fixed z-[50] flex items-center w-full bg-[#201343] h-20 top-0 left-0 px-5 py-2">
                    <button onClick={handleSearch}>
                      <GoArrowLeft size={30} color="white" className="mx-5" />
                    </button>
                    <input
                      type="text"
                      placeholder="Lagi cari app atau game?"
                      className="flex py-2 px-3 w-full mr-5 rounded-md"
                    />
                  </div>
                )}
              </button>
            </div>
            <div className="hidden lg:flex absolute ml-2">
              <CiSearch color="black" size={25} />
            </div>

            <input
              className="hidden lg:flex rounded-md pl-10 py-3 w-60 max-w-80"
              type="text"
              placeholder="Lagi cari app atau game?"
            />
            <div className="lg:hidden py-auto mt-2">
              <button onClick={toggle}>
                <IoMenu color="white" size={35} />
              </button>
            </div>
            {openToggle ? null : (
              <Link
                href={"/login"}
                className="bg-blue-800 flex px-4 py-3 text-white rounded-md"
              >
                <button>MASUK</button>
              </Link>
            )}
          </div>
          <div className={`${openToggle ? "visible" : "hidden"}`}>
            <div className="lg:hidden fixed z-50 top-0 left-0 h-screen w-screen bg-slate-800 text-white">
              <div className="flex-between py-2 px-5 bg-[#201343]">
                <Logo />
                <button onClick={toggle}>
                  <IoClose size={30} color="white" />
                </button>
              </div>
              <div className="flex p-5 bg-gradient-to-b from-blue-700 to-blue-500 justify-between items-center">
                Masuk dengan akun DANA kamu.
                <Link
                  href={"/login"}
                  className="bg-white rounded-md text-blue-800 px-3 py-3"
                >
                  <Link href={"/login"} className="font-semibold">
                    MASUK
                  </Link>
                </Link>
              </div>
              <div className="p-5">
                <h1>Menu</h1>
                <div className="flex flex-col border-white px-5 py-3">
                  {NavLinks_Mobile.slice(0, 4).map((link, idx) => (
                    <Navlinks_Mobile
                      href={link.path}
                      key={idx}
                      className={`${pathname === link.path && "text-blue-700"}}`}
                    >
                      <link.icon />
                      {link.title}
                    </Navlinks_Mobile>
                  ))}
                </div>
                <h1 className="py-3">Fitur</h1>
                <div className="flex flex-col border-white px-5">
                  {NavLinks_Mobile.slice(4).map((link, idx) => (
                    <Navlinks_Mobile href={link.path} key={idx}>
                      <span>
                        <link.icon />
                      </span>
                      <span>{link.title}</span>
                    </Navlinks_Mobile>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
