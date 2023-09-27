import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "./DashBoard";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex justify-between gap-0">
        <div className="bg-gray-100 w-full">
          <NavBar />
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
