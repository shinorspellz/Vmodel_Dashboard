import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserAuth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(UserContext);

  return <div>{user !== "" ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default PrivateRoute;
