import React from "react";

function NavBar() {
  return (
    <div className="px-4 w-full flex justify-between py-2 h-[10vh] bg-white">
      <div className="w-full flex justify-between items-center">
        {" "}
        <div className="w-full flex  gap-12 items-center py-2">
          {" "}
          <div className="text-2xl font-semibold w-1/2">Logo</div>
          <div className="w-full">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-end gap-8 items-center ">
        {" "}
        <div>
          <button className="bg-yellow-500 py-2 px-4 rounded-xl">
            Add Todo
          </button>
        </div>
        <div>UserName</div>
        <div>
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
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
