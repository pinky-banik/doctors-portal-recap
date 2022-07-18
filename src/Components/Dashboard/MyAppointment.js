import React from 'react';
import loader from '../../assets/images/22.gif';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const {data:appointments,isLoading} = useQuery(['bookings',user],()=>
    fetch(`http://localhost:4000/booking?patient=${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`       
      }     
    })
    .then(res=>{
      console.log(res)
      if(res.status ===401 || res.status===403) //checking if its unauthorized
      {
        signOut(auth);
        navigate('/'); //it unauthorized give back to homepage
      }
      return res.json()
    })
    );
    if(isLoading){
        return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }
    return (
        <div>
            <h2 className='py-5 text-accent font-bold'>My Appointmnets : {appointments.length}</h2>
            <div className="overflow-x-auto">
  {
    appointments.length >0 ?
    <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>index</th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments?.map((appointment,index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>)
        }
    </tbody>
  </table>:
  <div className=''>
    <div className='text-center'>
      <h1 className='text-2xl text-red-500 p-5 font-bold'>You have No appointments</h1>
      <Link to="/appointment"><button  className='btn'>Book Appointments</button></Link>
    </div>
  </div>
  }
</div>
        </div>
    );
};

export default MyAppointment;