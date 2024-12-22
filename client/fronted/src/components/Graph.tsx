import React, { useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import useFetch from "../hooks/useFetch";



const Graph: React.FC = () => {
  const { data, GET } = useFetch(
    "http://localhost:8181/api/analysis/deadliest-attack-types/"
  );

  useEffect(() => {
    GET();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <Bar dataKey="uv" fill="green" xAxisId="one" barSize={50} />
        <XAxis xAxisId="one" />
        <Bar dataKey="pv" fill="red" xAxisId="two" barSize={30} />
        <XAxis xAxisId="two" hide />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
