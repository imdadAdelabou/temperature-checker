import React from "react";
import { CheckIfUserIsConnectedType, RootState } from "../../utils/types";
import { useSelector } from "react-redux";
import CustomPageLoading from "../CustomPageLoading";
import { Navigate } from "react-router-dom";

const RedirectUserWhenConnected: React.FC<CheckIfUserIsConnectedType> = ({
  element,
}) => {
  const isPageLoading = useSelector(
    (state: RootState) => state.user.isPageLoading
  );
  const user = useSelector((state: RootState) => state.user.user);

  if (isPageLoading) return <CustomPageLoading />;
  if (user) return <Navigate to="/dashboard/index" replace />;

  return element;
};

export default RedirectUserWhenConnected;