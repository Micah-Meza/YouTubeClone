import React from "react";




const VideoCard = (props) => {
    
    let videos= `https://www.youtube.com/embed/${props.videoId}`
    console.log("search_result:",props.searchResults)
      
    if(props.searchResults){
    
    return ( 
      <>
    <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={videos} frameborder="0"></iframe>

     </>
    );
    } else {
      return <h4> Not Available</h4>
    } 
       
  }
 
export default VideoCard;