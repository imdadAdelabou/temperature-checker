import { InputType } from "../utils/types";

function CustomInput(props: InputType) {
  return (
    <input
      {...props}
      className={`bg-white w-full h-14 border pl-3 mb-8 rounded-md  ${
        props.haveError ? "outline-[red]" : ""
      }`}
    />
  );
}

export default CustomInput;
