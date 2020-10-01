import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import axios from 'axios';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path ="/" component={MovieList}></Route>
      {/* <Route path="/shop/:itemId/valueterm/:moreInfo">
          <Item items={products} />
        </Route> */}
      <Route path=""></Route>
    </div>
  );
}
