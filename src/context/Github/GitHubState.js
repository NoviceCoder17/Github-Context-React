import GitHubContext from "./githubContext"
function GitHubState(props){
//react function

const initialState={
    users, loading,users
}
return(
    <GitHubContext.Provider value={{hello:"dummy"}}>
        {props.children}
    </GitHubContext.Provider>

)

}

export default GitHubState