import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [value, setValue] = useState("10 Things That Require Zero Talent");

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">JUSTINE LACQUIAN WMDA</h1>
        <Display value={value} />
        <div className="buttons">
          <Button label="7" onClick={() => setValue("Being Coachable")} />
          <Button label="8" onClick={() => setValue("Doing A Little Extra")} />
          <Button label="9" onClick={() => setValue("Being Prepared")} />

          <Button label="4" onClick={() => setValue("Having A Positive Attitude")} />
          <Button label="5" onClick={() => setValue("Being Passionate")} />
          <Button label="6" onClick={() => setValue("Using Good Body Language")} />

          <Button label="1" onClick={() => setValue("Being On Time")} />
          <Button label="2" onClick={() => setValue("Making An Effort")} />
          <Button label="3" onClick={() => setValue("Being High Energy")} />

          <Button label="NAME" onClick={() => setValue("JUSTINE LACQUIAN")} />
          <Button label="0" onClick={() => setValue("Having A Strong Work Ethic")} />
          <Button label="SUBJ" onClick={() => setValue("C-PCIT9")} />
        </div>
      </div>
    </div>
  );
}