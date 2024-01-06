import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [shapes, setShapes] = useState([]);
  const [shape, setShape] = useState("square");
  const handleShapes = () => {
    if (shape === "square") {
      const newShape = [...shapes, shape];
      setShapes(newShape);
    }
    if (shape === "circle") {
      const newShape = [...shapes, shape];
      setShapes(newShape);
    }
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select id="shape" onChange={(e) => setShape(e.target.value)}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleShapes}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((type, i) => {
          return (
            <div key={i} className={type == "square" ? "square" : "circle"}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
