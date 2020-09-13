import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((response) => response.json())
      .then((data) =>
        data.forEach((item) => {
          console.log(item.name);
        })
      )
      .then((data) => setItems(data));
  }, []);

  return <div>hello</div>;
}

export default App;
