import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = ({setSidebar}) => {
    setSidebar(false);
    return (
        <div className="drawer drawer-mobile pt-14">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* <!-- Page content here --> */}
            <h2 className='text-3xl text-accent text-center pt-10'>Welcome to your dashboard</h2>
            <Outlet/>
            
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="dashboard" className="drawer-overlay"></label> 
            <ul className="menu p-4 pt-5 overflow-y-auto w-80 bg-base-100 text-base-content ">
            {/* <!-- Sidebar content here --> */}
            <li className='border-b-2'><Link to="/">Home</Link></li>
            <li className='border-b-2'><Link to="/dashboard">My Appointments</Link></li>
            <li className='border-b-2'><Link to="/dashboard/review">My Review</Link></li>
            <li className='border-b-2'><Link to="/dashboard/history">My History</Link></li>
            
            </ul>
  
        </div>
        </div>
    );
};

export default Dashboard;