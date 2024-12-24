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
  const [terrorEvent, setTerrorEvent] = useState<Partial<ITerror>>({
    eventid: 0,
    iyear: 0,
    imonth: 0,
    iday: 0,
    country_txt: "TLV",
    region_txt: "TLV",
    city: "TLV",
    latitude: 0,
    longitude: 0,
    attacktype1_txt: "TLV",
    targtype1_txt: "TLV",
    target1: "TLV",
    gname: "TLV",
    weaptype1_txt: "TLV",
    nkill: 0,
    nwound: 0,
    summary: "TLV",
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
      const response = await addEvent(terrorEvent);  
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
        Add Terror Event
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add Terror Event</DialogTitle>
        <DialogContent sx={{ maxHeight: "70vh", overflowY: "auto" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Event ID"
              name="eventid"
              type="number"
              value={terrorEvent.eventid}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Year"
              name="iyear"
              type="number"
              value={terrorEvent.iyear}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Month"
              name="imonth"
              type="number"
              value={terrorEvent.imonth}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Day"
              name="iday"
              type="number"
              value={terrorEvent.iday}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Country"
              name="country_txt"
              value={terrorEvent.country_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Region"
              name="region_txt"
              value={terrorEvent.region_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={terrorEvent.city}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Latitude"
              name="latitude"
              type="number"
              value={terrorEvent.latitude}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Longitude"
              name="longitude"
              type="number"
              value={terrorEvent.longitude}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Attack Type"
              name="attacktype1_txt"
              value={terrorEvent.attacktype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Target Type"
              name="targtype1_txt"
              value={terrorEvent.targtype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Target"
              name="target1"
              value={terrorEvent.target1}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Group Name"
              name="gname"
              value={terrorEvent.gname}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Weapon Type"
              name="weaptype1_txt"
              value={terrorEvent.weaptype1_txt}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Number Killed"
              name="nkill"
              type="number"
              value={terrorEvent.nkill}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Number Wounded"
              name="nwound"
              type="number"
              value={terrorEvent.nwound}
              required
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Summary"
              name="summary"
              value={terrorEvent.summary}
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