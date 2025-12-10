import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    marksPromise
      .then(res => {
        // If your promise returns an object with .data
        const data = res.data ? res.data : res;
        setMarksData(data);
      })
      .catch(err => console.error(err));
  }, [marksPromise]);

  if (!marksData || marksData.length === 0) return <p>Loading...</p>;

  // Prepare data: average per student
  const marksChartData = marksData.map(student => {
    const avg =
      (student.marks.physics + student.marks.chemistry + student.marks.mathematics) /
      3;
    return {
      name: student.name,
      avg: parseFloat(avg.toFixed(2)),
    };
  });

  const colors = [
    "#BC5090",
    "#003F5C",
    "#58508D",
    "#FF6361",
    "#FFA600",
    "#C608D1",
    "#FF00FE",
    "#FF77FD",
    "#FFA9FD",
    "#F6F6F6",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={marksChartData}
          dataKey="avg"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {marksChartData.map((entry, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MarksChart;
