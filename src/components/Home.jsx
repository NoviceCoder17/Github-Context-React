import Search from "./Search"
import Users from "./Users"
import Loading from "./Loading"
import { useContext } from "react"
import GitHubContext from "../context/Github/githubContext"

function Home(){
    const githubContext=useContext(GitHubContext)
    return(
        
        <>
        <Search/>
        {githubContext.loading? <Loading/>:""}
        <Users/>
        </>
    )

}

export default Home