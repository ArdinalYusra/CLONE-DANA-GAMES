import Link from "next/link";
import { Product_Dashboard } from "@/types";

const Product_Dahsboard = ({ children, title, href }: Product_Dashboard) => {
  return (
    <div className="flex flex-col gap-3 px-2">
      <div className="flex-between">
        <p className="font-semibold text-2xl">{title}</p>
        <Link href={href}>
          <button className="rounded-md bg-blue-500 p-2">LIHAT SEMUA</button>
        </Link>
      </div>
      <div className="flex flex-row gap-2 overflow-auto">{children}</div>
    </div>
  );
};

export default Product_Dahsboard;
