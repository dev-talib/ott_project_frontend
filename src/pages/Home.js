import React from 'react'
import VideosList from '../components/Videos/VideosList'
import VideoCard from '../components/Videos/VideoCard'

function Home() {
  return (
    <div className='HomeContainer'>
        <VideoCard/>
        <VideosList/>
    </div>
  )
}

export default Home