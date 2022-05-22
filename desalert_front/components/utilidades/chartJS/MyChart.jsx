import React, { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const data = {
  labels: ["2022-01-15", "2022-03-12", "2022-05-24"],
  datasets: [
    {
      label: "Índice de Masa Corporal",
      data: [20, 40, 60],
      borderColor: "#84b6f4",
      backgroundColor: "#dbf2ff",
    },
  ],
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Evolución del IMC del infante",
    },
  },
}

/* const [data, setData] = useState({})

const [options, setOptions] = useState({})

 useEffect(() => {
  setData({
    labels: ["2022-01-15", "2022-03-12", "2022-05-24"],
    datasets: [
      {
        label: "Índice de Masa Corporal",
        data: [20, 40, 60],
        borderColor: "#84b6f4",
        backgroundColor: "#dbf2ff",
      },
    ],
  })
  setOptions({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Evolución del IMC del infante",
      },
    },
  })
}, []) */

export function MyChart() {
  return <Line options={options} data={data} />
}
