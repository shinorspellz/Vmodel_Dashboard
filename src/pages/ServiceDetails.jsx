import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserAuth";

function ServiceDetails() {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/services/fetch/" + id, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((respond) => {
        setServices(respond.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (services.data) {
      axios
        .get("/users/fetch/" + services.data.user, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
        .then((respond) => {
          setUsers(respond.data);
          setLoading(false);
        });
    }
  }, [services]);

  return (
    <div>
      <NavBar />
      <div className="flex justify-between">
        <div className="w-[25rem] mt-4 ml-4 bg-white shadow-lg h-[25vh] mb-8 p-4 rounded-xl">
          {users.data ? (
            <div className="flex gap-4 mb-4">
              <div className="w-40 h-40  rounded-2xl border-2 border-gray-200 p-2">
                <img src={users.data.profile_picture_url} />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900">
                  {users.data.first_name} {users.data.last_name}
                </h4>
                <h5 className="text-lg font-medium text-gray-600 italic">
                  {users.data.username}
                </h5>

                <div className="mt-2">
                  <h5> {users.data.email}</h5>
                  <h5> {users.data.phone_number.completed}</h5>
                  {console.log(users.data.phone_number.completed, "rrrt")}
                  <h5>Ghana</h5>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="text-2xl font-semibold text-blue-500 mr-4">
          Services Details
        </div>
      </div>
      <div className="ml-4">
        <div>
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Services Info.
          </h3>
          <div>
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Service Type</th>
                  <th>Period</th>
                  <th>Approved</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody className="">
                {services.data ? (
                  <tr>
                    {" "}
                    <td> {services.data.title}</td>
                    <td className="line-clamp-4 mx-2">
                      {services.data.description}
                    </td>
                    <td>{services.data.service_type}</td>
                    <td>{services.data.period}</td>
                    <td>
                      {services.data.approved == true ? (
                        <div>yes</div>
                      ) : (
                        <div>No</div>
                      )}
                    </td>
                    <td>{services.data.price}</td>
                    <td>{services.data.category}</td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            User and Interaction Info
          </h3>
          <table class=" w-full table-fixed text-left">
            <thead>
              <tr>
                <th>Saves</th>
                <th>Rejected</th>
                <th>Discount</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {services.data ? (
                <tr className="w-full">
                  <td>{services.data.saves}</td>
                  <td className="truncate">
                    {services.data.rejected ? "yes" : "No"}
                  </td>
                  <td>{services.data.discount}</td>
                  <td>{services.data.views}</td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Service Management
          </h3>
          <table class=" w-full table-fixed text-left">
            <thead>
              <tr>
                <th>Initial Deposit</th>

                <th>Deleted</th>
                <th>Delivery</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {services.data ? (
                <tr className="w-full">
                  <td>{services.data.initial_deposit}</td>

                  <td className="truncate">
                    {services.data.deleted ? <div>yes</div> : <div>No</div>}
                  </td>
                  <td>{services.data.delivery}</td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;

// Service Information:

// Title
// Description
// Service Type
// Period
// Approved
// Price
// Category
// Usage Type
// Created At
// Last Updated
// User and Interaction Information:
// 11. User

// Likes Status
// Saves
// Rejected
// Discount
// Views
// Service Management:
// 17. Initial Deposit

// Deleted
// Delivery
// Metadata:
// 20. Meta
