import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {addNomination} from "../../actions/nomination";
import "./styles.css";



class Movie extends React.Component {
    
    inNominationList = (movie, nominationList) => {
        const filteredNominations = nominationList.filter(n => {
        return n.title === movie.Title && n.year === movie.Year;
        });
        if (filteredNominations.length > 0){
            return true
        }else{
            return false
        }
    }
    
    render() {
      const { SearchPage, movie } = this.props;
      const nominationList = SearchPage.state.nominationList
  
      return (
        <TableRow className="movieTable" key={movie.Title}>
          <TableCell className = "tableCell"  component="th" scope="row">
            {movie.Title}
          </TableCell>
  
          <TableCell  className = "tableCell" component="th" scope="row">
            {movie.Year}
          </TableCell>
          <TableCell  className = "tableCell" component="th" scope="row">
            {this.inNominationList(movie, nominationList) ? <Button
              className="nominateButton"
              variant="contained"
              color="secondary"
              disabled ={true}
            >
              Nominate
            </Button> : <Button
              className="nominateButton"
              variant="contained"
              
              onClick = {() => addNomination(SearchPage, movie.Title, movie.Year)}
            >
              Nominate
            </Button>}
          </TableCell>
        </TableRow>
      );
    }
  }
  
  export default Movie;