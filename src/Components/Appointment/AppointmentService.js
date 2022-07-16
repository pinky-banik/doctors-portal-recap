import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import loader from '../../assets/images/22.gif';
import auth from '../../Firebase/Firebase.init';

const AppointmentService = ({_id,title,slot,setTreatment,treatment,date,slots}) => {
    const [openBooking, setBookingOpen] = useState(false);
    const [user,loading] = useAuthState(auth);
    const formattedDate = format(date,'PP');


     const handleSubmit= e =>{
        e.preventDefault();
        console.log(e.target.slot.value);
        setBookingOpen(false);
        const booking={
            treatmentId: _id,
            treatment: title,
            date : formattedDate,
            slot :slot,
            patient : user.email,
            patientName : user.displayName,
            phone : e.target.phone.value,
        }


        fetch('http://localhost:4000/booking',{
            method : 'POST',
            headers :{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success(`Your appointment has been booked on ${formattedDate} at ${slot} for ${data.booking?.treatment}`) ;
            }else{
                toast.error(`You already have an appointment on ${data.booking?.date} for ${data.booking?.treatment}` );
            }
        })
     };

     if (loading ) {
        return <div className='flex h-screen justify-center items-center'><img  src={loader} alt="" /></div>
      }
    return (
        <div className="shadow-lg shadow-gray-200 m-5 rounded-lg">
        <div className="card-body text-center flex justify-center items-center">
            <div className='pb-10'>
            <h2 className="card-title text-accent">{title}</h2>
            <p>{slot}</p>
            </div>
            <div className="flex justify-center">
            {/* -------------modal--------------- */}
            <label onClick={()=>setBookingOpen(true)} htmlFor="booking-modal" className="btn-animate btn bg-gred uppercase">Book Appointment</label>
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
            <input type="text" name="name" placeholder="Full Name" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" value={user.displayName} disabled/>
            <input type="email"  name="email" placeholder="Email" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" value={user.email} disabled/>
            <input type="number" name="phone" placeholder="Phone Number" className="input m-2 input-bordered focus:outline-none border-2 border-primary w-full max-w-xs" required/>
            
            <div>
            <button className="btn-animate btn bg-gred mx-auto" type="submit">Submit</button>
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