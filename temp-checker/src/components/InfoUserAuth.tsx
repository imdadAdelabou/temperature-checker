import { useNavigate } from "react-router-dom";
import { InfoUserAuthType } from "../utils/types";

const InfoUserAuth: React.FC<InfoUserAuthType> = ({
  firstLabel,
  secondLabel,
  path,
}) => {
  const navigator = useNavigate();

  return (
    <h3 className="mt-[20px]">
      {firstLabel}{" "}
      <span
        className="underline text-orangeVariant cursor-pointer"
        onClick={() => navigator(path)}
      >
        {secondLabel}
      </span>
    </h3>
  );
};

export default InfoUserAuth;
