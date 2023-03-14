import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Loading from "./Loading"

function User({user, repos, fetchUser, topRepos, loading}){
    const {uname}= useParams()

    useEffect(()=>{
        fetchUser(uname)
        topRepos(uname)

    },[])
    return(
      <>
      {loading && <Loading/>}
      {!loading && <div className="container">
        <div className="card">
            <img src={user.avatar_url} alt="" />
            <h1>{user.name}</h1>
            <div className="info">
                <p>{user.bio}</p>
            </div>
            <div className="description">
                {user.twitter_username && <p>
                   Twitter: <span><a href={`https://twitter.com/${user.twitter_username}`} target="_blank"><i className="fa-brands fa-twitter">{""+user.twitter_username}</i></a></span> 
                   </p>}
                 {user.blog && <p>
                    Website: <span><a href={`https://${user.blog}`} target="_blank"><i className="fa-solid fa-blog">{""+user.blog}</i></a></span> 
                    </p>}  
                 {user.location && <p>
                    Location: <span><i className="fa-solid fa-location-dot">{""+user.location}</i></span> 
                    </p>}   
                    <p>Public Repos: <span><i className="fa-solid fa-flag"></i>{user.public_repos} </span> </p>
                    <p>Public Gists: <span><i className="fa-solid fa-flag"></i>{user.public_gists} </span> </p>
                    <p>Followers: <span><i className="fa-solid fa-person"></i>{user.followers} </span> </p>
                    <p>Following: <span><i className="fa-solid fa-person"></i>{user.following} </span> </p>
            </div>

        </div>
        <div className="card2">
            <ol>
                {repos.map((ele,i)=>{
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