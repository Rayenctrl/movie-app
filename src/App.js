import './App.css';
import React, { useState } from "react";
import AddMovie from "./Component/addMovie/addMovie";
import MovieList from "./Component/MovieList";
import Search from "./Component/Search/Search";
import MovieData from "./Component/data";
import Title from "./Component/Title";
import { Route,Switch } from 'react-router-dom';



function App() {
  const [movies, setMovies] = useState(MovieData)
  const [searchInput, setSearchInput] = useState("");
  const [searchRate, setSearchRate] = useState(0);
   const addMovie = (x) => setMovies([...movies, x]);

   const home =()=>(
     <div>
    <Search
    setSearchInput={setSearchInput}
    searchRate={searchRate}
    setSearchRate={setSearchRate}
  />
  <MovieList
    movies={movies}
  />
  <AddMovie addMovie={addMovie} />
  </div>
   )
  return (
    <div className="App">
      
      <div>
        <Switch>
        <Route path={`/Trailer/:title`}
          render={(props)=> <Title data={movies}{...props}/>}/>
        <Route path="/" component={home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
