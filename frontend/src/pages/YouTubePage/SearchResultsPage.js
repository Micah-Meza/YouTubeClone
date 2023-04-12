import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResultsPage= ({videos}) => {
    const {id}= useParams()
    const [movie, setMovieData] = useState([])

    const getVideoDetails = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=XEEasR7hVhA&key=AIzaSyADVmG2sVhW2zWalfC6wCPU-cIzz4Di07w&part=snippet`);
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
              <h1>{videos.name}</h1>
                        <h2>{videos.video_id}</h2>
                        <img src={videos.id} />
                        <p>{videos.text}</p>
        </div>
     );
}
 
export default SearchResultsPage;