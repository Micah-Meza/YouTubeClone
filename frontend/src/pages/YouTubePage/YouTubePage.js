import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoCard from "../../components/VideoCard/VideoCard";

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
    const[videos, setVideos] = useState([])

        const getVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=XEEasR7hVhA&key=AIzaSyADVmG2sVhW2zWalfC6wCPU-cIzz4Di07w&part=snippet`);
            console.log("It's working here!")
            setVideos(response.data)
  
          }
          catch (error) {
            console.log(error.response.data);
          }
        };



    return ( 
        <>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={getVideos}>Get My Data </button>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <SearchBar videos={videos} />
      
        </>
    );
}
 
export default YouTubePage;