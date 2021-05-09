import React from "react";
import "./styles.css";


class Header extends React.Component {
    render() {
      const { title } = this.props;
  
      return (
        <div className="header">
          <img src = "shopify.png" id = "shopify"></img>
          <h1 id = "title" >{title}</h1>
        </div>
      );
    }
  }
  
  export default Header;