import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import axios from "axios";

function Services() {
  let navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cannotLoad, setCannotLoad] = useState(false);

  useEffect(() => {
    try {
      axios
        .get("services/", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
        .then((respond) => {
          setServicesList(respond.data);
          setLoading(false);
        });
    } catch {
      setCannotLoad(false);
    }
  }, [servicesList]);

  const serviceClick = (id) => {
    navigate("servicedetails/" + id);
  };

  if (cannotLoad) {
    return <div>Loading Error</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="w-3/4 ml-4 flex justify-start gap-4 mt-4">
        <div className="w-[20rem] bg-white shadow-lg h-[20vh] mb-8 p-4 rounded-xl">
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
              {servicesList.data && servicesList.data.length}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full text-2xl text-gray-500 font-semibold">
              Services List
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="w-full h-[60vh] overflow-scroll">
        <table class="w-full ml-4 table-fixed   ">
          <thead className="px-4 text-left h-[5vh] bg-gray-900 ">
            <tr className="text-white text-lg ">
              <th>Id</th>
              <th>Service Title</th>
              <th>Service Type</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {servicesList.data
              ? servicesList.data.map((service) => (
                  <tr
                    className="w-full h-[0rem] text-base  border-gray-300 border-b-[2px] hover:bg-gray-300 cursor-pointer"
                    onClick={() => serviceClick(service.id)}>
                    <td>{service.id}</td>
                    <td>{service.title}</td>
                    <td>{service.service_type}</td>
                    <td className="line-clamp-3 mx-2">{service.description}</td>
                    <td>{service.price}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
