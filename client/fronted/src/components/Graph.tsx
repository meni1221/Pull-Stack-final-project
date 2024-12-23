import React, { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import useFetch from "../hooks/useFetch";
import ITerror from "../interface/Terror";
import { Tooltip } from "react-leaflet";

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
    <LineChart width={2000} height={300} data={terrors} accessibilityLayer>
      <XAxis dataKey="_id" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      <Tooltip />
    </LineChart>
  );
};

export default Graph;
