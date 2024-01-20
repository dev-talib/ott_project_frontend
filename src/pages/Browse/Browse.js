import React,{useEffect, useState} from 'react'
import './Browse.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Browse() {
  const [videos, setVideos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [search, setSearch] = useState([])
 
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/post/search/?search=${search}`)
        .then(res => {
            setVideos(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
  }, [search])

  const onVideoMouseOver = (e) => {
    e.target.play()
  }
  const onVideoMouseOut = (e) => {
      e.target.pause()
  }

  return (
    <>
    <div className="SearchBox">
       <input type="text" placeholder="search"  onChange={(e)=>{setSearch(e.target.value)}} className="form-control p-2"/>
    </div>
    <div className="Browse container">
      <div className="">
        { videos.map((video,index) =>{
            return (
              <Link to={`/watch/${video._id}`} key={index}>	
                <div className="video-card" key={index}>
                <img 
                    className='item-video'
                    onMouseOver={onVideoMouseOver} 
                    onMouseOut={onVideoMouseOut}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChYV0qY9KbAjNBuuw_kNM-gyVOhBDk-njrfVFdGv4C9q7wiiQAXS8pJb9yypqODxp8hU&usqp=CAU" // URL of the thumbnail or poster image
                    alt="Video Thumbnail"
                  />
                </div> 
              </Link>	

        )})}
      </div> 
    </div>
    </>
  )
}

export default Browse