import React,{useEffect} from 'react'
import axios from 'axios'
import mediaJSON from '../../Data'
import VideoCard from './VideoCard'
import './VideoList.css'
import { Link } from 'react-router-dom'


function VideosList() {
    const [videos, setVideos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/recent`)
          .then(res => {
              setVideos(res.data)
              console.log(res.data)
          })
          .catch(err => console.log(err))
  }, [])
    

    function MouseWheelHandler(e, element) {
        var delta = 0;
        if (typeof e === 'number') {
        delta = e;
        } else {
        if (e.deltaX !== 0) {
        delta = e.deltaX;
        } else {
        delta = e.deltaY;
        }
        e.preventDefault();
        }
       element.scrollLeft -= (delta);
       }
       window.onload = function() {
        var carousel = {};
        carousel.e = document.getElementById('carousel');
        carousel.items = document.getElementById('carousel-items');
        carousel.leftScroll = document.getElementById('left-scroll-button');
        carousel.rightScroll = document.getElementById('right-scroll-button');
        carousel.items.addEventListener("mousewheel", handleMouse, false);
        carousel.items.addEventListener("scroll", scrollEvent);
        carousel.leftScroll.addEventListener("click", leftScrollClick);
        carousel.rightScroll.addEventListener("click", rightScrollClick);
       setLeftScrollOpacity();
        setRightScrollOpacity();
       function handleMouse(e) {
        MouseWheelHandler(e, carousel.items);
        }
       function leftScrollClick() {
        MouseWheelHandler(100, carousel.items);
        }
       function rightScrollClick() {
        MouseWheelHandler(-100, carousel.items);
        }
       function scrollEvent(e) {
        setLeftScrollOpacity();
        setRightScrollOpacity();
        }
       function setLeftScrollOpacity() {
        if (isScrolledAllLeft()) {
        carousel.leftScroll.style.opacity = 0;
        } else {
        carousel.leftScroll.style.opacity = 1;
        }
        }
       function isScrolledAllLeft() {
        if (carousel.items.scrollLeft === 0) {
        return true;
        } else {
        return false;
        }
        }
        function isScrolledAllRight() {
        if (carousel.items.scrollLeft === carousel.items.scrollWidth - carousel.items.clientWidth) {
        return true;
        } else {
        return false;
        }
        
    
    
        }
       function setRightScrollOpacity() {
        if (isScrolledAllRight()) {
        carousel.rightScroll.style.opacity = 0;
        } else {
        carousel.rightScroll.style.opacity = 1;
        }
        }
       }
    //    
  
    const onVideoMouseOver = (e) => {
        e.target.play()
    }
    const onVideoMouseOut = (e) => {
        e.target.pause()
    }


  return (
    <div id="carousel" className="container carousel">
        <div className="control-container">
            <div id="left-scroll-button" className="left-scroll button scroll">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div id="right-scroll-button" className="right-scroll button scroll">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
        <div className="items" id="carousel-items">
            {videos.map((video, index) => {
                return (
								<Link to={`/watch/${video._id}`} key={index}>	
                  <div className="item" key={index}>
                  <img 
                    className='item-video'
                    onMouseOver={onVideoMouseOver} 
                    onMouseOut={onVideoMouseOut}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChYV0qY9KbAjNBuuw_kNM-gyVOhBDk-njrfVFdGv4C9q7wiiQAXS8pJb9yypqODxp8hU&usqp=CAU" // URL of the thumbnail or poster image
                    alt="Video Thumbnail"
                  />
                    <span className="item-load-icon button opacity-none"><i className="fa fa-play"></i></span>
                    <div className="item-description opacity-none">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</div>
                  </div> 
								</Link>	
                )})}      
        </div>   
    </div>
  )
}

export default VideosList