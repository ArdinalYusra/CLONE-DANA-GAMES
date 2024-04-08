"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Navbar/Logo";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { MdCancel, MdHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoGameController, IoMenu } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { NavLinks } from "@/constants";
import { RiNewspaperLine } from "react-icons/ri";
import { LiaNewspaperSolid } from "react-icons/lia";
import { SiPocket } from "react-icons/si";

const Navbar = () => {
  const [openToggle, setOpenToggle] = useState<boolean | null>(false);
  const [search, setSearch] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenToggle(null);
    };

    window.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.addEventListener("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const toggle = () => {
    setOpenToggle(!openToggle);
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
                <Link key={link.title} href={link.href}>
                  <button
                    className={`hidden lg:flex flex-row text-lg h-16 items-center w-auto text-center text-wrap ${
                      pathname === link.href &&
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
                {openToggle ? (
                  <MdCancel color="white" size={35} />
                ) : (
                  <IoMenu color="white" size={35} />
                )}
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
          <div
            className={` ${
              openToggle ? "visible fixed z-50 top-0 left-0 h-screen" : "h-0 invisible"
            } "mt-20 bg-slate-800 flex-col w-screen text-white transition-all duration-300 ease-out"
            } 
            `}
          >
            <div className="flex p-5 bg-gradient-to-b from-blue-700 to-blue-500 justify-between items-center">
              Masuk dengan akun DANA kamu.
              <Link
                href={"/login"}
                className="bg-white rounded-md text-blue-800 px-3 py-3"
              >
                <button>MASUK</button>
              </Link>
            </div>
            <div className="p-5">
              <p>Menu</p>
              <div className="flex flex-col border-white px-5 py-3 ">
                <Link href="/" className="border-b py-2 flex gap-3">
                  <MdHome size={25} />
                  <button>Beranda</button>
                </Link>
                <Link href={"/games"} className="border-b py-2 flex gap-3">
                  <IoGameController size={23} />
                  <button>Game</button>
                </Link>
                <Link
                  href={"/voucherdigital"}
                  className="border-b py-2 flex gap-3"
                >
                  <RiNewspaperLine size={23} />
                  <button>Voucher Digital</button>
                </Link>
                <Link
                  href={"/newsdanevents"}
                  className="border-b py-2 flex gap-3"
                >
                  <LiaNewspaperSolid size={23} />
                  <button>News & Events</button>
                </Link>
              </div>
              <p className="py-3">Fitur</p>
              <ul className="flex flex-col border-white px-5">
                <Link href={"/"} className="border-b py-2 flex gap-3">
                  <RiNewspaperLine size={23} />
                  <button>Riwayat Transaksi</button>
                </Link>
                <Link href={"/"} className="border-b py-2 flex gap-3">
                  <SiPocket size={23} />
                  <button>Pocket</button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
