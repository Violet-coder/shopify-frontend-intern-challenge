const log = console.log;

export const addNomination = (searchPage, title, year) => {
    const nomintaionList = searchPage.state.nominationList;
  
    const movie = {
      title: title,
      year: year
    };
    
    nomintaionList.push(movie)
    if (nomintaionList.length <= 5){
      searchPage.setState({
      nominationList: nomintaionList
    })
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
};