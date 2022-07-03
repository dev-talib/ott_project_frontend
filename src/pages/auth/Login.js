import React, { useContext } from 'react'
import axios from 'axios'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import {Context} from '../../context/Context'
import {Link} from 'react-router-dom'


function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const navigate = useNavigate()
  const {dispatch, isFecthing} = useContext(Context)

  const handleSubmit = (e) => {
      dispatch({type: 'LOGIN_START'})
      axios.post('https://shrouded-dusk-10991.herokuapp.com/api/auth/login', {
          email,
          password
      })
      .then(res => {
          setError('')
          localStorage.setItem("token",res.data.token)
          dispatch({type:'LOGIN_SUCCESS', payload:res.data.user})
          navigate('/')
          // console.log('token data:',localStorage.getItem("token"))    
      })
      .catch(err => {
          setError(err.response.data.message)
          // console.log(err)
          dispatch({type:'LOGIN_FAILED', payload:err.response.data.message})
      })
  } 
    
  return (
    <div className='login_container'>
        <div className='login_form shadow'>
        {isFecthing ? <h3>Loading...</h3> :''}
        {error ? <h3>{error}</h3> :''}
            <div className='card'>
                <div className='card-body'>
                    <h1>Login</h1>
                    <input 
                        type="text" 
                        className='form-control'
                        placeholder="email" 
                        required
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                     />
                    <input 
                        type="password" 
                        className='form-control'
                        placeholder="password" 
                        required
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                    <hr/>
                    <button className='btn btn-primary'><Link to='/signup'>Signup</Link></button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Login