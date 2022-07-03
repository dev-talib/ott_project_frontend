import React, { useRef, useState } from "react";
import "./VideoCard.css";
import axios from 'axios'
import {Link} from 'react-router-dom';

function VideoCard({url, title, description, thumb, subtitle}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const [video, setVideo] = useState({});

   
    React.useEffect(() => {
      axios.get('https://shrouded-dusk-10991.herokuapp.com/api/post/featured')
          .then(res => {
              setVideo(res.data)
              console.log(res.data)
          })
          .catch(err => console.log(err))
  }, [])

    const onVideoPress = () => {
        // if (playing) {
        //   videoRef.current.pause();
        //   setPlaying(false);
        // } else {
        //   videoRef.current.play();
        //   setPlaying(true);
        // }
      };


      

  return (
    <div className='VideoCard bg-info'>
      <video
        loop
        autoPlay
        src={video?.video}
      ></video> 
      <div className='VideoCard-overlay'>
        <div className='VideoCard-overlay-content'>
          <div className='VideoCard-overlay-title'>Featured Short Film</div>
          <div className='VideoCard-overlay-description'>
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
          </div>
        </div>
        <Link to={`/watch/${video?._id}`} >
          <button className="play_btn btn">
            <i className="fa fa-play" aria-hidden="true"></i>
            &nbsp; play
          </button>
        </Link>
       
      </div>
     
    </div>
  )
}

export default VideoCard