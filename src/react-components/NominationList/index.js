import React from "react";
import Nomintaion from "../Nomintaion";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";



class NominationList extends React.Component {  
    render() {
      const {SearchPage, nominationList} = this.props
      return (
        <div className="nominationList">
        <h3>Nominations</h3> 
        <Table className="nomination-list">
          <TableBody>
          {nominationList ? nominationList.map( nomination=> (
            <Nomintaion
            key = {uid(nomination)}
            SearchPage = {SearchPage}
            nomination = {nomination}
            />
        )) : null}  
        </TableBody>   
        </Table>         
        </div>
      );
    }
  }
  
export default NominationList;