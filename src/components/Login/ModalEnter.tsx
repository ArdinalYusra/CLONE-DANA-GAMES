import helpBackground from "@/lib/images/helpBackground.png";
import React from "react";

type propsType = {
  open: boolean;
  onClose: () => void;
};

const ModalEnter = ({ open, onClose }: propsType) => {
  return (
    <>
      <div className="wrapper flex-center">
        <div
          onClick={onClose}
          className={`fixed flex inset-0 justify-center items-end
      transition-colors
      ${open ? "visible bg-black/50" : "invisible"}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white w-full px-5 py-7 lg:mb-40 md:w-[430px] rounded-xl shadow ease-out duration-200
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
          >
            <div className="text-center mt-7 mb-3">
              <strong className="mt-5 text-2xl">
                Terima Kasih sudah Login
              </strong>
            </div>
            <button
              onClick={onClose}
              className="text-white bg-blue-500 rounded-md w-full font-bold py-3"
            >
              Kembali
            </button>
            <p className="text-xs my-3 text-center md:text-sm ">
              Ini hanya sekedar Demo App
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEnter;
