import {useState, useEffect} from 'react'
import Navbar from './Navbar'
import loginImg from '../assets/loginImg.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const nameCookie = getCookie('userName')
        const passwordCookie = getCookie('password')

        if (nameCookie && passwordCookie) {
            setLogin(true)
        }
    }, [])

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            document.cookie = `userName=${username}; expires=Fri, 1 April 2799 12:00:00 UTC;`
            document.cookie = `password=${password}; expires=Fri, 1 April 2799 12:00:00 UTC;`

            alert('Successfully LoggedIn!')
            console.log("Logged in")
            setTimeout(() => {
                navigate('/')
                setLogin(true)
            }, 10)
        } else {
            alert('UserName and Password are Required!!')
        }
    }

    const getCookie = (name) => {
        const value = `; ${document.cookie};`
        const parts = value.split(`; ${name}=`)
        
        if (parts.length === 2) {
            return parts.pop().split(';').shift()
        }

        return null
    };

    const handleLogout = () => {
        document.cookie = 'userName=; expires=Sat, 01 January 2000 12:00:00 UTC;'
        document.cookie = 'password=; expires=Sat, 01 January 2000 12:00:00 UTC;'
        setLogin(false)
        console.log("Logged out")
    }

  return (
    <>
        <Navbar login={login} handleLogout={handleLogout}/>
        <img className='login-img' src={loginImg} alt="login Img" />
        {login ? (<div className='logout'>
                    <h2 className='logout-title'>You are already logged in. Do you want to logout?</h2>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                  </div>):
                  (<div className='login'>
                    <h2 className='login-title'>Login</h2>
                    <h3 className='label-inp' htmlFor="username">Username</h3><br />
                    <input className='login-inputBox' type="text" placeholder='Enter Username' onChange={(e) => setUserName(e.target.value)}/>
                    <h3 className='label-inp' htmlFor="password">Password</h3><br />
                    <input className='login-inputBox' type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                    <Link to={"/login"}><button className='login-button' onClick={handleLogin}>Login</button></Link>
                    <Link to="/"><button className="cancel-button">Cancel</button></Link>
                   </div>)}
    </>
  )
}
