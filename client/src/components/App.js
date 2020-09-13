import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
