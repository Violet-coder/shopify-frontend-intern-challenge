import React from "react";
import Movie from "../Movie";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./styles.css";


class Result extends React.Component {  
    render() {
      const {searchInput, SearchPage, ResultList} = this.props
      return (
        <div className="result">
         {searchInput ? <h3 id = "resultTitle">Movie results for: <span id = "keyword">{`"${searchInput}"`}</span></h3> : null}
         {searchInput&& !SearchPage.state.searchResultLoaded ? <CircularProgress className="circularProgress" size={60}/> : null} 
         {searchInput&&SearchPage.state.searchResultLoaded&&SearchPage.state.tooManyResults&&ResultList.length<1 ? <SnackbarContent className = "snackbarContent" message={
          'Too many results. \nPlease adjust your search.'
        }/>: null}      
        <Table className="movie-list">
          <TableBody>
          {searchInput&&ResultList ? ResultList.map(movie => (
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