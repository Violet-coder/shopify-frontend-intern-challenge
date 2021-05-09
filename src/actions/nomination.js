const log = console.log;

export const addNomination = (searchPage, title, year) => {
    const nominationList = searchPage.state.nominationList;
  
    const movie = {
      title: title,
      year: year
    };
    
    nominationList.push(movie)
    if (nominationList.length <= 5){
      searchPage.setState({
      nominationList: nominationList
    })
     localStorage.setItem('nominationList', JSON.stringify(nominationList))
    } else {
      // do nothing should not set the state when the nomintaionList exceed 5
    }
   
   
};

export const removeNomination = (searchPage, movie) => {
    
  const filteredNominations = searchPage.state.nominationList.filter(n => {
      return n !== movie;
    });
   
    searchPage.setState({
      nominationList: filteredNominations
    });

    localStorage.setItem('nominationList', JSON.stringify(filteredNominations))
};