import React from "react";
import "./styles.css"


class AlertDialog extends React.Component {
      
    render() {
      return (
        <div class = "alertDialog">
          <h2 id = "title">Thank you for your choices！</h2>
          <h4 class = "subtitle">You have reached the 5 movie nomination limit</h4>
          <h5 class = "subtitle">Remove any movie to nominate a new one </h5>
        </div>
        
        
        
      );
    }
  }
  
export default AlertDialog;