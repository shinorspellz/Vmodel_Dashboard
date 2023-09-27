import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: " ", uv: 0, pv: 2400, amt: 2400 },

  { name: "Jan.", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb.", uv: 100, pv: 2400, amt: 2400 },
  { name: "Mar.", uv: 500, pv: 2400, amt: 2400 },
  { name: "Apr", uv: 300, pv: 2400, amt: 2400 },
  { name: "May", uv: 600, pv: 2400, amt: 2400 },
  { name: "Jun", uv: 50, pv: 2400, amt: 2400 },
  { name: "Jul", uv: 30, pv: 2400, amt: 2400 },
  { name: "Aug", uv: 100, pv: 2400, amt: 2400 },
  { name: "Sep", uv: 30, pv: 2400, amt: 2400 },
  { name: "Oct", uv: 10, pv: 2400, amt: 2400 },
  { name: "Nov", uv: 500, pv: 2400, amt: 2400 },
  { name: "Dec", uv: 500, pv: 2400, amt: 2400 },
];

function UserGgraph() {
  return (
    <div className="w-full h-[45vh]">
      <div className="w-full text-2xl ml-4 mb-4 px-4">
        User Progress Graph{" "}
        <span className="text-2xl  text-blue-500 font-bold">2023</span>
      </div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default UserGgraph;
