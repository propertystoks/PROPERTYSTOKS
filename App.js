import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { area: "Vaishali Nagar", type: "Flat", price: 5200 },
    { area: "Vaishali Nagar", type: "Plot", price: 6800 }
  ]);

  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");

  const addData = () => {
    if (!area || !price) return;
    setData([...data, { area, type: "Flat", price: Number(price) }]);
    setArea("");
    setPrice("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Property Price App</h1>

      <input
        placeholder="Area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addData}>Add</button>

      <ul>
        {data.map((d, i) => (
          <li key={i}>
            {d.area} - ₹{d.price}
          </li>
        ))}
      </ul>
    </div>
  );
}