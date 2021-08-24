import React, { useState, useEffect } from "react";

function SearchBar({ stocks, filterItems, checkRadio }) {
  const [val, setVal] = useState("All");
  const [alphacheck, setAlphaChecked] = useState(false);
  const [pricecheck, setPriceChecked] = useState(false);

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphacheck}
          onChange={(e) => {
            setAlphaChecked(true);
            setPriceChecked(false);
            checkRadio(e.target.value);
          }}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={pricecheck}
          onChange={(e) => {
            setPriceChecked(true);
            setAlphaChecked(false);
            console.log(e.target.value);
            checkRadio(e.target.value);
          }}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select
          onChange={(e) => {
            if (e.target.value) {
              console.log(e.target.value);
              setVal((val) => {
                return e.target.value;
              });
              filterItems(e.target.value);
            }
          }}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
