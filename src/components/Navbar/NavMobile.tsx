import Link from "next/link";
import { RiNewspaperLine } from "react-icons/ri";
import { LiaNewspaperSolid } from "react-icons/lia";
import { SiPocket } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

const NavMobile = () => {
  return (
    <div className="fixed z-50 top-0 left-0 bg-slate-800 flex-col w-screen h-screen text-white">
      <div className="flex p-5 bg-gradient-to-b from-blue-700 to-blue-500 justify-between items-center">
        Masuk dengan akun DANA kamu.
        <Link
          href={"/login"}
          className="bg-white rounded-md text-blue-800 px-3 py-3"
        >
          <button>MASUK</button>
        </Link>
      </div>
      <div className="p-5">
        <p>Menu</p>
        <div className="flex flex-col border-white px-5 py-3 ">
          <Link href="/" className="border-b py-2 flex gap-3">
            <MdHome size={25} />
            <button>Beranda</button>
          </Link>
          <Link href={"/games"} className="border-b py-2 flex gap-3">
            <IoGameController size={23} />
            <button>Game</button>
          </Link>
          <Link href={"/voucherdigital"} className="border-b py-2 flex gap-3">
            <RiNewspaperLine size={23} />
            <button>Voucher Digital</button>
          </Link>
          <Link href={"/newsdanevents"} className="border-b py-2 flex gap-3">
            <LiaNewspaperSolid size={23} />
            <button>News & Events</button>
          </Link>
        </div>
        <p className="py-3">Fitur</p>
        <ul className="flex flex-col border-white px-5">
          <Link href={"/"} className="border-b py-2 flex gap-3">
            <RiNewspaperLine size={23} />
            <button>Riwayat Transaksi</button>
          </Link>
          <Link href={"/"} className="border-b py-2 flex gap-3">
            <SiPocket size={23} />
            <button>Pocket</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
