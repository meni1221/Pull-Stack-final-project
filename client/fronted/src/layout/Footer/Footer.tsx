import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "2vh",
        background: "rgb(67, 90, 171)",
      }}
    >
      Created By Meni Levi 2024
    </Box>
  );
}
