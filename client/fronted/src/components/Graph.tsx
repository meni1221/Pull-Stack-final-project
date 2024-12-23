import React, { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import useFetch from "../hooks/useFetch";
import ITerror from "../interface/Terror";

const Graph: React.FC = () => {
  const [terrors, setTerrors] = useState<ITerror[]>([]);
  const { data, GET } = useFetch(
    "http://localhost:8181/api/analysis/deadliest-attack-types/"
  );

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) setTerrors(data);
    else console.log("not buses");
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={terrors}>
        <Bar dataKey="total" fill="red" xAxisId="two" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
