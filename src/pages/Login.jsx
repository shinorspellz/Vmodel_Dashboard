import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { UserContext } from "../context/UserAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { useSignIn } from "react-auth-kit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [Incorrect_alert, setIncorrect_Alert] = useState(false);
  const signIn = useSignIn();

  const cookie = new Cookies();

  const { setUser, user, setToken, token } = useContext(UserContext);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await axios.post("/login/", {
        username,
        password,
      });
      setToken(userInfo.data.data.token);

      setUser("userone");
      navigate("/home");

      alert("Login Successful. Now you can log in");
    } catch (e) {
      alert("Login fail fail. Please try again letter");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
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
              <button
                onClick={submitLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
