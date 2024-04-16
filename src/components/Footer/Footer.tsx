import Image from "next/image";
import logoDana from "@/public/images/logoDana.png";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#201343]">
      <div className="wrapper flex-center">
        <div className="my-10 lg:grid lg:grid-cols-2 lg:justify-between lg:w-full lg:m-10 ">
          <Link href="">
            <Image
              className="mx-auto lg:ml-0 h-auto w-auto "
              src={logoDana}
              alt="/"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex flex-col text-center l text-white gap-5 p-7 lg:flex-row lg:justify-end  lg:p-0 lg:text-right">
            <Link href="/games">Top Up Games</Link>
            <Link href="/digitalvoucher">Digital Voucher</Link>
            <Link href="/">Back to dana.id</Link>
          </div>
          <div className="flex justify-center p-7 gap-3 lg:col-start-2 lg:p-0 lg:mt-12  lg:relative lg:pb-1 lg:justify-end">
            <Link href="">
              <FaTwitter color="white" size={25} />
            </Link>
            <Link href="">
              <FaFacebook color="white" size={25} />
            </Link>
            <Link href="">
              <FaInstagram color="white" size={25} />
            </Link>
            <Link href="">
              <FaYoutube color="white" size={25} />
            </Link>
          </div>
          <div className="p-7 text-center lg:text-left lg:col-start-1 lg:absolute  lg:p-0 lg:mt-20">
            <p className=" text-white">
              © 2020 DANA - PT.Espay Debit Indonesia Koe.
            </p>
            <p className="text-white ">All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
