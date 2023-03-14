import './App.css';
import React,{useContext, useEffect,useState} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import axios from "axios"
import User from './components/User'
import Contact from './components/Contact'
import Alert from './components/Alert';

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

  const searchUsers = async(username)=>{
    try{
      setUsers([])
      setLoading(true)
      const res= await axios.get(`https://api.github.com/search/users?q=${username}`)
      setUsers(res.data.items)
      setLoading(false)
    }
    catch(error){
      alert("Error occured")
      console.log(error)
    }
  }

  const fetchUser= async(uname)=>{
    try{
      setLoading(true)
      const res= await axios.get(`https://api.github.com/users/${uname}`,{
        headers: {
          "Authorization": `Bearer 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`
        }
      })
      setUser(res.data)
      setLoading(false)
    }
    catch(error){
      // alert("Error occured")
      console.log(error)
    }
  }

  const topRepos = async(uname)=>{
    try{
      setLoading(true)
      const res= await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5`,{
        headers: {
          "Authorization": `Bearer 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`
        }
      })
     
      setRepos(res.data)
      setLoading(false)
    }
    catch(error){
      // alert("Error occured")
      console.log(error)
    
    }
  }

  const showAlert=(alert)=>{
    setAlert(alert);
    //After 2.5s the alert will be removed
    setTimeout(()=>{
      setAlert(null)
    },2500)

  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home users={users} loading={loading} searchUsers={searchUsers} alert={alert} showAlert={showAlert}/>}/>
        <Route path='/about' element={<h1>About us component</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path= '/user/:uname'element={<User topRepos={topRepos} fetchUser={fetchUser} user={user} repos={repos} loading={loading}/>}/>
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;


//Wappalyzer is a plugin
