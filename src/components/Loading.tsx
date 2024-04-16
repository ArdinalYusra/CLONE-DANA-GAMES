import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex gap-2 justify-center font-semibold text-xl text-slate-50">
      <ImSpinner2 className="animate-spin" /> Loading...
    </div>
  );
};

export default Loading;
