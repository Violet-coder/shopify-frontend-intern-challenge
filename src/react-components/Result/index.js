import React from "react";
import Movie from "../Movie";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";



class Result extends React.Component {  
    render() {
      const {SearchPage, ResultList} = this.props
      return (
        <div className="result">
        {/* <h3>Result for {searchInput}</h3>  */}
        <Table className="movie-list">
          <TableBody>
          {ResultList ? ResultList.map(movie => (
            <Movie
            key = {uid(movie)}
            movie = {movie}
            SearchPage = {SearchPage}
            />
        )) : null}  
        </TableBody>   
        </Table>
       
        

        
        
          
        </div>
      );
    }
  }
  
export default Result;