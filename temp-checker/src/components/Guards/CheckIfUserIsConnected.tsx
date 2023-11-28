import { CheckIfUserIsConnectedType, RootState } from "../../utils/types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomPageLoading from "../CustomPageLoading";

const CheckIfUserIsConnected: React.FC<CheckIfUserIsConnectedType> = ({
  element,
}) => {
  const isPageLoading = useSelector(
    (state: RootState) => state.user.isPageLoading
  );
  const user = useSelector((state: RootState) => state.user.user);

  if (isPageLoading) return <CustomPageLoading />;
  if (user) return element;

  return <Navigate to="/login" />;
};

export default CheckIfUserIsConnected;
