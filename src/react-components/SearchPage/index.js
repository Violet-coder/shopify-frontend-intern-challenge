import React from "react";
import {search} from '../../actions/search'


import Header from "./../Header"; 
import Input from "./../Input";
import Result from "./../Result";
import NominationList from "../NominationList"
import AlertDialog from '../AlertDialog'
import Footer from "../Footer"

class SearchPage extends React.Component {
    state = {
        searchInput: "",
        searchResult: [],
        nominationList:[],
        searchResultLoaded: false,
        tooManyResults:false
      };

     
    
      handleInputChange = event => {
        this.setState({
          searchResult: [],
          searchResultLoaded: false,
          tooManyResults: false
        })
        
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value 
        });
        search(value, this)

      };

    componentDidMount(){
      const localData = localStorage.getItem('nominationList');
      if (localData){
        const pulldata = JSON.parse(localData)
        this.setState({ nominationList: pulldata})
      }
    }
  
    render() {
      return (
        <div className="App">
        <Header title = {'The Shoppies'}/>     
         <Input nominationList = {this.state.nominationList} searchInput = {this.state.searchInput} handleChange = {this.handleInputChange} />
        <div className = "content">

          {this.state.nominationList.length < 5 ? <Result searchInput = {this.state.searchInput} SearchPage = {this}  ResultList = {this.state.searchResult}/> :  <AlertDialog/> }
          <NominationList SearchPage = {this} nominationList = {this.state.nominationList}/> 
        </div> 
        {/* <Footer className="Footer"/> */}
               
        </div>
      );
    }
  }
  
  export default SearchPage;