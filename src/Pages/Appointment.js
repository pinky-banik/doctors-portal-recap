import React, { useState } from 'react';
import AppointmentBanner from '../Components/Appointment/AppointmentBanner';
import AvailbleAppointments from '../Components/Appointment/AvailbleAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='pt-10'>

            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailbleAppointments date={date}/>
        </div>
    );
};

export default Appointment;