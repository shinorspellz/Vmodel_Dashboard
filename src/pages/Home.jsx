import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DashBoard from "./DashBoard";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between gap-4">
        <SideBar />
        <div className="bg-gray-100 w-full">
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
