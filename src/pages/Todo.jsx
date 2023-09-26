import React from "react";

function Todo() {
  const todos = [
    {
      id: 1,
      task: "Buy groceries",
      completed: false,
      date: "2023-09-25", // Date when the task was added or is due
    },
    {
      id: 2,
      task: "Clean the house",
      completed: true,
      date: "2023-09-26", // Date when the task was added or is due
    },
    {
      id: 3,
      task: "Finish homework",
      completed: false,
      date: "2023-09-27", // Date when the task was added or is due
    },
    {
      id: 4,
      task: "Go for a run",
      completed: false,
      date: "2023-09-28", // Date when the task was added or is due
    },
  ];
  return (
    <div>
      <div>
        {" "}
        <div className="text-2xl font-semibold text-gray-700 my-2 ml-2">
          Todo Lists
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
            Add To Do
          </button>
        </div>
        <div className="grid grid-cols-3 bg-gray-900 text-white px-4 py-2 text-lg mt-4">
          <div>Date</div>
          <div>Task</div>
          <div>completed</div>
        </div>
        <div>
          {todos.map((todo) => (
            <div className="grid grid-cols-3  text-gray-900 px-4 py-2 text-lg mt-4">
              <div className="border-b-2">{todo.date}</div>
              <div className="border-b-2">{todo.task}</div>
              <div className="border-b-2">
                {todo.completed ? <div>completed</div> : <div>Not yet</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
