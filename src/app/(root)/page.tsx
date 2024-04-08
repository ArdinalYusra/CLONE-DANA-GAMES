import SlideShow from "@/components/Navbar/SlideShow";
import Image from "next/image";
import Link from "next/link";
import {
  GamesItems,
  ImagesEvent,
  PalingPopuler,
  VoucherDigitalItems,
} from "@/constants";
import Product_Dahsboard from "@/components/Product_Dashboard";
import { ProductListComponentProps } from "@/types";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#151131] text-white">
        <div className="wrapper">
          <SlideShow autoSlides={true} autoSlideInterval={3000} />
        </div>
        <div className="wrapper flex flex-col py-5 gap-5">
          <Product_Dahsboard title="Paling Populer" href="/games">
            {PalingPopuler.map((item, index) => {
              return (
                <List_Product_Dahsboard key={index} href={"/games/purchase"}>
                  <Image src={item.url} alt="" height={350} width={350} />
                  <p className="text-wrap">{item.title}</p>
                </List_Product_Dahsboard>
              );
            })}
          </Product_Dahsboard>
          <Product_Dahsboard title="Games" href="/games">
            {GamesItems.slice(0, 4).map((item, index) => {
              return (
                <List_Product_Dahsboard key={index} href={"/games/purchase"}>
                  <Image src={item.url} alt="" height={350} width={350} />
                  <p className="text-wrap">{item.title}</p>
                </List_Product_Dahsboard>
              );
            })}
          </Product_Dahsboard>
          <Product_Dahsboard title="Voucher Digital" href="/voucherdigital">
            {VoucherDigitalItems.slice(0, 4).map((item, index) => {
              return (
                <List_Product_Dahsboard key={index} href={"/games/purchase"}>
                  <Image src={item.url} alt="" height={350} width={350} />
                  <p className="text-wrap">{item.title}</p>
                </List_Product_Dahsboard>
              );
            })}
          </Product_Dahsboard>
          <div className="space-y-5 px-2">
            <div className="flex-between">
              <p className="font-semibold text-2xl">News & Events</p>
              <Link href={"/newsdanevents"}>
                <button className="rounded-md bg-blue-500 p-2">
                  LIHAT SEMUA
                </button>
              </Link>
            </div>
            <div className="flex flex-row gap-3 overflow-auto">
              {ImagesEvent.slice(0, 3).map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={"/games/purchase"}
                    className="flex flex-col min-h-60 min-w-60"
                  >
                    <Image src={item.url} alt="" height={350} width={350} />
                    <p className="text-wrap">{item.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

function List_Product_Dahsboard({ children, href }: ProductListComponentProps) {
  return (
    <div className="flex flex-col min-h-40 min-w-40">
      <Link href={href}>{children}</Link>
    </div>
  );
}
