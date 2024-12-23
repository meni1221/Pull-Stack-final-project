import { useState, useEffect } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { getData } from "../services/dataService";

interface GroupProps {
  urlToMakeGetRequest: string;
}

export default function GroupsByYear({ urlToMakeGetRequest }: GroupProps) {
  const [year, setYear] = useState<string>("2022");
  const [groups, setGroups] = useState<
    { _id: string; totalIncidents: number }[]
  >([]);

  const fetchGroups = async (selectedYear: string) => {
    const data = await getData(`${urlToMakeGetRequest}?year=${selectedYear}`);
    setGroups(data);
  };

  useEffect(() => {
    fetchGroups(year);
  }, [year]);

  const chartData = {
    labels: groups.map((group) => group._id),
    datasets: [
      {
        label: "Number of Incidents",
        data: groups.map((group) => group.totalIncidents),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px", color: "#333" }}>
        Groups by Year
      </Typography>

      <TextField
        select
        label="Select Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        helperText="Choose a year to see the groups"
        sx={{ marginBottom: "20px" }}
      >
        {["1970", "1971", "2022", "2023"].map((yearOption) => (
          <MenuItem key={yearOption} value={yearOption}>
            {yearOption}
          </MenuItem>
        ))}
      </TextField>

      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            tooltip: { enabled: true },
          },
          scales: {
            x: { title: { display: true, text: "Groups" } },
            y: { title: { display: true, text: "Incidents" } },
          },
        }}
      />
    </Box>
  );
}
