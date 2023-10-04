import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserAuth";
import { useNavigate } from "react-router-dom";

function SecurityPrompt({
  prompt,
  actionPannel,
  setShowDeleteAlert,
  setLoading,
  id,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [Incorrect_alert, setIncorrect_Alert] = useState(false);

  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    switch (prompt) {
      case "Delete Coupon":
        axios
          .delete("/coupons/delete/" + id + "/", {
            headers: {
              "Content-type": "application/json",
              Authorization: `Token ${token}`,
            },
          })
          .then((respond) => {
            setLoading(false);
            setShowDeleteAlert(true);
            setTimeout(() => {
              setShowDeleteAlert(false);
            }, 2000);
          });
        break;
      case "verified":
        //        "is_banned": true,
        // "is_verified": true,
        // "blue_tick_verified": true,
        // "display_name": "string",
        // "first_name": "string",
        // "last_name": "string"

        axios
          .put(
            `/users/update/${id}/`,
            { is_verified: true }, // Set is_verified to true (a boolean, not a string)
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
              },
            }
          )
          .then((response) => {
            setLoading(false);
            console.log("Response:", response);
            setLoading(false);
          })
          .catch((error) => {
            // Handle errors here
            console.error("Error:", error);
          });
        break;

      default:
      // code block
    }
  };
  return (
    <div className=" w-1/2  rounded-2xl shadow-2xl bg-white">
      <div className=" flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="bg-white  p-8 rounded-2xl shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Are you sure you want to
            {prompt ? <span>{prompt}</span> : <span>Delete</span>}
          </h2>
          <h6 className="py-2 italic">
            Input your credentials to complete this action
          </h6>
          {Incorrect_alert && (
            <div className="bg-red-500 my-2 py-2 text-center">
              UserName or Password is Incorrect
            </div>
          )}
          {loggedIn ? (
            <p className="text-green-600">Welcome, {username}!</p>
          ) : (
            <div>
              <label className="block mb-2">
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </label>
              <label className="block mb-2">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </label>
              <div className="flex">
                {" "}
                <button
                  onClick={submitLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  {prompt ? <div>{prompt}</div> : <div>Delete</div>}
                </button>
                <button
                  onClick={() => {
                    actionPannel(false);
                  }}
                  className=" text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue ">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecurityPrompt;
