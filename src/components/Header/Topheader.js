import React, {useContext} from 'react'
import './Topheader.css'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'

function Topheader() {
  const { dispatch, user } = useContext(Context)



  return (
    <div className='TopheaderContainer'>
         <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      quicktv
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
   
     <Link to='/'>Home</Link>
     <Link to='/browse'>Browse</Link>
     {user ? <Link to='/upload'>Upload</Link> : ''}
     {user ? <Link to='/' onClick={() => dispatch({type:'LOGOUT'})}>Logout</Link> : (<><Link to='/login'>Login</Link> <Link to='/signup'>Signup</Link></>)}

  </div>
</div>
    </div>
  )
}

export default Topheader