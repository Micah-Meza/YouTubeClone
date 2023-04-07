import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

//Component Imports
/*import SearchBar from './Components/SearchBar/SearchBar';*/



const YouTubePage = () => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);

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
            <h1>Video Homepage for {user.username}.</h1>
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