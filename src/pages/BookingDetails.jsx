import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserAuth";

function BookingDetails() {
  const { id } = useParams();

  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/bookings/fetch/" + id, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((respond) => {
        setBookingDetails(respond.data);
        setLoading(false);
      });
  }, []);
  const book = {
    id: 1,
    address: "123 Main Street, Cityville",
    appointmentDate: "2023-10-15",
    haveBrief: true,
    deliverableType: "Physical",
    expectDigitalContent: false,
    brief: "Detailed ins tructions provided.",
    briefFile: "booking_brief.pdf",
    briefLink: "https://example.com/brief",
    deleted: false,
    createdAt: "2023-09-28",
    lastUpdated: "2023-09-28",
    accepted: true,
    rejected: false,
    user: "User123",
    service: "Graphic Design",
  };

  return (
    <div>
      <NavBar />

      <div className="flex justify-between">
        <div className="w-[25rem] mt-4 ml-4 bg-white shadow-lg h-[25vh] mb-8 p-4 rounded-xl">
          <div className="flex gap-4 mb-4">
            <div className="w-40 h-40  rounded-2xl border-2 border-gray-200 p-2">
              <img src={profile} />
            </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="text-2xl font-semibold text-blue-500 mr-4">
          Booking Details
        </div>
      </div>
      <div className="ml-4">
        <div>
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Booking Details
          </h3>
          <div>
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Address</th>
                  <th>Appointment Date</th>
                  <th>Deleted</th>
                  <th>Created At</th>
                  <th>Last Updated</th>
                  <th>Accepted</th>
                  <th>Rejected</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {bookingDetails.data && (
                  <tr className="w-full">
                    <td>{bookingDetails.data.id}</td>
                    <td className="truncate">{bookingDetails.data.address}</td>
                    <td>{bookingDetails.data.appointmentDate}</td>
                    <td>
                      {bookingDetails.data.deleted == true ? (
                        <div>yes</div>
                      ) : (
                        <div>No</div>
                      )}
                    </td>
                    <td>{bookingDetails.data.createdAt}</td>
                    <td>{bookingDetails.data.lastUpdated}</td>
                    <td>{bookingDetails.data.accepted}</td>
                    <td>
                      {bookingDetails.data.rejected == true ? (
                        <div>yes</div>
                      ) : (
                        <div>No</div>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Brief Information
          </h3>
          {bookingDetails.data && bookingDetails.data.haveBrief == true ? (
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>deliverable Type</th>
                  <th className="truncate">Expect Digital COntent</th>
                  <th>Brief Links</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full">
                  <td>{bookingDetails.data.deliverableType}</td>
                  <td className="truncate">
                    {bookingDetails.data.expectDigitalContent}
                  </td>
                  <td>{bookingDetails.data.briefLink}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>No</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;

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
