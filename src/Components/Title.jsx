import React from "react";
import "./Title.css";

export default function Title(props) {
  return (
    <div className="title-container">
      <label className="title-label"> {props.text} </label>
    </div>
  );
}
