# UX Developer Intern & Web Developer Intern Challenge - Fall 2021

## Deployed link

https://afternoon-lowlands-46284.herokuapp.com

## Implemented Features

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.
- Save nomination lists if the user leaves the page
- Animations for loading, adding/deleting movies, notifications

## Setup

- Clone the app:`git clone git@github.com:Violet-coder/shopify-frontend-intern-challenge.git` or `git clone https://github.com/Violet-coder/shopify-frontend-intern-challenge.git`
- From the root directory `shopify-frontend-intern-challenge` and run following commands to build the React app and start the Express server.

  ```
  # build the React app
  npm run build

  # run the server
  node server.js
  ```

- You should be able to open the webpage in a browser window by entering localhost:5000 in the URL bar.
