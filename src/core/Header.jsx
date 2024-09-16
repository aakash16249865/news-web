import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearToken, getUserDetails } from '../shared/services/token/token';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userdetail, setUserdetail] = useState({});
  var isMounted=true;
  const navigate=useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
     if(isMounted){
        setUserdetail(getUserDetails());
     }
     return(()=>isMounted=false);
  },[])

  const logout=()=>{
     clearToken();
     navigate('/')
  }

  return (
    <header>
      <nav className="bg-gray-300 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl mx-7">Today's</h1>
          </div>
          <div className="block md:hidden mx-7">
            <button
              onClick={toggleMenu}
              className="text-3xl focus:outline-none"
            >
              &#9776;
            </button>
          </div>
          <div className={`fixed inset-y-0 left-0 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:relative md:flex bg-gray-300 md:bg-transparent md:space-x-6 space-y-6 md:space-y-0 text-lg w-64 md:w-auto transition-transform duration-300 ease-in-out`}>
            <ul className="flex flex-col md:flex-row">
             <Link to={'/'}> <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">Home</li></Link>
             <Link to={'/politics'}> <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">Politics</li></Link>
             <Link to={'/World'}> <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">World-News</li></Link>
              <Link to={'/movie'}> <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">Movies</li> </Link>
             <Link to={'/sport'}> <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">Sports-News</li></Link>
              <Link to="/login">
              <li className="hover:text-blue-500 cursor-pointer px-6 py-4 md:py-0">Login</li>
              </Link>
              {userdetail?.Role==='user' && 
              <>
              <h1>{userdetail?.name}</h1>
              <h1>{userdetail?.email}</h1>
              <button onClick={logout} className='mx-1'>logout</button>
              </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
