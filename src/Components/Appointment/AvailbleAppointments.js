import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import AvailableAppointmentService from './AvailableAppointmentService';

const AvailbleAppointments = ({date}) => {
    const [services,setServices] = useState([]);
    const [title,setTitle] = useState('');
    const[slots,setSlots] = useState([]);

   

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div className='py-10 text-center'>
            <h1 className='mt-10 text-center text-2xl font-semibold text-accent'>
            Available Appointments On {format(date,'PP')}
            </h1>
            <p className='p-5 text-gray-600'>Please select a service</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:w-4/5 mx-auto'>
                {
                    services.map(service=>(
                        <AvailableAppointmentService
                        key={service._id}
                        service={service}
                        setTitle={setTitle}
                        setSlots={setSlots}
                        />
                    ))
                }
            </div>
            <div className=' my-10'>
                <h1 className='my-10 py-10 text-center text-2xl font-semibold text-accent'>Available slots for Teeth Orthodontics.</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:w-4/5 mx-auto'>
                {
                    slots.map(slot=><AppointmentService
                    key={slot}
                    slot={slot}
                    title={title}
                    />)
                }
            </div>
            </div>
        </div>
    );
};

export default AvailbleAppointments;