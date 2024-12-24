import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "5vh",
        background: "rgb(67, 90, 171)",
        zIndex: 1000, 
        color:"white"
      }}
    >
      <p>© {new Date().getFullYear()} Meni Levi</p>
    </Box>
  );
}
