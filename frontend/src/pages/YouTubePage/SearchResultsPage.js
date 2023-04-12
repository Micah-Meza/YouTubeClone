import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoCard from '../../components/VideoCard/VideoCard';

const SearchResultsPage= ({videos}) => {
    const [searchResults, setSearchResults] = useState([])
    const [videoData, setVideoData] = useState([])

    const getVideoDetails = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchResults}&key=AIzaSyADVmG2sVhW2zWalfC6wCPU-cIzz4Di07w&part=snippet&type=video&maxResults=10`);
            console.log("Testing", response.data)
            setSearchResults(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
        }
    }
    
    useEffect(() => {
        getVideoDetails()
    }, []);

    return ( 
        <div>
            <div> 
                <SearchBar />
            </div>
            <div>
                <VideoCard />
            </div>
           
        </div>
     );
}
 
export default SearchResultsPage;