import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";
import SecurityPrompt from "../components/SecurityPrompt";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserAuth";

function UserDetails() {
  const { id } = useParams();
  console.log({ id });
  const [userDetail, setUserDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cannotLoad, setCannotLoad] = useState(false);
  const [ids, setIds] = useState(id);

  const { token } = useContext(UserContext);

  useEffect(() => {
    try {
      axios
        .get("/users/fetch/" + id + "/", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
        .then((respond) => {
          setUserDetail(respond.data);
          setLoading(false);
        });
    } catch {
      setCannotLoad(true);
    }
  }, []);

  console.log(userDetail.data);

  const [action, setAction] = useState("");
  const [actionPannel, setActionPannel] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    if (userDetail.data) {
      const socialMediaFollowers = [
        {
          platform: "Instagram",
          followers: userDetail.data.no_of_instagram_follows,
        },
        {
          platform: "Youtube",
          followers: userDetail.data.no_of_youtube_subs,
        },
        {
          platform: "Facebook",
          followers: userDetail.data.no_of_facebook_follows,
        },
        {
          platform: "TikTok",
          followers: userDetail.data.no_of_tiktok_follows,
        },
        {
          platform: "Snapchat",
          followers: userDetail.data.no_of_snapchat_follows,
        },
        {
          platform: "Twitter",
          followers: userDetail.data.no_of_twitter_follows,
        },
        {
          platform: "Pinterest",
          followers: userDetail.data.no_of_pinterest_follows,
        },
        {
          platform: "Patreon",
          followers: userDetail.data.no_of_patreon_follows,
        },
        {
          platform: "LinkedIn",
          followers: userDetail.data.no_of_linkedin_follows,
        },
      ];

      setSocialMedia(socialMediaFollowers);
    }
  }, [loading]);

  const handleAction = (act) => {
    setActionPannel(true);
    setAction(act);
  };

  console.log(action);

  if (cannotLoad) {
    return <div>Loading </div>;
  }
  return (
    <div>
      <NavBar />
      <div className="relative w-full">
        <div
          className={
            actionPannel
              ? "absolute  w-full  h-[90vh]  flex  items-center justify-center "
              : "absolute  w-full  h-[90vh]  hidden items-center justify-center "
          }>
          <SecurityPrompt
            prompt={action}
            actionPannel={setActionPannel}
            id={ids}
            setLoading={setLoading}
          />
        </div>
      </div>
      <div>
        <div className="w-full pr-8 h-[10vh] bg-blue-800 gap-8  flex justify-end items-center">
          <button
            className="py-2 px-8 bg-blue-400 rounded-md font-medium text-lg flex gap-2"
            onClick={() => {
              handleAction("verified");
            }}>
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
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            Verified
          </button>

          
          <button
            className="py-2 px-8 bg-red-500 rounded-md font-medium text-lg flex gap-2"
            onClick={() => {
              handleAction("ban");
            }}>
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
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            Ban
          </button>
        </div>
        <div className="flex mt-4">
          <div className="bg-white rounded-2xl h-[45vh] flex justify-between w-3/4 shadow-xl  mx-4">
            <div className=" w-full gap-4 m-4 text-gray-700 border-r-[1px] border-gray-200">
              <div className="flex gap-4 mb-4">
                <div className="w-40 h-45  rounded-2xl border-2 border-gray-200 p-2">
                  <img
                    src={
                      userDetail.data ? userDetail.data.profile_picture_url : ""
                    }
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {userDetail.data ? userDetail.data.first_name : ""}{" "}
                    {userDetail.data ? userDetail.data.last_name : ""}
                  </h4>
                  <h5 className="text-sm font-medium text-gray-600 italic">
                    {userDetail.data ? "@" + userDetail.data.username : ""}
                  </h5>

                  <div className="mt-2">
                    <h5> {userDetail.data ? userDetail.data.email : ""}</h5>
                    <h5>
                      {userDetail.data
                        ? userDetail.data.phone_number.number
                        : ""}
                    </h5>
                    <h5> {userDetail.data ? userDetail.data.country : ""}</h5>
                    <h5 className="">
                      Price:
                      <span className="text-lg font-semibold">
                        {userDetail.data
                          ? !userDetail.data.price
                            ? "0"
                            : userDetail.data.price
                          : "0"}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bio</h3>
                <p className="text-sm line-clamp-5">
                  {userDetail.data ? userDetail.data.bio : ""}
                </p>
              </div>
            </div>
            <div className="w-4/6 flex h-[40vh] mt-4">
              <div className="w-full">
                <h3 className="mb-[1.5px] text-sm">Label</h3>
                <h3 className="mb-[1.5px] text-sm">Gender</h3>
                <h3 className="mb-[1.5px] text-sm">UserType</h3>
                <h3 className="mb-[1.5px] text-sm">Enthinicity</h3>
                <h3 className="mb-[1.5px] text-sm">PostCode</h3>
                <h3 className="mb-[1.5px] text-sm">Size</h3>
                <h3 className="mb-[1.5px] text-sm">Hair</h3>
                <h3 className="mb-[1.5px] text-sm">Eyes</h3>
              </div>
              <div className="w-full ext-gray-700 font-medium text-sm">
                {" "}
                {userDetail.data ? (
                  <div>
                    {" "}
                    <h3 className="mb-[2px] text-base truncate ">
                      {userDetail.data.label}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {userDetail.data.gender}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {userDetail.data.user_type}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {userDetail.data.ethnicity}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {" "}
                      {userDetail.data.postcode}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {" "}
                      {userDetail.data.size}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {" "}
                      {userDetail.data.hair}
                    </h3>
                    <h3 className="mb-[2px] text-base">
                      {" "}
                      {userDetail.data.eyes}
                    </h3>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-3/4 h-[45vh] bg-blue-500 mx-4 rounded-2xl p-4 text-lg">
            <h4 className="text-lg font-medium text-white drop-shadow-md">
              Social Media
            </h4>
            <div>
              {socialMedia.map((media) => (
                <div className="flex justify-between gap-3">
                  <div className="py-[1.5px] border-r-[1px] border-gray-200 w-full">
                    {media.platform}
                  </div>

                  <div className="py-[1.5px] border-r-[1px] border-gray-200 w-full">
                    {media.followers}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-between h-[30vh]  mt-4">
          <div className="w-full h-[30vh] bg-blue-500 mx-4 rounded-2xl">
            <div className="flex gap-4">
              <h3 className="m-4 font-semibold flex gap-4">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                Date Joined:
                <span className="text-lg  text-white truncate">
                  {userDetail.data ? userDetail.data.date_joined : ""}
                </span>
              </h3>
              <h3 className="m-4 font-semibold flex gap-4">
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                Date Last:
                <span className="text-lg truncate  text-white">
                  {" "}
                  {userDetail.data ? userDetail.data.last_login : ""}
                </span>
              </h3>
            </div>
            <div className="m-4">
              <h3 className="font-semibold text-xl">Interest:</h3>
              <div className="grid grid-cols-4 font-medium text-lg">
                {userDetail.data &&
                  userDetail.data.interests.map((interest) => (
                    <div className="flex gap-2 text-white">
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
                          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <div className=" gap-2 text-white">{interest}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-3/4  bg-blue-800 rounded-2xl">
            <div className="w-full tracking-wide flex h-[40vh] mt-4">
              <div className="w-full text-lg text-gray-300 font-medium p-4">
                <h3 className="mb-[2px] text-xl">Active</h3>
                <h3 className="mb-[2px] text-xl">Super User</h3>
                <h3 className="mb-[2px] text-xl">Verified</h3>
                <h3 className="mb-[2px] text-xl">Business Account</h3>
                <h3 className="mb-[2px] text-xl">Banned</h3>
                <h3 className="mb-[2px] text-xl">Deleted</h3>
              </div>
              <div className="w-full text-gray-100 font-medium p-4">
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_active
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_superuser
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_verified
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_business_account
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_banned
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
                <h3 className="mb-[2px] text-xl flex gap-2">
                  {userDetail.data
                    ? userDetail.data.is_deleted
                      ? "Yes"
                      : "No"
                    : ""}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
