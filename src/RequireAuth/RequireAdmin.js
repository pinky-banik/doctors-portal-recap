import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import loader from '../assets/images/22.gif';
import useAdmin from '../Hooks/useAdmin';
import { toast } from 'react-toastify';
 
const RequireAdmin = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user);
    let location = useLocation();
   
    if (loading ||adminLoading ) {
      return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }

    if (!user || !admin)  {
        toast.error('You cannot access to this page');
        return <Navigate to="/" state={{ from: location }} replace  />;
        
      }
 
    return children;
};
 
export default RequireAdmin;