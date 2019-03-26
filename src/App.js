import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock";

ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
