import React from 'react'
import axios from 'axios'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  
  const handleSubmit = (e) => {
      setLoading(true);
      e.preventDefault()
      axios.post('https://shrouded-dusk-10991.herokuapp.com/api/auth/signup', {
          username,
          email,
          password
      })
      .then(res => {
          console.log(res)
          setLoading(false);
      })
      .catch(err => {
          console.log(err)
      })
  }    

  return (
    <div className='signup_container'>
        <div className='signup_form shadow'>
            <div className='card'>
                <div className='card-body'>
                    <h1>signup</h1>
                    <input type='text'
                    className='form-control'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />    
                <input 
                   type="text" 
                   className='form-control'
                   placeholder="email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} />
                <input 
                   type="password" 
                   className='form-control'
                   placeholder="password" 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} />
                    <button className='btn btn-primary' onClick={handleSubmit}>signup</button>
                    <hr/>
                    <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Signup