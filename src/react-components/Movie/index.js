import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {addNomination} from "../../actions/nomination"

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
        <TableRow className="student" key={movie.Title}>
          <TableCell component="th" scope="row">
            {movie.Title}
          </TableCell>
  
          <TableCell component="th" scope="row">
            {movie.Year}
          </TableCell>
          <TableCell component="th" scope="row">
            {this.inNominationList(movie, nominationList) ? <Button
              variant="contained"
              color="secondary"
              disabled ={true}
            >
              Nominate
            </Button> : <Button
              variant="contained"
              color="secondary"
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