import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import UsersPage from "./pages/UsersPage";
import Bookings from "./pages/Bookings";
import Coupons from "./pages/CouponsPage";
import Services from "./pages/Services";
import UserDetails from "./pages/UserDetails";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex justify-between ">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/services" element={<Services />} />
            <Route path="users/userdetail" element={<UserDetails />} />
            <Route
              path="services/servicedetails"
              element={<ServiceDetails />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
