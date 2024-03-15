import {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [login, setLogin] = useState(false)

    useEffect(() => {
        const nameCookie = getCookie('username')
        const passwordCookie = getCookie('password')

        if (nameCookie && passwordCookie) {
            setLogin(true)
        }
  }, [])

  const handleLogout = () => {
    document.cookie = 'userName=; expires=Sat, 01 Jan 2000 00:00:00 UTC;'
    document.cookie = 'password=; expires=Sat, 01 Jan 2000 00:00:00 UTC;'
    setLogin(false)
  }

  const getCookie = (name) => {
      const value = `; ${document.cookie};`
      const parts = value.split(`; ${name}=`)

      if (parts.length === 2) {
          return parts.pop().split(';').shift()
      }
      return null
  }
  

  return (
    <>
    <nav>
      <Link to={"/"}><h2 className='logo'>Hair Spectacle</h2></Link>
        <div className='nav-content'>
            <Link to={"/explore"}><h4>Explore</h4></Link>
            <Link to={"/add"}><h4>Add</h4></Link>

            <div className="options">
              {login ? (<button className="logout-button2" onClick={handleLogout}>Logout</button>) : (<Link to={"/login"}><button className="login-button2" role="button">Login</button></Link>)}
            </div>
        </div>
      </nav>
    </>
  )
}

