import React from "react";
import {search} from '../../actions/search'


import Header from "./../Header"; 
import Input from "./../Input";
import Result from "./../Result";
import NominationList from "../NominationList"
import AlertDialog from '../AlertDialog'

class SearchPage extends React.Component {
    state = {
        searchInput: "",
        searchResult: [],
        nominationList:[],
      };

     
    
      handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value 
        });
        search(value, this)


      };
  
    render() {
      return (
        <div className="App">
        <Header title = {'The Shoppies'}/>
        {this.state.nominationList.length < 5 ? <Input title = {'Movie'} searchInput = {this.state.searchInput} handleChange = {this.handleInputChange} />  :  null }
        {this.state.searchInput ? <h3>Result for {this.state.searchInput}</h3> : null}
        {this.state.nominationList.length < 5 ? <Result SearchPage = {this}  ResultList = {this.state.searchResult}/> :  <AlertDialog/> }
        <NominationList SearchPage = {this} nominationList = {this.state.nominationList}/>        
        </div>
      );
    }
  }
  
  export default SearchPage;