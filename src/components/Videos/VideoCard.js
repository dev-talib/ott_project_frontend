import React, { useRef, useState, useEffect } from "react";
import "./VideoCard.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function VideoCard({ title, description }) {
    const videoRef = useRef(null);
    const [videoInfo, setVideoInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [videoLoading, setVideoLoading] = useState(true); // Loading state for the video
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/featured`)
          .then(res => {
              setVideoInfo(res.data);
              setLoading(false);
          })
          .catch(err => {
              console.error("Error fetching video:", err);
              setError(err);
              setLoading(false);
          });
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleTimeUpdate = () => {
                if (videoElement.currentTime >= 15) {
                    videoElement.currentTime = 0;
                    videoElement.play();
                }
            };

            videoElement.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [videoRef]);

    const handleVideoLoad = () => {
        setVideoLoading(false); // Set video loading to false when video is loaded
    };

    if (loading) return <p>Loading video...</p>;
    if (error) return <p>Error loading video!</p>;

    return (
      <div className='VideoCard bg-info'>
        {videoLoading && <div className="video-loading">Loading Video...</div>} {/* Loading indicator */}
        <video
          loop
          autoPlay
          muted
          ref={videoRef}
          src={`${process.env.REACT_APP_API_BASE_URL}/post/video/${videoInfo?._id}`}
          onLoadedData={handleVideoLoad} // Event when video is loaded
        ></video> 
        <div className='VideoCard-overlay'>
          <div className='VideoCard-overlay-content'>
            <div className='VideoCard-overlay-title'>{title || videoInfo?.title || 'Featured Short Film'}</div>
            <div className='VideoCard-overlay-description'>
              {description || videoInfo?.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </div>
          </div>
          <Link to={`/watch/${videoInfo?._id}`} >
            <button className="play_btn btn">
              <i className="fa fa-play" aria-hidden="true"></i>
              &nbsp; play
            </button>
          </Link>
        </div>
      </div>
    );
}

export default VideoCard;
