import { BtnType } from "../utils/types";
import CircularLoading from "./CircularLoading";

function CustomBtn(props: BtnType) {
  //inactive style text-[#217BF4] border border-[#217BF4]
  return (
    <button
      onClick={props.action}
      disabled={props.disable}
      className={`block rounded-[8px] h-[52px] w-full transition-colors duration-500 ${
        props.customBgColor ? props.customBgColor : "bg-primary"
      } text-white flex justify-center items-center `}
      type={props.type}
    >
      {props.isLoading ? <CircularLoading /> : props.content}
    </button>
  );
}

export default CustomBtn;
