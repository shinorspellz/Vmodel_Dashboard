import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/Auth";

const Layout = ({ component: RouteComponent, ...rest }) => {
  const { user } = UserAuth();
  return <div>{!!user ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default Layout;
