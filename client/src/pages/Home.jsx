import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import authService from '../services/auth.service'
import userService from '../services/user.service'

function Home() {
  const [users, setUsers] = useState([])
  const history = useHistory()
  const [isLoaded, setIsLoaded] = useState(false)
  const [errorList, setErrorList] = useState()

  useEffect(() => {
    if (authService.isAuthorized()) {
      setIsLoaded(true)
      userService.getUsers().then((userList) => setUsers(userList))
      .catch((error) => {
          setErrorList(error.message)
        })
      .then(() => setIsLoaded(false))
    } else {
      history.replace('/login')
      setUsers([])
    }
  }, [authService.isAuthorized()])

  return (
    <Layout>
      {isLoaded? false : <div>Loading...</div>}
      {errorList? false : <div>{errorList}</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </Layout>
  )
}

export default Home
