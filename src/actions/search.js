const log = console.log

// Function to add a student, needs to be exported
export const search = (userkeyword, SearchPage) => {
    log("searching  with OMDB's API");
    // const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=36fff3ff&'
    const url = `https://www.omdbapi.com/?s=${userkeyword}&apikey=36fff3ff&type=movie`
    fetch(url)
    .then(res => {
        if (res.status === 200){
            log("get back")
            setTimeout(function() { SearchPage.setState({searchResultLoaded: true}) }, 1000); 
            return res.json()
        } else {
            alert("Could not get movie data")
        }
    })
    .then(json => {
        console.log(json)
        if (json.Response=="True"){
            SearchPage.setState({searchResult: json.Search})
        }else{
            SearchPage.setState({tooManyResults: true})
        }
    })
    .catch(error => {
        console.log("Internal server error")
    })
  };
  