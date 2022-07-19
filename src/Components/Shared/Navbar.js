import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import loader from '../../assets/images/22.gif';
const Navbar = ({sidebar}) => {
  const[user, loading] = useAuthState(auth);
  const image = user?.photoURL;
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () =>{
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/');
  }
    if (loading ) {
      return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }

  const menuItems = 
  <>
        <li className='px-2 focus:bg-acent'><Link to = "/">Home</Link></li>
        <li className='px-2 focus:bg-acent'><Link to = "/about">About</Link></li>
        <li className='px-2 focus:bg-acent'><Link to = "/appointment">Appointment</Link></li>
        <li className='px-2 focus:bg-acent'><Link to = "/reviews">Revicews</Link></li>
        <li className='px-2 focus:bg-acent'><Link to = "/contact">Contact Us</Link></li>
        {
          user &&
          <li className='px-2 focus:bg-acent'><Link to = "/dashboard">Dashboard</Link></li>
        }
        {
          user?.uid ?
          <div className='lg:flex'>
            <div className='avatar'>
              <div className="w-10 my-auto  rounded-full ring ring-accent">
                <img className='object-contain rounded-full' src={image} />
              </div>
            </div>
            <h1 className='p-2 font-bold text-accent px-4'>{user?.displayName}</h1>
            <li><button onClick={handleSignOut} className='btn bg-gred cursor-pointer'>Logout</button></li>
          </div>
          :
          <div className='lg:flex '>
            <li className='px-2 focus:bg-acent'><Link to = "/login">Login</Link></li>
            <li className='px-2 focus:bg-acent'><Link to = "/register">Register</Link></li>

          </div>
        }
        </>
    return (
      <div className="navbar bg-base-100 fixed z-20 flex shadow-lg lg:px-10">
      <div className="navbar-start block">
        <div className="dropdown">
            <label tabIndex="0" htmlFor={sidebar ? '':'dashboard'} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl ">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          {menuItems}
        </ul>
      </div>
      
    </div>
    );
};

export default Navbar;