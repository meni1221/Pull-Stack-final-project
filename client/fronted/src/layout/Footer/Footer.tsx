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
        height: "5vh",
        background: "rgb(67, 90, 171)",
      }}
    >
        <p>© {new Date().getFullYear()} Meni Levi</p>
        </Box>
  );
}
