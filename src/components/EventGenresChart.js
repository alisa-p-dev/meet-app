import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
} from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter(
        (ev) => ev.summary.indexOf(genre) >= 0
      ).length;
      return { name: genre, value };
    });
    return data;
  };
  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const COLORS = ["#2364aa", "#3da5d9", "#73bfb8", "#fec601", "#ea7317"];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart width={400} height={400}>
        <Tooltip />
        <Legend verticalAlign="bottom" />
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          label={true}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;