import React from "react";
import "../Game.css";


const Circle = ({ id, children, onCircleClicked, player }) => {
//  const onclick = (e, id) => {
//  onCircleClicked(id)
//  };
  return (
    <div
    className={`gameCircle ${player}`}
    //  style={{
    //     width: 100,
    //     height: 100,
    //     margin: 10,
    //     borderRadius: "50%",
    //   }} 
    // style={id%2==0?{backgroundColor: 'red'}:{backgroundColor: 'blue'}}
      // onClick={(e) => onclick(e, id)}
      onClick={()=>onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default Circle;
