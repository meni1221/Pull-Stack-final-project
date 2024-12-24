import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TerrorEventDetailsSpaceDTO {
  _id: string;
  total: number;
}

interface GraphProps {
  data: TerrorEventDetailsSpaceDTO[];
}

export default function DetailsSpaceWithGraph({ data }: GraphProps) {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setFilteredCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredData = filteredCategories.length
    ? data.filter((item) => filteredCategories.includes(item._id))
    : data;

  const chartData = {
    labels: filteredData.map((item) => item._id),
    datasets: [
      {
        data: filteredData.map((item) => item.total),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "rgba(119, 139, 212, 0.23)",
        padding: "20px",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "20px", color: "#333" }}>
        Total Kills by Attack Type
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {data.map((item) => (
          <Button
            sx={{ fontSize: "12px", padding: "3px 5px" }}
            key={item._id}
            variant={
              filteredCategories.includes(item._id) ? "contained" : "outlined"
            }
            onClick={() => toggleCategory(item._id)}
          >
            {item._id}
          </Button>
        ))}
      </Stack>

      <Bar data={chartData} />
    </Box>
  );
  console.log(chartData);
}
