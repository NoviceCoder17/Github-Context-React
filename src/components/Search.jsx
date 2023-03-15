import { useState } from "react"
import Alert from "./Alert"
import { useContext } from "react"
import GitHubContext from "../context/Github/githubContext"

function Search(){
    const githubContext=useContext(GitHubContext)
    const [username,setUsername]= useState("")
    //name of the i/p field and the state name should be same
    const onChangeHandler= (e)=>{
        // console.log(e.target.value)
        setUsername(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(username=="") return githubContext.showAlert({type:"danger", msg: "Username cannot be empty"})
        githubContext.searchUsers(username)
    }

    return (
        <div className="header">
        <h1>Github Search Engine</h1>
        <Alert/>
        <form onSubmit={onSubmitHandler}>
            <input type="text" 
            name="username" 
            placeholder="Please enter your username" 
            onChange={onChangeHandler}
            value={username}
            //Value is used to link state
            />
            <br/>
            <button className="submit">Search</button>
        </form>
        <br/>
        <button className="clear" onClick={githubContext.clearUsers}>Clear</button>
        </div>
    )

}

export default Search
