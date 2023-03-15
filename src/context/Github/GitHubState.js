import { useReducer } from "react"
import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import { SET_LOADING, SET_USERS,SET_USER, SET_REPOS, SHOW_ALERT } from "../types"
import axios from "axios"


function GitHubState(props) {
    const initialState = {
        users: [], loading: false, user: {}, repos: [], alert: null
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const setLoading =()=> dispatch({type : SET_LOADING})

    async function allUsers() {
        try {
            setLoading()
         const res = await axios.get("https://api.github.com/users")
            dispatch({
                type : SET_USERS,
                payload : res.data
            }) 
        } catch (error) {
          console.log(error)
        }
      }

      const clearUsers=()=>{
        dispatch({
            type:SET_USERS,
            payload:[]
        })
      }

      const searchUsers = async(username)=>{
        try{
          clearUsers()
          setLoading()
          const res= await axios.get(`https://api.github.com/search/users?q=${username}`)
          dispatch({
            type : SET_USERS,
            payload : res.data.items
        }) 
        }
        catch(error){
          console.log(error)
        }
      }
    
      const fetchUser= async(uname)=>{
        try{
          setLoading()
          const res= await axios.get(`https://api.github.com/users/${uname}`)
          console.log(res)
          dispatch({
            type : SET_USER,
            payload : res.data
        }) 
        }
        catch(error){
          console.log(error)
        }
      }

      const topRepos = async(uname)=>{
        try{
          setLoading()
          const res= await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5`)
                
          dispatch({
            type : SET_REPOS,
            payload : res.data
        }) 
        }
        catch(error){
          console.log(error)    
        }
      }

      const showAlert=(alert)=>{
          dispatch({
            type : SHOW_ALERT,
            payload :alert
        }) 
          setTimeout(()=>{
            dispatch({
                type : SHOW_ALERT,
                payload :null
            }) 
          },2500)
        }
    return (
        <GithubContext.Provider value={{ 
            users: state.users,
            loading : state.loading,
            alert : state.alert,
            user : state.user,
            repos : state.repos,
            allUsers,
            searchUsers,
            clearUsers,
            fetchUser,
            topRepos,
            showAlert,
         }}>
            {props.children}
        </GithubContext.Provider>

    )
}

export default GitHubState