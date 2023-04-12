const RelatedVideos = ({relatedvideos, setVideoId}) => {
    return (
      <div className="related_video">
        {relatedvideos.map((video) => {
          return (
            <div className="related-videos">
              <p>{video.snippet.title}</p>
              <img src={video.snippet.thumbnails.medium.url} alt="videos" onClick={() => setVideoId(video.id.videoId)} />
              <p>{video.snippet.description}</p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default RelatedVideos;