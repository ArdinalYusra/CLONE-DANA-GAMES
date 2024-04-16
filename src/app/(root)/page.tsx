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
          <div className="flex-between">
            <p className="font-semibold text-2xl">Paling Populer</p>
            <Link href={"/"}>
              <button className="rounded-md font-semibold text-sm bg-blue-500 p-2">
                LIHAT SEMUA
              </button>
            </Link>
          </div>
          <Product_Dahsboard>
            {PalingPopuler.map((item, index) => {
              return (
                <List_Product_Dahsboard key={index} href={"/games/purchase"}>
                  <Image src={item.url} alt="" height={350} width={350} />
                  <p className="text-wrap">{item.title}</p>
                </List_Product_Dahsboard>
              );
            })}
          </Product_Dahsboard>
          <div className="flex-between">
            <p className="font-semibold text-2xl">Games</p>
            <Link href={"/games"}>
              <button className="rounded-md font-semibold text-sm bg-blue-500 p-2">
                LIHAT SEMUA
              </button>
            </Link>
          </div>
          <Product_Dahsboard>
            {GamesItems.slice(0, 4).map((item, index) => {
              return (
                <List_Product_Dahsboard key={index} href={"/games/purchase"}>
                  <Image src={item.url} alt="" height={350} width={350} />
                  <p className="text-wrap">{item.title}</p>
                </List_Product_Dahsboard>
              );
            })}
          </Product_Dahsboard>
          <div className="flex-between">
            <p className="font-semibold text-2xl">Digital Voucher</p>
            <Link href={"/voucherdigital"}>
              <button className="rounded-md font-semibold text-sm bg-blue-500 p-2">
                LIHAT SEMUA
              </button>
            </Link>
          </div>
          <Product_Dahsboard>
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
