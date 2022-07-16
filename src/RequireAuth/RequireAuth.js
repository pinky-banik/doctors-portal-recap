import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import loader from '../assets/images/22.gif';
 
const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
   
    if (loading ) {
      return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace  />;
      }
 
    return children;
};
 
export default RequireAuth;