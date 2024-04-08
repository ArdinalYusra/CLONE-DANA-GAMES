"use client";

import React, { useState } from "react";
import danaErrorHandling from "@/lib/images/danaErrorHandling.png";
import Dana from "@/lib/images/Dana.png";
import NavLarge404 from "@/components/404/NavLarge404";
import Image from "next/image";
import NotFoundNav from "@/components/404/NotFoundNav";
import Footer from "@/components/404/Footer404";
import Footer404 from "@/components/404/Footer404";
import { IoIosArrowForward } from "react-icons/io";

const Custom404 = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col bg-slate-200 md:bg-slate-100 lg:bg-white">
      <div className="flex lg:hidden justify-between w-full p-5 md:px-10">
        <div className="flex ">
          <Image src={Dana} alt="/" height={100} width={150} />
        </div>
        <div className="text-3xl flex">
          <button onClick={toggle}>{open ? "x" : "="}</button>
        </div>
      </div>
      {open && <NotFoundNav />}
      <div className="hidden lg:block">
        <NavLarge404 />
      </div>
      <div className="flex flex-col md:flex-row mt-10 lg:mb-16 px-10 items-center justify-center md:justify-between gap-10">
        <div className="mx-auto">
          <Image src={danaErrorHandling} alt="/" height={600} width={600} />
        </div>
        <div className="justify-center md:justify-normal">
          <div className="text-center md:text-start my-3">
            <p className="text-blue-500 text-4xl md:text-5xl">
              Whoops, you seems lost!
            </p>
            <p className="my-5 text-slate-400 md:text-2xl">
              Let&apos;s check the link and try again
            </p>
          </div>
          <div className="flex justify-center md:justify-normal">
            <button className="flex bg-blue-500 rounded-lg p-3 mb-8 text-lg text-white">
              Go back to Home
              <IoIosArrowForward size={20} color="white" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer404 />
      </div>
    </div>
  );
};

export default Custom404;
