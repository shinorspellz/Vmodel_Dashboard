import React from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";

function ServiceDetails() {
  const services = {
    title: "Web Design Service",
    description: "Professional web design for businesses and individuals.",
    serviceType: "Design",
    period: "15 days",
    approved: true,
    price: 500.0,
    category: "Graphic Design",
    usageType: "One-time",
    createdAt: "2023-09-28",
    lastUpdated: "2023-09-28",
    user: "Designer123",
    likeStatus: "Liked",
    saves: 20,
    rejected: false,
    discount: 10,
    views: 1000,
    service_management: "official",
    initialDeposit: 100.0,
    deleted: false,
    delivery: "Digital Download",
    meta: {
      key1: "value1",
      key2: "value2",
    },
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
                  <th>Usage Type</th>
                  <th>Created At</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="w-full">
                  <td>{services.title}</td>
                  <td className="truncate">{services.description}</td>
                  <td>{services.serviceType}</td>
                  <td>{services.period}</td>
                  <td>
                    {services.approved == true ? <div>yes</div> : <div>No</div>}
                  </td>
                  <td>{services.price}</td>
                  <td>{services.category}</td>
                  <td>{services.usageType}</td>
                  <td>{services.createdAt}</td>
                  <td>{services.lastUpdated}</td>
                </tr>
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
              <tr className="w-full">
                <td>{services.saves}</td>
                <td className="truncate">{services.rejected}</td>
                <td>{services.discount}</td>
                <td>{services.views}</td>
              </tr>
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
              <tr className="w-full">
                <td>{services.initialDeposit}</td>

                <td className="truncate">
                  {services.deleted ? <div>yes</div> : <div>No</div>}
                </td>
                <td>{services.delivery}</td>
              </tr>
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
