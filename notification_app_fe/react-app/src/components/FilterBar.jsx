import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function FilterBar({ filter, setFilter }) {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Type</InputLabel>

      <Select
        value={filter}
        label="Type"
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;