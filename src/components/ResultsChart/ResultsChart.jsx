import React from "react";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayesha",
    physics: 92,
    chemistry: 65,
    mathematics: 58,
  },
  {
    id: 2,
    name: "Rahim",
    physics: 60,
    chemistry: 85,
    mathematics: 78,
  },
  {
    id: 3,
    name: "Nusrat",
    physics: 55,
    chemistry: 72,
    mathematics: 94,
  },
  {
    id: 4,
    name: "Hasan",
    physics: 88,
    chemistry: 58,
    mathematics: 62,
  },
  {
    id: 5,
    name: "Mehedi",
    physics: 70,
    chemistry: 92,
    mathematics: 60,
  },
  {
    id: 6,
    name: "Sadia",
    physics: 64,
    chemistry: 55,
    mathematics: 90,
  },
  {
    id: 7,
    name: "Imran",
    physics: 95,
    chemistry: 60,
    mathematics: 50,
  },
  {
    id: 8,
    name: "Karim",
    physics: 52,
    chemistry: 88,
    mathematics: 70,
  },
  {
    id: 9,
    name: "Tania",
    physics: 63,
    chemistry: 58,
    mathematics: 92,
  },
  {
    id: 10,
    name: "Fahim",
    physics: 80,
    chemistry: 75,
    mathematics: 62,
  },
];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  const getPath = (x, y, width, height) => {
    return `
      M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2}, ${y + height / 3} ${x + width / 2},${y}
      C${x + width /2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
      Z
    `;
  };
  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const ResultsChart = () => {
  return (
    <div>
      <div className="ml-4 mt-16">
        <LineChart width={1500} height={500} data={resultData}>
          <Line stroke="lime" dataKey="mathematics"></Line>
          <Line stroke="blue" dataKey="physics"></Line>
          <Line stroke="red" dataKey="chemistry"></Line>
          <XAxis dataKey="name" stroke="#f1802d"></XAxis>
          <YAxis stroke="#f1802d"></YAxis>
        </LineChart>
      </div>
      <div className="ml-4 mt-16">
        <BarChart width={1500} height={500} data={resultData}>
          <XAxis dataKey="name" stroke="#f6f6f6"></XAxis>
          <YAxis stroke="#f6f6f6"></YAxis>
          <Bar dataKey="mathematics" fill="#8884d8" shape></Bar>
          <Bar dataKey="physics" fill="#37bd79"></Bar>
          <Bar dataKey="chemistry" fill="#a7e237"></Bar>
        </BarChart>
      </div>

      <div className="ml-4 mt-16">
        <BarChart width={1500} height={500} data={resultData}>
          <XAxis dataKey="name" stroke="#b0d7e1"/>
          <YAxis stroke="#b0d7e1"/>

          <Bar dataKey="mathematics" fill="#8884d8" shape={<TriangleBar></TriangleBar>} />
          <Bar dataKey="physics" fill="#37bd79" shape={<TriangleBar></TriangleBar>}/>
          <Bar dataKey="chemistry" fill="#a7e237" shape={<TriangleBar></TriangleBar>}/>
        </BarChart>
      </div>
    </div>
  );
};

export default ResultsChart;
