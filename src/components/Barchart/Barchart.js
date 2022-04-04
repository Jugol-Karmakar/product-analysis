import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      name: "Apr",
      investment: 200000,
      sell: 1423,
      revenue: 24500,
    },
    {
      name: "May",
      investment: 500000,
      sell: 1726,
      revenue: 67010,
    },
    {
      name: "Jun",
      investment: 500000,
      sell: 1529,
      revenue: 40405,
    },
    {
      name: "Jul",
      investment: 600000,
      sell: 1601,
      revenue: 50900,
    },
    {
      name: "Aug",
      investment: 700000,
      sell: 2270,
      revenue: 71000,
    },
    {
      name: "Sep",
      investment: 800000,
      sell: 2570,
      revenue: 73000,
    },
    {
      name: "Oct",
      investment: 840000,
      sell: 2980,
      revenue: 85400,
    },
  ];
  return (
    <div>
      <h2 className="text-center py-5 text-lg font-bold text-blue-500">
        Invensment VS Revenue
      </h2>
      <BarChart width={400} height={350} data={data}>
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="sell" fill="#8883d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Legend />
      </BarChart>
    </div>
  );
};

export default Barchart;
