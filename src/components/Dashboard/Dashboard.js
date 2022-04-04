import React from "react";
import Areachart from "../Areachart/Areachart";
import Barchart from "../Barchart/Barchart";
import Linechart from "../Linechart/Linechart";

import PicChart from "../PicChart/PicChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 g-4 items-center  bg-green-50 p-10">
      <Linechart></Linechart>
      <PicChart></PicChart>
      <Barchart></Barchart>
      <Areachart></Areachart>
    </div>
  );
};

export default Dashboard;
