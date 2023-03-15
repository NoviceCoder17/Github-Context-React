import './App.css';
import React,{useContext, useEffect,useState} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from "axios"
import User from './components/User'
import Contact from './components/Contact'

import{Routes, Route} from "react-router-dom"
import GitHubContext from './context/Github/githubContext'

// React doesn't have all the features/capabilities that a framework should have
// React is a library
// react there is only one page, navigate to through different links(routing)
// Those routes cannot exist
function App() {

  const [users, setUsers]= useState([])
  const [loading, setLoading]=useState(false)
  const[user, setUser]=useState({})
  const[repos, setRepos]=useState([])
  const[alert, setAlert]=useState(null)

  const githubContext=useContext(GitHubContext)

  useEffect(()=>{
    githubContext.allUsers()
  },[])


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home />}/>
        <Route path='/about' element={<h1>About us component</h1>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path= '/user/:uname'element={<User/>}/> 
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;


//Wappalyzer is a plugin
