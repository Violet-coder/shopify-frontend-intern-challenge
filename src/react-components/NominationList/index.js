import React from "react";
import Nomintaion from "../Nomintaion";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import "./styles.css"



class NominationList extends React.Component {  
    render() {
      const {SearchPage, nominationList} = this.props
      return (
        <div className="nominationList">
        <h3 id = "nominatedTitle">Nominated {`${nominationList.length}/5`}</h3> 
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