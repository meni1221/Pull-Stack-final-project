import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ minHeight: "6vh", background: "rgb(67, 90, 171)" }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            FINAL PROJECT
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
