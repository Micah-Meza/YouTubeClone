import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

//Component Imports
/*import SearchBar from './Components/SearchBar/SearchBar';*/

/*

const YouTubePage = () => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    console.log("I can see you!!!!!")

    useEffect(() => {
        const getVidoes = async () => {
            try{
                let response = await axios.get (`http://127.0.0.1:8000/api/comments/7qrRzNidzIc/`, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setVideos(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        };
        getVidoes();
    }, [token]);

    return (
        <div>
            <h1>Video Homepage</h1>
            {videos &&
            videos.map((video) => (
                <p key = {video.id}>
                    {video.name} {video.video_id} {video.text}
                </p>
            ))}
        </div>
    );
}
 
export default YouTubePage;
*/




const YouTubePage = () => {
    const[movies, setMovies] = useState([])

    const getVideoData = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/comments/');
            console.log("First call movie data.", response.data)
            setMovies(response.data)

        } catch (error) {
            console.log("Something broke", error.message)
            
        }
    }


    return ( 
        <>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={getVideoData}>Get My Data </button>

        <SearchBar/>
        </>
    );
}
 
export default YouTubePage;