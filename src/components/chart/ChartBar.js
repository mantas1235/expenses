import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {

let barFillHeight = "0%"

if(props.maxValue>0) {
    barFillHeight=Math.round((props.value/props.MaxValue)*100)+ "%"
}

  return (
    <div className="chart-bar">
      <div className="chat-bar__inner">
        <div className="chat-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chat-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
