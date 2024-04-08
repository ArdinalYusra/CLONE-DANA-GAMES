import Image from "next/image";
import React from "react";
import Dana from "@/lib/images/Dana.png";
import logo404 from "@/lib/images/logo404.png";
import NavHover from "@/components/404/NavHover";

const NavLarge404 = () => {
  return (
    <div className="w-full px-10 py-5 items-center">
      <div className="flex my-auto justify-between p-3 w-full relative">
        <div className="flex">
          <Image
            src={Dana}
            alt="/"
            height={90}
            width={150}
            className="cursor-pointer"
          />
          <div className="flex my-auto">
            <NavHover />
          </div>
        </div>
        <div className="flex">
          <Image
            src={logo404}
            alt="/"
            height={50}
            width={75}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default NavLarge404;
