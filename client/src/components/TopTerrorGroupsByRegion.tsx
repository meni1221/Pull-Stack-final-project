import { useState, useEffect } from "react";
import { Box, Typography, Stack, MenuItem, TextField } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"; 
import "leaflet/dist/leaflet.css";
import { getData } from "../services/dataService";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface TerrorGroup {
  gname: string;
  total: number;
  lat: number;
  long: number;
  region: string;
}


interface MapProps {
  urlToMakeGetRequest: string
}

interface RegionData {
  _id: string;
}
export default function TopTerrorGroupsByRegion({urlToMakeGetRequest}: MapProps) {
  const [region, setRegion] = useState<string>("");
  const [terrorGroups, setTerrorGroups] = useState<TerrorGroup[]>([]);
  const [regionsNames, setRegionsNames] = useState<RegionData[]>([]);
  console.log(region, terrorGroups, regionsNames);
  

  const fetchRegionsName = async () => {
    const data = await getData(`http://localhost:8181/getRegionsName`);
    setRegionsNames(data);
  };
  useEffect(() => {
    fetchRegionsName(); 
  }, []);
  
  
  const fetchTerrorGroups = async (region: string) => {    
    const data = await getData(`${urlToMakeGetRequest}?regionName=${region}`);
    setTerrorGroups(data);
  };
  
  useEffect(() => {
    fetchTerrorGroups(region); 
  }, [region]);

  const chartData = {
    labels: terrorGroups.map((group) => group.gname),
    datasets: [
      {
        label: "Incidents",
        data: terrorGroups.map((group) => group.total),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Terror Groups" } },
      y: { title: { display: true, text: "Number of Incidents" } },
    },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px", color: "#333" }}>
        Top Terror Groups by Region
      </Typography>

      <Stack direction="row" spacing={2} sx={{ marginBottom: "20px" }}>
        <TextField
          select
          label="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          helperText="Select a region"
        >
          {regionsNames.map((regionName) => (
            <MenuItem key={regionName._id} value={regionName._id} onClick={() => setRegion(regionName._id)}>
              {regionName._id}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Bar data={chartData} options={options} />

      <Box sx={{ marginTop: "40px", width: "100%", height: "400px" }}>
        <MapContainer center={[0, 0]} zoom={2} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
          {terrorGroups.map((terrorGroup) => (
            <Marker
              key={terrorGroup.gname}
              position={terrorGroup.lat && terrorGroup.long ? [terrorGroup.lat, terrorGroup.long] : [0, 0]}
              eventHandlers={{
                click: () => {
                  setRegion(terrorGroup.region);
                },
              }}
            >
              <Popup>{terrorGroup.region}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
}
