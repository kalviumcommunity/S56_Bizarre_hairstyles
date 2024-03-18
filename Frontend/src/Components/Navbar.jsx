import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(['userName', 'password','name']);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const usernameCookie = cookies.userName;
    const passwordCookie = cookies.password;

    if (usernameCookie && passwordCookie) {
      setLogin(true);
    }
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('userName');
    removeCookie('password');
    removeCookie("name");
    setLogin(false);
  };

  return (
    <>
      <nav>
        <Link to={'/'}><h2 className='logo'>Hair Spectacle</h2></Link>
        <div className='nav-content'>
          <Link to={'/explore'}><h4>Explore</h4></Link>
          <Link to={'/add'}><h4>Add</h4></Link>

          <div className='options'>
            {login ? (
              <button className='logout-button2' onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to={'/login'}>
                <button className='login-button2' role='button'>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
