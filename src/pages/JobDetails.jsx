import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import profile from "../Asset/atmos.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserAuth";

function Jobdetails() {
  const { id } = useParams();

  const [jobdetail, setJobDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/jobs/fetch/" + id, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((respond) => {
        setJobDetail(respond.data);
        setLoading(false);
      });
  }, []);
  const job = {
    id: 1,
    title: "Graphic Designer",
    jobType: "Freelance",
    preferredGender: "Any",
    shortDescription: "Create  stunning graphics for marketing campaigns.",
    briefFile: "graphic_brief.pdf",
    briefLink: "https://example.com/brief",
    deliverableType: "Digital",
    isDigitalContent: true,
    delivery: "Online",
    deliveryType: "Download",
    locationNeeded: "Not specified",
    ethnicityNeeded: "Any",
    ageRange: "18-50",
    height: "Not specified",
    size: "Not specified",
    skinCompletion: "Not specified",
    createdAt: "2023-09-28",
    deletedAt: null,
    views: 500,
    acceptMultiples: true,
    closed: false,
    paused: false,
    category: "Design",
    status: "Active",
    approved: true,
    rejected: false,
    saves: 10,
    created: "User123",
    usageType: "One-time",
    usageLength: "1 month",
  };

  // Add more services as needed

  if (loading) {
    return <div>Loading</div>;
  }

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
          Job Details
        </div>
      </div>
      <div className="ml-4">
        <div>
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Jobs Info.
          </h3>
          <div>
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Job Type</th>
                  <th>Prefered Gender</th>
                  <th>Description</th>
                  <th>Brief Link</th>
                  <th>Deliverable Type</th>
                  <th>isDigitalContent</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {jobdetail.data ? (
                  <tr className="w-full">
                    <td>{jobdetail.data.id}</td>

                    <td>{jobdetail.data.job_title}</td>
                    <td>{jobdetail.data.job_type}</td>

                    <td>{jobdetail.data.preferred_gender}</td>
                    <td className="truncate">
                      {jobdetail.data.short_description}
                    </td>
                    <td className="truncate">{jobdetail.data.briefLink}</td>
                    <td className="truncate">
                      {jobdetail.data.deliverables_type}
                    </td>
                    <td>{jobdetail.data.is_digital_content ? "Yes" : "No"}</td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Jobs Info.
          </h3>
          <div>
            <table class=" w-full table-fixed text-left">
              <thead>
                <tr>
                  <th>Delivery</th>
                  <th>Delivery Type</th>
                  <th>Location</th>
                  <th>Age Range</th>
                  <th>ethnicity</th>

                  <th>Height</th>
                  <th>Size</th>
                  <th>Completion</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {jobdetail.data ? (
                  <tr className="w-full">
                    <td>
                      {jobdetail.data.delivery.map((deliver) => (
                        <ul className="text-sm">
                          <li>{deliver.date}</li>
                          <li>{deliver.end_time}</li>
                          <li>{deliver.start_time}</li>
                        </ul>
                      ))}
                    </td>
                    <td>{jobdetail.data.deliverables_type}</td>{" "}
                    <td>
                      {jobdetail.data.location.latitude}
                      {jobdetail.data.location.longitude}
                      {jobdetail.data.location.location_name}
                    </td>
                    <td className="truncate">{jobdetail.data.age_range}</td>
                    <td>{jobdetail.data.age_range}</td>
                    <td>{jobdetail.data.height}</td>
                    <td>{jobdetail.data.size}</td>
                    <td>{jobdetail.data.skinCompletion}</td>
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
            Job Timeline and Status
          </h3>
          <table class=" w-full table-fixed text-left">
            <thead>
              <tr>
                <th>Created At</th>
                <th>Deleted At</th>
                <th>Accept Multiples</th>
                <th>Closed</th>
                <th>Paused</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {jobdetail.data ? (
                <tr className="w-full">
                  <td>{jobdetail.data.created_at}</td>
                  <td>{jobdetail.data.deleted_at}</td>
                  <td>
                    {jobdetail.data.accept_multiple ? (
                      <div>Yes</div>
                    ) : (
                      <div>No</div>
                    )}
                  </td>

                  <td>
                    {jobdetail.data.closed ? <div>Yes</div> : <div>No</div>}
                  </td>
                  <td>
                    {jobdetail.data.paused ? <div>Yes</div> : <div>No</div>}
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="bg-blue-500 py-2  pl-4 text-xl font-semibold text-gray-100">
            Job categorization
          </h3>
          <table class=" w-full table-fixed text-left">
            <thead>
              <tr>
                <th>Category</th>

                <th>Status</th>
                <th>Approved</th>
                <th>Rejected</th>
                <th>Saves</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="w-full">
                <td>{jobdetail.data.category}</td>
                <td>{jobdetail.data.status}</td>

                <td className="truncate">
                  {jobdetail.data.approved ? <div>yes</div> : <div>No</div>}
                </td>
                <td className="truncate">
                  {jobdetail.data.rejected ? <div>yes</div> : <div>No</div>}
                </td>
                <td>{jobdetail.data.saves}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jobdetails;

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

// Job Information:

// ID
// Job Title
// Job Type
// Preferred Gender
// Short Description
// Brief File
// Brief Link
// Deliverable Type
// Is Digital Content
// Delivery
// Delivery Type
// Location Needed
// Ethnicity Needed
// Age Range
// Height
// Size
// Skin Completion
// Job Timeline and Status:
// 18. Created At

// Deleted At
// Views
// Accept Multiples
// Closed
// Paused
// Job Categorization:
// 24. Category

// Status
// Approved
// Rejected
// Saves
// Created
// Usage Information:
// 30. Usage Type

// Usage Length
