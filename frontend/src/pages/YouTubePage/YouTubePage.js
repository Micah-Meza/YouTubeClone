import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoCard from "../../components/VideoCard/VideoCard";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { KEY } from "../../components/localKey";
import SearchResultsPage from "./SearchResultsPage";


const YouTubePage = () => {
   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoData, setVideoData] = useState([]);
  const [searches, setSearches] = useState("BadThings");
  const [videoid, setVideoId] = useState("8BMXHQg9WqE");
  const [relatedVideos, setRelatedVideos] = useState();
  
  

  const getEntries = async () => {
    await axios.get(`http://127.0.0.1:8000/api/comments/by_video_id/${videoid}/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  };



  function getVideoData(event) {
    event.preventDefault();
    let response = videoData.filter((video) => {
      if (
        video.snippet.title.toLowerCase().includes(searches) ||
        video.snippet.description.toLowerCase().includes(searches)
      ) {
        return true;
      } else {
        return false;
      }
    });
    console.log(response);
    getVideoData(searches);
  }


  useEffect(() => {
    getVideoData()
  }, []);

  function findSearch(event){
    event.preventDefault()
    getVideoData()
  }
  async function getVideoData() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searches}&key=${KEY}&type=video&maxResults=5&part=snippet`
    );
    setVideoData(response.data.items);

  }

  return (
    <div className = 'container-fluid'>
      <div>
      
      <div className='border-box'><h2>Search Bar:</h2>
      <SearchBar searches= {searches} setSearches= {setSearches} findSearch = {findSearch}/>
      </div>

      <div>
        <VideoCard />
      </div>


     <div>
      <h2>Related Vidoes</h2> 
      <RelatedVideos relatedVideos = {relatedVideos} setVideoId = {setVideoId} />
     </div>
      
      <div>
        <SearchResultsPage />
      </div>
     
      </div>
      
    </div>
  );
};

export default YouTubePage;



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
