import React from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";

function CouponsDetails() {
  const coupons = {
    id: 1,
    title: "SALE20",
    expiringDate: "2023-12-31",
    useLimit: 100,
    dateCreated: "2023-09-28",
    owner: "StoreA",
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
            Coupon Details
          </h3>
          <div>
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Code</th>
                  <th>Expiring Date</th>
                  <th>Use Limit</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full">
                  <td>{coupons.id}</td>
                  <td className="truncate">{coupons.title}</td>
                  <td>{coupons.code}</td>

                  <td>{coupons.expiringDate}</td>
                  <td>{coupons.useLimit}</td>
                  <td>{coupons.dateCreated}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponsDetails;

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
