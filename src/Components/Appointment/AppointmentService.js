import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentService = ({title,slot}) => {
     const navigate = useNavigate();
     const handleBookings=()=>{
        navigate('/bookings');
     }
    return (
        <div className="shadow-lg shadow-gray-200 m-5 rounded-lg">
        <div className="card-body text-center flex justify-center items-center">
            <div className='pb-10'>
            <h2 className="card-title text-accent">{title}</h2>
            <p>{slot}</p>
            </div>
            <div className="flex justify-center">
            <button className="btn bg-gred uppercase ">Book Appointment</button>
            </div>
        </div>
        </div>
    );
};

export default AppointmentService;