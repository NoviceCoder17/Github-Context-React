import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useContext } from "react"
import Loading from "./Loading"
import GitHubContext from "../context/Github/githubContext"

function User(){
    const githubContext=useContext(GitHubContext)
    const {uname}= useParams()
    useEffect(()=>{
        {console.log(uname)}
        githubContext.fetchUser(uname)
        githubContext.topRepos(uname)
    },[])
    return(
      <>
      {githubContext.loading && <Loading/>}
      {!githubContext.loading && <div className="container">
        <div className="card">
            <img src={githubContext.user.avatar_url} alt="" />
            <h1>{githubContext.user.name}</h1>
            <div className="info">
                <p>{githubContext.user.bio}</p>
            </div>
            <div className="description">
                {githubContext.user.twitter_username && <p>
                   Twitter: <span><a href={`https://twitter.com/${githubContext.user.twitter_username}`} target="_blank"><i className="fa-brands fa-twitter">{""+githubContext.user.twitter_username}</i></a></span> 
                   </p>}
                 {githubContext.user.blog && <p>
                    Website: <span><a href={`https://${githubContext.user.blog}`} target="_blank"><i className="fa-solid fa-blog">{""+githubContext.user.blog}</i></a></span> 
                    </p>}  
                 {githubContext.user.location && <p>
                    Location: <span><i className="fa-solid fa-location-dot">{""+ githubContext.user.location}</i></span> 
                    </p>}   
                    <p>Public Repos: <span><i className="fa-solid fa-flag"></i>{githubContext.user.public_repos} </span> </p>
                    <p>Public Gists: <span><i className="fa-solid fa-flag"></i>{githubContext.user.public_gists} </span> </p>
                    <p>Followers: <span><i className="fa-solid fa-person"></i>{githubContext.user.followers} </span> </p>
                    <p>Following: <span><i className="fa-solid fa-person"></i>{githubContext.user.following} </span> </p>
            </div>

        </div>
        <div className="card2">
            <ol>
                {githubContext.repos.map((ele,i)=>{
                    return(
                        <div key={i}>
                            <h1>{ele.name}</h1>
                            <p>{ele.description}</p>
                            <a href={ele.html_url} target="_blank">Browser Github</a>
                        </div>
                    )
                })}
            </ol>

        </div>
        </div>}
      </>
    )
}

export default User