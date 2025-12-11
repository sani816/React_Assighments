import React, { useState } from "react";

function Calculator() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [op, setOp] = useState("Add");
  const [list, setList] = useState([]);

  const calc = () => {
    let a = Number(n1);
    let b = Number(n2);
    let r = 0;

    if (op === "Add") r = a + b;
    if (op === "Subtract") r = a - b;
    if (op === "Multiply") r = a * b;

    setList([...list, r]); // add result
  };

  return (
    <div>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
      <br /><br />
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
      <br /><br />

      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
      </select>

      <br /><br />
      <button onClick={calc}>Perform Action</button>

      {list.map((r, i) => (
        <p key={i}>{r}</p>
      ))}
    </div>
  );
}

export default Calculator;
