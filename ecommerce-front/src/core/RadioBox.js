import React, { useState } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  // eslint-disable-next-line
  const [value, setvalue] = useState(0);

  const handleChange = event => {
    handleFilters(event.target.value);
    setvalue(event.target.value);
  };

  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={`${p._id}`}
        name={p}
        type="radio"
        className="mr-2 ml-4"
      />
      <label className="form-check-label">{p.name}</label>
    </div>
  ));
};

export default RadioBox;
