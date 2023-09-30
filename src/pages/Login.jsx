import React, { useState } from "react";
import NavBar from "../components/NavBar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can implement your login logic here.
    // For simplicity, we'll just check if username and password are not empty.
    if (username && password) {
      setLoggedIn(true);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
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
                onClick={handleLogin}
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
