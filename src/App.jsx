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
 
  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">JUSTINE LACQUIAN WMDA</h1>
        <Display value="10 Things That Require Zero Talent" />
        <div className="buttons">
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />

          <Button label="4" />
          <Button label="5" />
          <Button label="6" />

          <Button label="1" />
          <Button label="2" />
          <Button label="3" />

          <Button label="NAME" />
          <Button label="0" />
          <Button label="SUBJ" />
        </div>
      </div>
    </div>
  );
}