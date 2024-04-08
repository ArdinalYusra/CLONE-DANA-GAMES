import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const NotFoundNav = () => {
  const [personalOpen, setPersonalOpen] = useState(true);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);

  const togglePersonalNav = () => {
    setPersonalOpen(!personalOpen);
    setBusinessOpen(false);
    setCorporateOpen(false);
  };

  const toggleBusinessNav = () => {
    setBusinessOpen(!businessOpen);
    setPersonalOpen(false);
    setCorporateOpen(false);
  };

  const toggleCorporateNav = () => {
    setCorporateOpen(!corporateOpen);
    setPersonalOpen(false);
    setBusinessOpen(false);
  };

  return (
    <div className="h-screen w-screen m-auto bg-slate-200">
      <div>
        <ul className="flex gap-5 mx-5 md:mx-10 my-10 text-lg font-bold focus:bg-slate-100">
          <li>
            <button
              onClick={togglePersonalNav}
              className="px-2 py-1 focus:bg-slate-100  focus:rounded-full "
            >
              Personal
            </button>
          </li>
          <li>
            <button
              onClick={toggleBusinessNav}
              className="px-2 py-1 focus:bg-slate-100 focus:rounded-full "
            >
              Business
            </button>
          </li>
          <li>
            <button
              onClick={toggleCorporateNav}
              className="px-2 py-1  focus:bg-slate-100 rounded-full "
            >
              Corporate
            </button>
          </li>
        </ul>
        <div className="mx-5 md:mx-10">
          {personalOpen && (
            <ul className=" text-slate-500">
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Digital Wallet
              </li>
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Financial Services
              </li>
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Lifestyle
              </li>
            </ul>
          )}
          {businessOpen && (
            <div className="flex flex-col space-y-5 w-full">
              <div className="space-y-3">
                <Button className="flex justify-between w-full p-1 text-xl font-bold">
                  Payment Solutions
                </Button>
                <ul className="ml-7 cursor-pointer">
                  <li className="text-slate-500  hover:text-slate-400">
                    Payment Gateway
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    Integrated Payment
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    Point of Sales
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    DANA Bisnis
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button className="flex justify-between w-full p-1 text-xl font-bold">
                  Disbursement
                </Button>
                <ul className="ml-7 cursor-pointer">
                  <li className="text-slate-500  hover:text-slate-400">
                    DANA Disbursement
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button className="flex justify-between w-full p-1 text-xl font-bold">
                  Promotion
                </Button>
                <ul className="ml-7">
                  <li className="text-slate-500  hover:text-slate-400">
                    DANA Deals
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    Loyalty
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Button className="flex justify-between w-full p-1 text-xl font-bold">
                  Others
                </Button>
                <ul className="ml-7">
                  <li className="text-slate-500  hover:text-slate-400">
                    Pricing Information
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    Merchant Documents
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    Contact Us
                  </li>
                  <li className="text-slate-500  hover:text-slate-400">
                    API Docs
                  </li>
                </ul>
              </div>
            </div>
          )}
          {corporateOpen && (
            <ul className="text-y-10-5 text-slate-500">
              <li className="my-3 md:text-lg  hover:text-slate-400">
                About DANA
              </li>
              <li className="my-3 md:text-lg  hover:text-slate-400">Career</li>
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Newsroom
              </li>
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Business Group
              </li>
              <li className="my-3 md:text-lg  hover:text-slate-400">
                Investor Relations
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFoundNav;
