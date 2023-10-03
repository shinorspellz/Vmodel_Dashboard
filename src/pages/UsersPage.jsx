import React, { useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserAuth";
import axios from "axios";

function UsersPage() {
  let navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalActive, setTotalActive] = useState(0);
  const [totalBan, setTotalBan] = useState(0);
  const [totalSuper, setTotalSuper] = useState(0);
  useEffect(() => {
    axios
      .get("/users/", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((respond) => {
        setUser(respond.data);
        setLoading(false);
      });

    if (user.data) {
      const activeUser = user.data.filter((active) => {
        return active.is_active === true;
      });
      const totalbanusers = user.data.filter((active) => {
        return active.is_banned === true;
      });

      const totalsuperuser = user.data.filter((active) => {
        return active.is_superuser === true;
      });

      setTotalActive(activeUser);
      setTotalBan(totalbanusers);
      setTotalSuper(totalsuperuser);
    }
  }, [user]);

  console.log({ totalActive });
  console.log({ totalBan });
  console.log({ user });

  const users = [
    {
      userId: "001",
      firstName: "John",
      lastName: "Doe",
      username: "johndoe123",
      country: "United States",
      email: "john.doe@email.com",
      gender: "Male",
    },
    {
      userId: "002",
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith456",
      country: "Canada",
      email: "jane.smith@email.com",
      gender: "Female",
    },
    {
      userId: "003",
      firstName: "David",
      lastName: "Johnson",
      username: "davidj88",
      country: "United Kingdom",
      email: "david.j@email.com",
      gender: "Male",
    },
    {
      userId: "004",
      firstName: "Maria",
      lastName: "Garcia",
      username: "mariagarcia789",
      country: "Spain",
      email: "maria.g@email.com",
      gender: "Female",
    },
    {
      userId: "005",
      firstName: "Ahmed",
      lastName: "Ali",
      username: "ahmedali22",
      country: "Egypt",
      email: "ahmed.ali@email.com",
      gender: "Male",
    },
  ];

  const UserClick = (id) => {
    navigate("userdetail/" + id);
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-between">
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
                {user.data ? (
                  user.data.length > 0 ? (
                    user.data.length
                  ) : (
                    <div>0</div>
                  )
                ) : (
                  <div class="text-sm">Loading</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full text-lg text-gray-500 font-semibold">
                Total Users
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
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
                {user.data ? (
                  totalActive.length > 0 ? (
                    totalActive.length
                  ) : (
                    <div>0</div>
                  )
                ) : (
                  <div class="text-sm">Loading</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full text-lg text-gray-500 font-semibold">
                Active User
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>{" "}
        </div>
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
                {user.data ? (
                  totalBan.length > 0 ? (
                    totalBan.length
                  ) : (
                    <div>0</div>
                  )
                ) : (
                  <div class="text-sm">Loading</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full text-lg text-gray-500 font-semibold">
                Banned Users
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>{" "}
        </div>
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
                {user.data ? (
                  totalSuper.length > 0 ? (
                    totalSuper.length
                  ) : (
                    <div>0</div>
                  )
                ) : (
                  <div>loading</div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full text-lg text-gray-500 font-semibold">
                Super User
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                <div class="bg-blue-600 h-2.5 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className=" h-[60vh] overflow-y-scroll overflow-x-hidden">
        <table class="w-full ml-4  mx-4 table-auto  ">
          <thead className="px-4 text-left h-[3vh] bg-gray-900 ">
            <tr className="text-white text-base ">
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Country</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {user.data &&
              user.data.map((user) => (
                <tr
                  className="w-full  text-sm  border-gray-300 border-b-[2px] hover:bg-gray-300 cursor-pointer overflow-visible"
                  onClick={() => UserClick(user.id)}>
                  <td className="py-2">{user.id}</td>
                  <td className="py-2">{user.first_name}</td>
                  <td className="py-2">{user.last_name}</td>
                  <td className="py-2">{user.username}</td>
                  <td className="py-2">
                    {user.country ? <div>{user.country}</div> : <div>none</div>}
                  </td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.gender}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
