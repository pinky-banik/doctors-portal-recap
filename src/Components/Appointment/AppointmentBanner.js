import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import './AppointmentBanner.css';

const AppointmentBanner = ({date, setDate}) => {
    
        
    return (
        <div>
            <div className="hero min-h-screen bg-banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl  m-10 " />
            <div className='shadow-md m-10 md:h-[22rem] md:w-[22rem] flex justify-center items-center rounded-lg'>
            <div>
            <DayPicker  className='btn-animate my-selected my-today'
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            </div>
            </div>
        </div>

        </div>

        </div>
    );
};

export default AppointmentBanner;