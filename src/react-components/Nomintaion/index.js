import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {removeNomination} from "../../actions/nomination"

class Nomintaion extends React.Component {

    render() {
      const { SearchPage, nomination } = this.props;
  
      return (
        <TableRow className="student" key={nomination.title}>
          <TableCell component="th" scope="row">
            {nomination.title}
          </TableCell>
  
          <TableCell component="th" scope="row">
            {nomination.year}
          </TableCell>
          <TableCell component="th" scope="row">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeNomination(SearchPage, nomination)}
            >
              Remove
            </Button>
          </TableCell>
        </TableRow>
      );
    }
  }
  
  export default Nomintaion;