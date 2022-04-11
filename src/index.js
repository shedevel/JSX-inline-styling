import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
let morning = currentTime < 12;
let afternoon = currentTime < 18;

let greeting;
let greetingStyle = { color: "" };
if (morning) {
  greeting = "Good Morning";
  greetingStyle.color = "yellow";
} else if (afternoon) {
  greeting = "Good Afternoon";
  greetingStyle.color = "pink";
} else {
  greeting = "Good Evening";
  greetingStyle.color = "purple";
}

ReactDOM.render(
  <div>
    <h1 style={greetingStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
