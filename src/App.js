import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex justify-between ">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
