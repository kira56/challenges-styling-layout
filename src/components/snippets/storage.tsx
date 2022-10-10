import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [8, 20, 15, 15],
      backgroundColor: ["#4AC29D", "#FF9F00", "#BCBECA", "#689FF8"],
      cutout: 80,
      responsive: true,
      maintainAspectRatio: false,
      borderWidth: 5,
    },
  ],
};

const Storage = () => {
  return (
    <Doughnut
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
      data={data}
    />
  );
};

export default Storage;
