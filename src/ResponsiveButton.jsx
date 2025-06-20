import React from "react";
import "./ResponsvieButton.css"

function ResponsiveButton() {
  return (
     <button className="responsive-button">
        <span className="btn-text">Click Me</span>
        <span className="btn-icon">📱</span>
     </button>   
  );
}

export default ResponsiveButton;