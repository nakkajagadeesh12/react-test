import React, { Component, useState } from "react";
import { render } from "react-dom";
import "./style.css";
import Map from "./Map";

const App = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

render(<App />, document.getElementById("root"));
