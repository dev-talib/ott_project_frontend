import logo from './logo.svg';
import './App.css';
import Topheader from './components/Header/Topheader';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Watch from './pages/Watch/Watch';
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Browse from './pages/Browse/Browse'
import Upload from './pages/Upload/Upload';
import axios from 'axios';
console.log(process.env.REACT_APP_API_BASE_URL);


function App() {
  return (
    <div className="App">
       <Topheader/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/watch/:id" element={<Watch />} /> 
              <Route path="/browse" element={<Browse />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<Signup />} /> 
            </Routes>   
    </div>
  );
}

export default App;
