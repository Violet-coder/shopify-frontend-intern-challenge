import React from "react";
import TextField from "@material-ui/core/TextField";
import "./styles.css";


class Input extends React.Component {  
    render() {
      const {nominationList, searchInput, handleChange} = this.props;
      return (
        <div className="searchForm">
        <h1 id = "input-title">Nominate your favourite films</h1>
        <p id = "input-subtitle">Search below to nominate your top 5 favorite movies</p>
        {nominationList.length < 5 ? <TextField
          name= "searchInput"
          defaultValue={searchInput || ""}
          onChange={handleChange}
          className="input"
          margin="normal"
          id="outlined-basic" 
          label="Movie"
          variant="outlined"
        /> : <TextField
        name= "searchInput"
        // defaultValue= " "
        className="input"
        margin="normal"
        id="outlined-basic" 
        label="Movie"
        variant="outlined"
        inputProps={
					{ readOnly: true}
				}
      />}
        {/* <TextField
          name= "searchInput"
          defaultValue={searchInput || ""}
          onChange={handleChange}
          className="input"
          margin="normal"
          id="outlined-basic" 
          label="Movie"
          variant="outlined"
        />        */}
        </div>
      );
    }
  }
  
  export default Input;