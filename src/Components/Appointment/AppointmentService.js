import { format } from 'date-fns';
import React, { useState } from 'react';

const AppointmentService = ({title,slot,setTreatment,treatment,date,slots}) => {
    const [openBooking, setBookingOpen] = useState(false);
     const handleSubmit= e =>{
        e.preventDefault();
        console.log(e.target.slot.value);
        setBookingOpen(false);
     };
    return (
        <div className="shadow-lg shadow-gray-200 m-5 rounded-lg">
        <div className="card-body text-center flex justify-center items-center">
            <div className='pb-10'>
            <h2 className="card-title text-accent">{title}</h2>
            <p>{slot}</p>
            </div>
            <div className="flex justify-center">
            {/* -------------modal--------------- */}
            <label onClick={()=>setBookingOpen(true)} htmlFor="booking-modal" className="btn bg-gred uppercase">Book Appointment</label>
            {
                openBooking && 
                <div>
                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-5 top-2">✕</label>
            <h3 className="font-bold text-lg mb-3 ">Booking for: {title}</h3>
            <form onSubmit={handleSubmit}>
            <input name="date" type="text" placeholder="Type here" className="input m-2 input-bordered bg-base-200 border-2 border-primary focus:outline-none w-full max-w-xs" value={format(date,'PP')} readOnly/>
            <select name="slot" className="select select-bordered w-full max-w-xs border-2 border-primary focus:outline-none">
            {slots.map(slot=><option value={slot} key={slot}>
                {slot}
            </option>)}
            </select>
            <input type="text" name="name" placeholder="Full Name" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" required/>
            <input type="number" name="number" placeholder="Phone Number" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" required/>
            <input type="email"  name="email" placeholder="Email" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" required/>
            
            <div>
            <button className="btn bg-gred mx-auto" type="submit">Submit</button>
            </div>
            </form>
            
        </div>
        </div>
                </div>
            }
            </div>
        </div>
        </div>
    );
};

export default AppointmentService;