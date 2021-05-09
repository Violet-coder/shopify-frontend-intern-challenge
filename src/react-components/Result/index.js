import React from "react";
import Movie from "../Movie";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import "./styles.css";



class Result extends React.Component {  
    render() {
      const {searchInput, SearchPage, ResultList} = this.props
      return (
        <div className="result">
         {searchInput ? <h3 id = "resultTitle">Movie results for: <span id = "keyword">{`"${searchInput}"`}</span></h3> : null}       
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