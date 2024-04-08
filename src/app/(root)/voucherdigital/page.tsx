import Product_List, {
  Product_Components,
  Product_List_Component,
} from "@/components/Product_List";
import { VoucherDigitalItems } from "@/constants";
import Image from "next/image";

const Voucher_Digital = () => {
  return (
    <Product_Components>
      <Product_List>
        {VoucherDigitalItems.map((item, index) => {
          return (
            <Product_List_Component href="/games/purchase" key={index}>
              <Image src={item.url} height={300} width={400} alt="/" />
              <p className="text-md flex text-wrap text-white">{item.title}</p>
            </Product_List_Component>
          );
        })}
      </Product_List>
    </Product_Components>
  );
};

export default Voucher_Digital;
