import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResultsPage= () => {
    const {id}= useParams()
    const [movie, setMovieData] = useState([])

    const getVideoDetails = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/7qrRzNidzIc/`);
            console.log("Second call movie data details.", response.data)
            setMovieData(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
        }
    }
    
    useEffect(() => {
        getVideoDetails()
    }, []);

    return ( 
        <div>
              <h1>{video.name}</h1>
                        <h2>{video.video_id}</h2>
                        <img src={video.id} />
                        <p>{video.text}</p>
        </div>
     );
}
 
export default SearchResultsPage;