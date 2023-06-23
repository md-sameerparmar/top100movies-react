import React from 'react'
import { getMovie } from './api'
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const {id} = useParams();
    const movie = getMovie(id);
    // console.log(movie);
  return (
    <div className='main-movie-detail'>
        {/* {movie.map(m => {
            <h1></h1>
        })} */}
        <h1 className='movie-title'>{movie.rank}. {movie.title}</h1>
        <p className='rating'>IMDb Rating: <span className='color-grey'>{movie.rating}/10</span></p>
        <p className='year'>Year: <span className='color-grey'>{movie.year}</span></p>
        <div className='details-container'>
            <div className='movie-poster'>
                <img className='poster-img' src={movie.image}/>
            </div>
            <div className='movie-detail'>
                <p>{movie.description}</p>
                <p>Genre: <span className='color-grey'>{movie.genre}</span></p>
                <p>Writers: <span className='color-grey'>{movie.writers}</span></p>
                <p>Director: <span className='color-grey'>{movie.director}</span></p>
            </div>
            
        </div>
        <div style={{textAlign: 'center'}}>
            <iframe className='trailer-iframe' src={movie.trailer} title={movie.title} allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default MovieDetail