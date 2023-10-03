import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserGgraph from "../components/UserGgraph";
import AddCoupon from "../components/AddCoupon";
import { UserContext } from "../context/UserAuth";

function DashBoard() {
  const [users, setUsers] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [services, setServices] = useState(null);
  const [coupons, setCoupons] = useState(null);
  const [totalService, setTotalService] = useState("");
  const [totalBooking, setTotalBooking] = useState("");
  const [totalCoupon, setTotalCoupon] = useState("");

  const { token } = useContext(UserContext);

  useEffect(() => {
    // axios
    //   .get("/users", {
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Token ${token}`,
    //     },
    //   })
    //   .then(({ data }) => {
    //     setUsers(data);
    //   });
    axios
      .get("/coupons", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        if (data === null) {
          setTotalCoupon(0);
        } else {
          setCoupons(data);
          setTotalCoupon(coupons.data.length + 1);
        }
      });
    axios
      .get("/bookings", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        if (data === null) {
          setTotalBooking(0);
        } else {
          setBookings(data);
          setTotalBooking(bookings.data.length + 1);
        }
      });

    axios
      .get("/services", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(({ data }) => {
        setServices(data);
        setTotalService(services.data.length + 1);
      });
  }, []);

  console.log(users);

  return (
    <div>
      <div className="h-[15vh] ">
        <div className="text-4xl px-4 pt-2">Welcome Admin</div>
        <div className="text-lg text-gray-600 px-4 py-2">Dashboard</div>
      </div>

      <div className="w-full grid grid-cols-4 gap-4 px-4">
        <div className="w-full bg-white shadow-lg h-[20vh] mb-8 p-4 rounded-xl">
          <div className="w-full flex justify-between">
            <div className="rounded-full p-4 border-2 w-12 h-12 flex justify-center items-center border-gray-600">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <div className=" p-4 text-2xl font-semibold text-blue-500 w-12 h-12 flex justify-center items-center ">
              83
            </div>
          </div>
          <div className="mt-4">
            <div className="w-fulltext-lg text-gray-500 font-semibold">
              Users
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-lg h-[20vh] p-4 rounded-xl">
          <div className="w-full flex justify-between">
            <div className="rounded-full p-4 border-2 w-12 h-12 flex justify-center items-center border-gray-600">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </div>
            <div className=" p-4 text-2xl font-semibold text-blue-500 w-12 h-12 flex justify-center items-center ">
              {totalCoupon}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-fulltext-lg text-gray-500 font-semibold">
              Coupons
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div class="bg-yellow-600 h-2.5 rounded-full w-[40%]"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-lg h-[20vh] p-4 rounded-xl">
          <div className="w-full flex justify-between">
            <div className="rounded-full p-4 border-2 w-12 h-12 flex justify-center items-center border-gray-600">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className=" p-4 text-2xl font-semibold text-blue-500 w-12 h-12 flex justify-center items-center ">
              {totalBooking}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-fulltext-lg text-gray-500 font-semibold">
              Bookings
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div class="bg-blue-600 h-2.5 rounded-full w-[20%]"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-lg h-[20vh] p-4 rounded-xl">
          <div className="w-full flex justify-between">
            <div className="rounded-full p-4 border-2 w-12 h-12 flex justify-center items-center border-gray-600">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div className=" p-4 text-2xl font-semibold text-blue-500 w-12 h-12 flex justify-center items-center ">
              {totalService}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-fulltext-lg text-gray-500 font-semibold">
              Services
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div class="bg-yellow-600 h-2.5 rounded-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <div className="w-full">
          {" "}
          <UserGgraph />
        </div>
        <div className="w-full mx-4 rounded-2xl">
          <AddCoupon />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
