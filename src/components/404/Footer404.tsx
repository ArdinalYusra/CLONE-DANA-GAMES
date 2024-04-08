import Image from "next/image";
import React from "react";
import DownloadLogo from "@/lib/images/DownloadLogo.png";
import KominfoLogo from "@/lib/images/KominfoLogo.png";
import logoDana from "@/lib/images/logoDana.png";
import { IoIosArrowRoundUp } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer404 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col p-5 bg-blue-500 md:bg-blue-600">
      <div className="flex relative -top-10 md:-right-48 lg:-right-72 justify-center">
        <button
          onClick={scrollToTop}
          className="flex bg-white text-blue-500 text-2xl font-bold border rounded-full border-blue-500 py-2 px-12"
        >
          Back to top
          <IoIosArrowRoundUp size={30} color="blue" className="ml-2" />
        </button>
      </div>
      <div className="min-w-full p-5">
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 text-white gap-5 w-full mt-5">
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Payment Solution
            </h1>
            <li>Payment Gateway</li>
            <li>Payment API</li>
            <li>Point of Sales</li>
            <li>DANA Bisnis</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Disbursement
            </h1>
            <li>DANA Disbursement</li>
            <li>Enterprise Wallet</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8  font-bold border-white my-3">
              Promotion
            </h1>
            <li>DANA Deals</li>
            <li>Loyalty</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Enterprise Resource
            </h1>
            <li>Pricing Information</li>
            <li>Merchant Resource</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <hr className="border-b border-slate-50 w-full my-10" />
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 text-white gap-10 w-full mt-5">
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8  font-bold border-white my-3">
              Personal
            </h1>
            <li>Digital Wallet</li>
            <li>Investment</li>
            <li>Lifestyle</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Corporation
            </h1>
            <li>About</li>
            <li>Career</li>
            <li>Newsroom</li>
            <li>Investor Relation</li>
            <li>Business Group</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Others
            </h1>
            <li>Games</li>
            <li>Promo</li>
          </ul>
          <ul className="flex flex-col space-y-3 text-sm md:text-lg">
            <h1 className="underline underline-offset-8 font-bold border-white my-3">
              Help
            </h1>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-slate-50 w-full my-10" />
      <div className="flex flex-col min-w-full text-white space-y-5">
        <div className="md:flex md:items-center md:gap-10">
          <p className="text-xl">Download DANA App</p>
          <div>
            <Image src={DownloadLogo} alt="" height={200} width={200} />
          </div>
        </div>
        <div className="md:flex md:items-center md:gap-10">
          <p>DANA Indonesia is registered and monitored by</p>
          <div className="flex w-full p-5">
            <Image src={KominfoLogo} alt="" height={100} width={100} />
          </div>
        </div>
        <hr className="border-b border-slate-50 w-full mb-10" />
        <div className="md:flex md:items-center lg:justify-around md:gap-10">
          <div>
            <Image src={logoDana} alt="" height={100} width={100} />
          </div>
          <div className="my-5 lg:flex">
            <p>© 2023 DANA-PT.Espay Debit Indonesia Koe.</p>
            <p>All Right Reserved.</p>
          </div>
          <div className="flex py-5 gap-3">
            <FaFacebook color="white" size={25} />
            <FaInstagram color="white" size={25} />
            <FaTwitter color="white" size={25} />
            <FaYoutube color="white" size={25} />
            <FaLinkedin color="white" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer404;
