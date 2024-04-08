"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import DownloadLogo from "@/lib/images/DownloadLogo.png";
import PurchaseList from "@/components/purchase/PurchaseList";

const GamesImages =
  "https://a.m.dana.id/resource/imgs/item-digital/games/mobile_legends.png";

const Purchase = () => {
  const savedInputValue = localStorage.getItem("userId, serverId") || "";
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const handleChangeInputUser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserId(event.target.value);

    setIsDisabled(userId === "" || userId.length < 4 ? true : false);

    if (isDisabled) {
      setError("Pastikan User ID anda dengan benar");
    }
  };
  const handleChangeInputServer = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setServerId(event.target.value);
    setIsDisabled(serverId === "" || serverId.length < 4 ? true : false);

    if (isDisabled) {
      setError("Pastikan User ID anda dengan benar");
    }
  };

  return (
    <div className="bg-[#151131]">
      <div className="wrapper md:p-10 md:grid grid-cols-2 gap-5 md:relative">
        <div className="md:flex md:flex-col">
          <Image
            src={GamesImages}
            alt=""
            height={1000}
            width={1000}
            className="w-full"
          />
          <div className="hidden md:flex flex-col bg-blue-950 p-5 text-white">
            <p className="text-sm">
              MOBA Bang Bang adalah game 5vs5 melawan pemain manusia lain. Pilih
              karakter favoritmu dan undang teman untuk bergabung ke tim! Dalam
              10 menit, hancurkan tower dan kalahkan lawan!
            </p>
            <p className="mt-5">Download Mobile Legends: Bang Bang</p>
            <div>
              <Image src={DownloadLogo} alt="" height={100} width={100} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full flex-center">
          <div className="bg-blue-950 flex flex-col p-3 space-y-5 rounded-sm">
            <p className="text-white">
              <span className="bg-blue-500 rounded-full py-2 px-3 text-lg mr-1">
                1
              </span>{" "}
              Masukan User ID
            </p>
            <form className="space-y-5 flex flex-col">
              <input
                onChange={handleChangeInputUser}
                value={userId}
                type="text"
                placeholder="Masukan User ID"
                className="p-2 pr-20 rounded-md"
              />
              <input
                onChange={handleChangeInputServer}
                value={serverId}
                type="text"
                placeholder="Type Server ID here"
                className="p-2 pr-20 rounded-md"
              />
            </form>
            {error ? <p className="text-red-500">{error}</p> : null}
            <p className="text-xs text-slate-300">
              Anda dapat menemukan Game User ID Anda dengan membuka Aplikasi
              Game Anda dan membuka Profile Setting dengan menekan Profile
              Picture di Home Screen. Game User ID Anda akan berada di bagian
              atas seperti gambar di bawah.
            </p>
          </div>
          <div className="flex flex-col w-full bg-blue-950 my-5 p-4">
            <p className="text-white m-3">
              <span className="bg-blue-500 rounded-full py-2 px-3 text-lg mr-1">
                2
              </span>{" "}
              Pilih Jumlah
            </p>
            <PurchaseList />
            <div className="my-5 md:mx-5">
              <button
                disabled={isDisabled}
                className="w-full py-3 text-white bg-blue-500 rounded-sm disabled:bg-slate-300"
              >
                LANJUTKAN
              </button>
            </div>
          </div>
          <div className="bg-blue-950 p-5 text-white md:hidden">
            <p className="text-sm">
              MOBA Bang Bang adalah game 5vs5 melawan pemain manusia lain. Pilih
              karakter favoritmu dan undang teman untuk bergabung ke tim! Dalam
              10 menit, hancurkan tower dan kalahkan lawan!
            </p>
            <p className="mt-5">Download Mobile Legends: Bang Bang</p>
            <div>
              <Image
                src={DownloadLogo}
                alt=""
                height={100}
                width={100}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
