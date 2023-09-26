import React from "react";

function Reports() {
  const weeklyReports = [
    {
      date: "2023-09-18",
      activity: "Meeting with Team",
      details: "Discussed project updates and upcoming tasks.",
    },
    {
      date: "2023-09-19",
      activity: "Client Presentation",
      details: "Presented the latest project status to the client.",
    },
    {
      date: "2023-09-20",
      activity: "Coding Sprint",
      details: "Worked on implementing new features in the application.",
    },
    {
      date: "2023-09-21",
      activity: "Testing Phase",
      details: "Conducted extensive testing to identify and fix bugs.",
    },
    {
      date: "2023-09-22",
      activity: "Documentation",
      details: "Updated project documentation and user guides.",
    },
  ];

  console.log(weeklyReports);

  return (
    <div>
      <div>
        <div className="border-b-2 border-gray-400 pb-4 mb-4">
          <h2 className="text-3xl font-medium text-gray-700 tracking-wide mt-8 uppercase">
            Report
          </h2>
          <h4 className="text-md font-medium mt-2 ">
            Home <span className="text-gray-600">/ Report</span>
          </h4>
        </div>

        <div className="flex justify-start gap-2">
          <button className="px-4 py-2 text-white tracking-wider bg-blue-500 rounded-md">
            Print
          </button>
          <button className="px-4 py-2 text-white tracking-wider bg-blue-500 rounded-md">
            Copy
          </button>
          <button className="px-4 py-2 text-white tracking-wider bg-blue-500 rounded-md">
            Excel
          </button>
          <button className="px-4 py-2 text-white tracking-wider bg-blue-500 rounded-md">
            Pdf
          </button>
          <button className="flex gap-2 px-6 py-2 text-gray-900 font-semibold tracking-normal bg-yellow-500 rounded-md">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Report
          </button>
        </div>
        <div className="grid grid-cols-4 bg-gray-900 text-white px-4 py-2 text-lg mt-4">
          <div>Date</div>
          <div>Activities</div>
          <div>Details</div>
          <div className="ml-4">Action</div>
        </div>
        <div>
          {weeklyReports.map((todo) => (
            <div className="grid grid-cols-4  text-gray-900 px-4 py-2 text-lg mt-4">
              <div className="border-b-2">{todo.date}</div>
              <div className="border-b-2">{todo.activity}</div>
              <div className="border-b-2">{todo.details}</div>
              <div className="border-b-2 ml-4 flex justify-end gap-4 w-1/2">
                <button className="w-8 h-8 bg-green-500 p-2 rounded-lg flex justify-center items-center">
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-red-500 p-2 rounded-lg flex justify-center items-center">
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between mt-4 ml-4">
        <div>Showing 11 t0 20 Entries out of 100</div>
        <div></div>
      </div>
    </div>
  );
}

export default Reports;
