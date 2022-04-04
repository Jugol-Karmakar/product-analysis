import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Dashboard = () => {
  const data01 = [
    { name: "Jan", investment: 40000 },
    { name: "Feb", investment: 35000 },
    { name: "Mar", investment: 43000 },
    { name: "Apr", investment: 52000 },
    { name: "May", investment: 56200 },
  ];
  const data02 = [
    { name: "Jun", investment: 61100 },
    { name: "Jul", investment: 70300 },
    { name: "Aug", investment: 81000 },
    { name: "Sep", investment: 59080 },
    { name: "Oct", investment: 76430 },
    { name: "Nov", investment: 65430 },
    { name: "Dec", investment: 90850 },
  ];
  return (
    <div>
      <PieChart width={600} height={400}>
        <Pie
          data={data01}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="investment"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />

        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default Dashboard;
