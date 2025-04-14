import React from "react";
import ReactDOM from "react-dom/client";

const getRandomColor = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "black",
    "LimeGreen",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const textStyle = (fontSize = "16px") => ({
    color: getRandomColor(),
    fontSize,
    margin: "5px 0",
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Times New Roman",
        lineHeight: "2",
      }}
    >
      <h1 style={textStyle("32px")}>Hello World</h1>
      <h2 style={textStyle()}>My Name is YOURNAME HERE</h2>
      <p style={textStyle()}>I am a handsome/pretty human being</p>
      <p style={textStyle()}>I love to learn JavaScript</p>
      <p style={textStyle()}>I am a super high quality student</p>
      <p style={textStyle()}>I am going to be a super star</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
