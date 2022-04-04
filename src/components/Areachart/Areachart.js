import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Areachart = () => {
  const data = [
    {
      name: "Jan",
      invest: 4000,
      sell: 2400,
      revenue: 2400,
    },
    {
      name: "Feb",
      invest: 3000,
      sell: 1398,
      revenue: 2210,
    },
    {
      name: "Mar",
      invest: 2000,
      sell: 9800,
      revenue: 2290,
    },
    {
      name: "Apr",
      invest: 2780,
      sell: 3908,
      revenue: 2000,
    },
    {
      name: "May",
      invest: 1890,
      sell: 4800,
      revenue: 2181,
    },
    {
      name: "Jun",
      invest: 2390,
      sell: 3800,
      revenue: 2500,
    },
    {
      name: "Jul",
      invest: 3490,
      sell: 4300,
      revenue: 2100,
    },
  ];
  return (
    <div>
      <h2 className="text-center py-5 text-lg font-bold text-blue-500">
        Invensment VS Revenue
      </h2>
      <AreaChart
        width={400}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="invest"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="sell"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default Areachart;
