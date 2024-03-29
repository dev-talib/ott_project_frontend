import React from 'react'
import './Watch.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom' 

function Watch() {
  const { id } = useParams()
  const [video , setVideo] = React.useState({})

  React.useEffect(() => {
    getVideo()
  }
  , [])

  // back button
  const navigate = useNavigate()


  function getVideo() {
    console.log('id:',id)
    axios.get(`/post/${id}`)
    .then(res => {
        setVideo(res.data)
        console.log(res.data)
    })
    .catch(err => console.log(err))
  }
  

  return (
    <div className='WatchContainer'>
      <div className='back_button'>
        <i className="fas fa-arrow-left"  onClick={() => navigate(-1)}></i>
      </div>
        <video 
            controls
            autoPlay
            title='video'
            src={`${process.env.REACT_APP_API_BASE_URL}/post/video/${id}`}
            thumb='thumb'
            subtitle='subtitle'
            description='description'
            controlsList="nodownload"
            
            >
                
        </video>
    </div>    

  )
}

export default Watch