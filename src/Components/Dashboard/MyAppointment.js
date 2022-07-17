import React, { useEffect, useState } from 'react';
import loader from '../../assets/images/22.gif';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase/Firebase.init';

const MyAppointment = () => {
    // const[appointments,setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    const {data:appointments,isLoading,refetch} = useQuery(['bookings',user],()=>
    fetch(`http://localhost:4000/booking?patient=${user.email}`)
        .then(res=>res.json()),{
          method : 'GET',
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
          }
        }
    )
    if(isLoading){
        return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
    }
    return (
        <div className='p-10'>
            <h2 className='py-5 text-accent font-bold'>My Appointmnets : {appointments.length}</h2>
            <div className="overflow-x-auto">
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
            appointments.map((appointment,index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;