import Image from "next/image";
import React from "react";
import logoDana from "@/lib/images/logoDana.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="relative flex h-16 w-32 items-center">
      <Link href={"/"}>
        <Image
          className="h-auto w-auto"
          priority={true}
          src={logoDana}
          alt="/"
        />
      </Link>
    </div>
  );
};

export default Logo;
