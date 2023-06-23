import axios from 'axios';
import { useEffect, useState } from 'react';

const getAllMovies = () => {
    const [movies, setMovies] = useState([]);
    const count  = 1;

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                headers: {
                    'X-RapidAPI-Key': '8f77d0d2c2msh818f5ebe994f727p189c61jsn2f9a360ed1d1',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
                };
            
                try {
                    const response = await axios.request(options);
                    setMovies(response.data);
                    // console.log(response.data);
                    // return response;
                } catch (error) {
                    console.error(error);
                }
        }
        fetchData();
    }, [count])

    return movies;
}

const getMovie = (id) => {
    const [movie, setMovie] = useState([]);
    // const [id, setId] =useState();
    const countm  = 1;

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/'+id+'',
                headers: {
                    'X-RapidAPI-Key': '62c5718892msh432efeecbabbc24p13d66ejsna6e260459eec',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
                };
            
                try {
                    const response = await axios.request(options);
                    setMovie(response.data);
                    // console.log(response.data);
                    // return response;
                } catch (error) {
                    console.error(error);
                }
        }
        fetchData();
    }, [countm])

    return movie;
}

export {getAllMovies, getMovie}