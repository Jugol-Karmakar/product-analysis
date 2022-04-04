import React from "react";
import Areachart from "../Areachart/Areachart";
import Barchart from "../Barchart/Barchart";
import Linechart from "../Linechart/Linechart";

import PicChart from "../PicChart/PicChart";

const Dashboard = () => {
  return (
    <div className="bg-green-50 p-10">
      <h2 className="text-3xl text-center font-bold mb-5 text-rose-600">
        DashBoard
      </h2>
      <Linechart></Linechart>
      <PicChart></PicChart>
      <Barchart></Barchart>
      <Areachart></Areachart>
    </div>
  );
};

export default Dashboard;
