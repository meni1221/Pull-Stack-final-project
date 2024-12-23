import { Box, Typography } from "@mui/material";

export default function NoDetailes() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "65vh",
        background: "rgba(119, 139, 212, 0.23)",
        marginBottom: "20px",
        width: "100%",
        textAlign: "center"
      }}
    >
      <Typography variant="h1" component="div" sx={{ flexGrow: 1, color: "white" }}>
        no Data        
      </Typography>
    </Box>
  );
}
