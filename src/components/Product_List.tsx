import Link from "next/link";
import { ProductListComponentProps, ProductListProps } from "@/types";

const Product_List = ({ children }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-4 px-3 gap-3">
      {children}
    </div>
  );
};

export default Product_List;

export const Product_List_Component = ({
  children,
  href,
}: ProductListComponentProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export const Product_Components = ({ children }: ProductListProps) => {
  return (
    <div className="bg-[#151131]">
      <div className="wrapper flex-center bg-[#151131] py-6">{children}</div>
    </div>
  );
};
