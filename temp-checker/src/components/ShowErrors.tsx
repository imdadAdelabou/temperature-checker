import { ShowErrorsType } from "../utils/types";

const ShowErrors: React.FC<ShowErrorsType> = ({ errors }) => {
  return <p className="text-[14px] text-[red]">{errors}</p>;
};

export default ShowErrors;
