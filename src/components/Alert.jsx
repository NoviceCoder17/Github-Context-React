import { useContext } from "react"
import GitHubContext from "../context/Github/githubContext"

function Alert(){
    const githubContext=useContext(GitHubContext)
    return(
        <>
         {githubContext.alert !== null && <p className={`alert-${githubContext.alert.type}`}>{githubContext.alert.msg}</p>}
        </>      
    )
}

export default Alert