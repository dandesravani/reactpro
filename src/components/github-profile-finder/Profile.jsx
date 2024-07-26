import React from "react"
import {SearchInput} from "./Search"

export const Profile = () => {
  const [profileName, set] = React.useState("")
  const [profile, setProfile] = React.useState({
    avatar_url: "",
    publicRepos: 0,
    followers: 0,
    following: 0
  })
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [notFound, setNotFound] = React.useState(false)

  React.useEffect(() => {
    async function fetchProfile() {
      try {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${profileName}`)
        const data = await res.json()

        console.log(data)

        if (data.id) {
          setLoading(false)
          const profile = {
            avatar: data.avatar_url,
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following
          }
          setProfile(profile)
        } else {
          setNotFound(true)
          setProfile({message: data.message, status: data.status})
        }
      } catch (e) {
        setError(e.message)
      }
    }
    fetchProfile()
  }, [profileName])

  if (isLoading) {
    return <div className="loading">Loading</div>
  }
  if (error) {
    return <p className="error">{error}</p>
  }
  return (
    <>
      <SearchInput onSearch={set} />
      <div className="container">
        <img
          className="image"
          src={profile.avatar_url}
          alt={profile.avatar_url}
        />
        <p>Public Repos:{profile.publicRepos}</p>
        <p>Followers:{profile.followers}</p>
        <p>Following:{profile.following}</p>
      </div>
      {notFound ? <p>{profile.message}</p> : null}
    </>
  )
}
