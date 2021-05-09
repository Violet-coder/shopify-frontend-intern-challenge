import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {removeNomination} from "../../actions/nomination"
import './styles.css'

class Nomintaion extends React.Component {

    render() {
      const { SearchPage, nomination } = this.props;
  
      return (
        <TableRow className="tableRow" key={nomination.title}>
          <TableCell className="tableCell" component="th" scope="row">
            {nomination.title}
          </TableCell>
  
          <TableCell className="tableCell" component="th" scope="row">
            {nomination.year}
          </TableCell>
          <TableCell className="tableCell" component="th" scope="row">
            <Button
              className="removeButton"
              variant="contained"
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