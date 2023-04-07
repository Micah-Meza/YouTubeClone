import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResultsPage= () => {
    const {id}= useParams()
    const [movie, setMovieData] = useState([])

    const getMovieDetails = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/movie_list/${id}/`);
            console.log("Second call movie data details.", response.data)
            setMovieData(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
        }
    }
    
    useEffect(() => {
        getMovieDetails()
    }, []);

    return ( 
        <div>
              <h1>{movie.title}</h1>
                        <h2>{movie.year}</h2>
                        <img src={movie.poster_url} />
                        <p>{movie.plot}</p>
                        <h3>{movie.rating}</h3>
        </div>
     );
}
 
export default MovieDetails;