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
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "./context/UserAuth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  axios.defaults.baseURL = "https://uat-api.vmodel.app/dashboard";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <div className="w-full bg-gray-100">
        <div className="flex justify-between ">
          <SideBar />
          <div className="w-full">
            <Routes>
              <Route index element={<Login />} />

              <Route exact path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />

                <Route path="/users" element={<UsersPage />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/services" element={<Services />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/jobdetails" element={<JobDetails />} />

                <Route path="users/userdetail" element={<UserDetails />} />
                <Route
                  path="services/servicedetails"
                  element={<ServiceDetails />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
