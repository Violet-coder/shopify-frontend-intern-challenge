const log = console.log

// Function to add a student, needs to be exported
export const search = (userkeyword, SearchPage) => {
    log("searching  with OMDB's API");
    // const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=36fff3ff&'
    const url = `http://www.omdbapi.com/?s=${userkeyword}&apikey=36fff3ff&type=movie`

    // var searchKeyword = {
    //     keyword: userkeyword
    // }
    
    // const request = new Request(url, {
    //     method:"get",
    //     body: JSON.stringify(newApplication),
    //     headers: {
    //         Accept: "application/json, text/plain, */*",
    //         "Content-Type": "application/json"
    //     }
    //     })
    fetch(url)
    .then(res => {
        if (res.status === 200){
            return res.json()
        } else {
            alert("Could not get movie data")
        }
    })
    .then(json => {
        if (json.totalResults){
            console.log(json.Search)
        }
        SearchPage.setState({searchResult: json.Search})
    })
    .catch(error => {
        console.log("Internal server error")
    })
  };
  