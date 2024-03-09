import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#0000",
      boxShadow: "0 0 0 0.2rem rgba(0,0,0,0)",
    },
  },
}));

const Currency = () => {
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="fixed bottom-9 z-30  left-[5%] ">
      <FormControl sx={{ m: 1}} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={country}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="BDT">
            Auto Location
          </MenuItem>
          <MenuItem value={"MYR"}>Malaysian Ringgit (MYR)</MenuItem>
          <MenuItem value={"SGD"}>Singapore Dollar (SGD)</MenuItem>
          <MenuItem value={"IDR"}>Indonesian Rupiah  (IDR)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Currency;
