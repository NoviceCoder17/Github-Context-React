import { useState } from "react"
import Alert from "./Alert"

function Search({clearUsers, searchUsers, alert,showAlert}){
    const [username,setUsername]= useState("")
    //name of the i/p field and the state name should be same
    const onChangeHandler= (e)=>{
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(username=="") return showAlert({type:"danger", msg: "Username cannot be empty"})
        searchUsers(username)
    }

    return (
        <div className="header">
        <h1>Github Search Engine</h1>
        <Alert alert={alert}/>
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
        <button className="clear" onClick={clearUsers}>Clear</button>
        </div>
    )

}

export default Search
