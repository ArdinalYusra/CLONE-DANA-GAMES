import React from "react";

const PurchaseListItems = [
  {
    id: 1,
    list: "5 Diamonds",
    price: "Rp1.500",
  },
  {
    id: 2,
    list: "10 Diamonds",
    price: "Rp2.850",
  },
  {
    id: 3,
    list: "14 Diamonds",
    price: "Rp3.800",
  },
  {
    id: 4,
    list: "18 Diamonds",
    price: "Rp4.750",
  },
  {
    id: 5,
    list: "36 Diamonds",
    price: "Rp9.500",
  },
  {
    id: 6,
    list: "74 Diamonds",
    price: "Rp19.000",
  },
  {
    id: 7,
    list: "Weekly Diamond Pass",
    price: "Rp27.550",
  },
  {
    id: 8,
    list: "222 Diamonds",
    price: "Rp57.000",
  },
  {
    id: 9,
    list: "370 Diamonds",
    price: "Rp95.000",
  },
  {
    id: 10,
    list: "Twilight Pass",
    price: "Rp150.000",
  },
  {
    id: 11,
    list: "966 Diamonds",
    price: "Rp237.500",
  },
  {
    id: 12,
    list: "2010 Diamonds",
    price: "Rp475.000",
  },
  {
    id: 13,
    list: "4830 Diamonds",
    price: "Rp1.140.000",
  },
];

const PurchaseList = () => {
  return (
    <div>
      {" "}
      <div className="w-full grid grid-rows-7 grid-cols-2 text-sm p-3 gap-x-5 gap-y-6">
        {PurchaseListItems.map((item) => (
          <div key={item.id} className="flex-center">
            <button className="flex flex-col bg-slate-900 border h-24 md:h-20 w-40 md:w-32 p-3 rounded-sm focus:bg-blue-500">
              <li className="text-slate-100">{item.list}</li>
              <li className="text-orange-500">{item.price}</li>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseList;
