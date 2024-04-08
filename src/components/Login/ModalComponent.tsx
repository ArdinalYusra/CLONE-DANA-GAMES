import Image from "next/image";
import helpBackground from "@/lib/images/helpBackground.png";

type propsType = {
  open: boolean;
  onClose: () => void;
};

const ModalComponent = ({ open, onClose }: propsType) => {
  return (
    <div
      onClick={onClose}
      className={`fixed flex inset-0 justify-center items-end
     transition-colors
     ${open ? "visible bg-black/50" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white h-1/2 px-5 py-7 md:mb-[430px] lg:mb-10 md:h-96 md:w-[430px] rounded-xl shadow ease-out duration-200
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <div className="h-40 w-40 mx-auto">
          <Image src={helpBackground} alt="/" />
        </div>
        <div className="text-center mt-7 mb-3">
          <strong className="mt-5">Hai, kami siap membantu!</strong>
          <p className="text-xs md:text-sm">
            Silakan hubungi Customer Care di{" "}
            <span className="text-blue-700">12345678</span> atau kirim email ke{" "}
            <span className="text-blue-700">example@gmail.com</span>
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white bg-blue-500 rounded-md w-full font-bold py-3"
        >
          MENGERTI
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
