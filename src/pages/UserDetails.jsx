import React from "react";
import NavBar from "../components/NavBar";

function UserDetails() {
  return (
    <div>
      <NavBar />
      <div className="flex mt-4">
        <div className="bg-white rounded-2xl h-[50vh] flex justify-between w-3/4 shadow-xl  mx-4">
          <div className=" w-full gap-4 m-4 text-gray-700 border-r-2 border-gray-400">
            <div className="flex gap-4 mb-4">
              <div className="w-40 h-40 bg-red-500 rounded-2xl "></div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900">
                  FName LName
                </h4>
                <h5 className="text-lg font-medium text-gray-600 italic">
                  Username
                </h5>

                <div className="mt-2">
                  <h5>example@email.com</h5>
                  <h5>+233 24 444 4444</h5>
                  <h5>Ghana</h5>
                  <h5 className="">
                    Price: <span className="text-lg font-semibold">$500</span>
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bio</h3>
              Labore nulla minim culpa enim et sunt. Sit est velit do esse elit
              et cillum nulla consectetur mollit amet est amet. Sunt pariatur ea
              ea fugiat nulla deserunt tempor est officia nulla consequat.
            </div>
          </div>
          <div className="w-4/6 flex h-[40vh] mt-4">
            <div className="w-full">
              <h3 className="mb-4 text-base">Label</h3>
              <h3 className="mb-4 text-base">Gender</h3>
              <h3 className="mb-4 text-base">UserType</h3>
              <h3 className="mb-4 text-base">Enthinicity</h3>
              <h3 className="mb-4 text-base">Post</h3>
              <h3 className="mb-4 text-base">Size</h3>
              <h3 className="mb-4 text-base">Hair</h3>
              <h3 className="mb-4 text-base">Eyes</h3>
            </div>
            <div className="w-full ext-gray-700 font-medium">
              {" "}
              <h3 className="mb-4 text-base">Red</h3>
              <h3 className="mb-4 text-base">Male</h3>
              <h3 className="mb-4 text-base">Client</h3>
              <h3 className="mb-4 text-base">Ashanti</h3>
              <h3 className="mb-4 text-base">56</h3>
              <h3 className="mb-4 text-base">large</h3>
              <h3 className="mb-4 text-base">Dark</h3>
              <h3 className="mb-4 text-base">Brown</h3>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-[40vh] bg-blue-500 mx-4"></div>
      </div>
    </div>
  );
}

export default UserDetails;