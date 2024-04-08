import React, { ReactNode, useState } from "react";

const NavHover = () => {
  const [personalIsHovered, setPersonalIsHovered] = useState(false);
  const [businessIsHovered, setBusinessIsHovered] = useState(false);
  const [CorporateIsHovered, setCorporateIsHovered] = useState(false);

  return (
    <div className="flex">
      <div className="flex gap-10 text-md my-auto font-bold mx-10 list-none">
        <div>
          <p
            onMouseOver={() => setPersonalIsHovered(true)}
            onMouseOut={() => setPersonalIsHovered(false)}
          >
            Personal
          </p>
          {personalIsHovered && (
            <div className="flex flex-col rounded-xl shadow-xl bg-white text-md p-10 space-y-5 absolute top-20 text-slate-500">
              <li className="cursor-pointer">Digital Wallet</li>
              <li className="cursor-pointer">Financial Services</li>
              <li className="cursor-pointer">Lifestyle</li>
            </div>
          )}
        </div>
        <div>
          <p
            onMouseOver={() => setBusinessIsHovered(true)}
            onMouseOut={() => setBusinessIsHovered(false)}
          >
            Business
          </p>
          {businessIsHovered && (
            <div className="grid grid-cols-3 rounded-xl shadow-xl bg-white p-10 w-[600px] h-[450px] text-start absolute top-20">
              <div className="space-y-3">
                <h1>Payment Solutions</h1>
                <li className="text-slate-500">Payment Gateway</li>
                <li className="text-slate-500">Integrated Payment</li>
                <li className="text-slate-500">Point of Sales</li>
                <li className="text-slate-500">DANA Bisnis</li>
              </div>
              <div className="space-y-3">
                <h1>Disbursement</h1>
                <li className="text-slate-500">DANA Disbursement</li>
              </div>
              <div className="space-y-3">
                <h1>Promotion</h1>
                <li className="text-slate-500">DANA Deals</li>
                <li className="text-slate-500">Loyalty</li>
              </div>
              <div className="space-y-3">
                <h1>Others</h1>
                <li className="text-slate-500">Pricing Information</li>
                <li className="text-slate-500">Merchant Documents</li>
                <li className="text-slate-500">Contact Us</li>
                <li className="text-slate-500">API Docs</li>
              </div>
            </div>
          )}
        </div>
        <div>
          <p
            onMouseOver={() => setCorporateIsHovered(true)}
            onMouseOut={() => setCorporateIsHovered(false)}
          >
            Corporate
          </p>
          {CorporateIsHovered && (
            <div className="flex flex-col space-y-5 rounded-xl shadow-lg bg-white p-10 absolute top-20 text-slate-500">
              <li>About DANA</li>
              <li>Career</li>
              <li>Newsroom</li>
              <li>Business Group</li>
              <li>Investor Relations</li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavHover;
