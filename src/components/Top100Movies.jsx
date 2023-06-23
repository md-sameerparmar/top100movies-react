import React,{useState} from 'react'
import { getAllMovies,getMovie } from './api'
import Poster from './Poster'
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './MovieDetail';

function Top100Movies() {
    const [genre,setGenre] = useState([]);
    const movies = getAllMovies();
    const genreArrays = movies.map(obj => obj.genre);
    const uniqueGenres = [...new Set(genreArrays.flat())];
    // console.log(uniqueGenres);

  return (
    <div className='home'>
      <div>
        <h1 className='title-main'><span className='bg-yellow text-black'>IMDb</span> Top 100 Movies</h1>
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'1em'}}>
        <p>Filter By Genre</p>
        <select style={{width:'150px'}}>
          {uniqueGenres.map((genres, index) => (
            <option key={index}>{genres}</option>
          ))}
        </select>
      </div>

      <div className='movies'>
        {movies.map((movie, key) => 
          <Poster url={movie.image} key={key} id={movie.id}/>
        )}
      </div>
    </div>
  )
}

export default Top100Movies