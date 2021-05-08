import React from "react";
import TextField from "@material-ui/core/TextField";


class Input extends React.Component {  
    render() {
      const {title,searchInput, handleChange} = this.props;
      return (
        <div className="searchForm">
        <h2>{title}</h2>
        <TextField
          name= "searchInput"
          defaultValue={searchInput || ""}
          onChange={handleChange}
          className="input"
          margin="normal"
        />
       

        
        
          
        </div>
      );
    }
  }
  
  export default Input;