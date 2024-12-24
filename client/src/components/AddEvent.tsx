import { FC, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addEvent } from "../services/dataService";
import ITerror from "../interface/Terror";

const AddEvent: FC = () => {
  const [Terror, setTerrorEvent] = useState<Partial<ITerror>>({
    eventid: 0,
    iyear: 2024,
    imonth: 1,
    iday: 1,
    country_txt: "TLV",
    region_txt: "TLV",
    city: "jeruselm",
    latitude: 0,
    longitude: 0,
    attacktype1_txt: "TLV",
    targtype1_txt: "TLV",
    target1: "TLV",
    gname: "TLV",
    weaptype1_txt: "TLV",
    nkill: 0,
    nwound: 0,
    summary: "A tragic terror attack unfolded today, claiming innocent lives and leaving many injured. Authorities are investigating, urging unity and resilience.",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTerrorEvent((prev) => ({
      ...prev,
      [name]: [
        "latitude",
        "longitude",
        "eventid",
        "iyear",
        "imonth",
        "iday",
        "nkill",
        "nwound",
        "nperps",
      ].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await addEvent(Terror);  
      console.log(Terror);
      
      setOpen(false);       
      if (response) {
      } else {
        console.error("Error creating terror event");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleIcon />}
        onClick={() => setOpen(true)}
        sx={{ height: "7vh" }}
      >
        Add Event
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent sx={{ maxHeight: "70vh", overflowY: "auto" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Event ID"
              name="eventid"
              type="number"
              value={Terror.eventid}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Year"
              name="iyear"
              type="number"
              value={Terror.iyear}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Month"
              name="imonth"
              type="number"
              value={Terror.imonth}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Day"
              name="iday"
              type="number"
              value={Terror.iday}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Country"
              name="country_txt"
              value={Terror.country_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Region"
              name="region_txt"
              value={Terror.region_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={Terror.city}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Latitude"
              name="latitude"
              type="number"
              value={Terror.latitude}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Longitude"
              name="longitude"
              type="number"
              value={Terror.longitude}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Attack Type"
              name="attacktype1_txt"
              value={Terror.attacktype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Target Type"
              name="targtype1_txt"
              value={Terror.targtype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Target"
              name="target1"
              value={Terror.target1}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Group Name"
              name="gname"
              value={Terror.gname}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Weapon Type"
              name="weaptype1_txt"
              value={Terror.weaptype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Number Killed"
              name="nkill"
              type="number"
              value={Terror.nkill}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Number Wounded"
              name="nwound"
              type="number"
              value={Terror.nwound}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Summary"
              name="summary"
              value={Terror.summary}
              required
              multiline
              rows={4}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={handleSubmit}
          >
            Add Event
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export { AddEvent };
