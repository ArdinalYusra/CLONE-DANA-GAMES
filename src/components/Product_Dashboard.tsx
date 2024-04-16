import { ProductListProps } from "@/types";

const Product_Dahsboard = ({ children }: ProductListProps) => {
  return (
    <div className="flex flex-col gap-3 px-2">
      <div className="flex flex-row gap-2 overflow-auto">{children}</div>
    </div>
  );
};

export default Product_Dahsboard;
