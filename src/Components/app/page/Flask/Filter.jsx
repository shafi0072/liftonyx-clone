import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@material-ui/core/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = () => {
  const [availability, setAvailability] = React.useState({
    inStock: false,
    outOfStock: false,
  });

  const [priceRange, setPriceRange] = React.useState([10, 100]);

  const handleRangeChange = (event, newValue) => {
    setPriceRange(newValue);
    console.log(newValue);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [name]: checked,
      // Mutual exclusivity logic
      [name === "inStock" ? "outOfStock" : "inStock"]: false,
    }));
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className="mt-5 md:me-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Availability
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex items-center">
              <Checkbox {...label} name="inStock" checked={availability.inStock} onChange={handleCheckboxChange} />
              <h1>In stock (4)</h1>
            </div>
            <div className="flex items-center">
              <Checkbox {...label} name="outOfStock" checked={availability.outOfStock} onChange={handleCheckboxChange} />
              <h1>Out of stock (0)</h1>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr className="my-5 w-[80%] ms-2" />
      <div className="md:me-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Price
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={priceRange}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
            />
            <div className="flex gap-2 items-center justify-center">
              <div className="flex border-2 p-1 gap-1">
                <p>RM</p>
                <input
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                  className="w-12"
                  type="number"
                />
              </div>
              <h1>To</h1>
              <div className="flex border-2 p-1 gap-1">
                <p>RM</p>
                <input
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                  className="w-12"
                  type="number"
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Filter;
