import React from 'react';

const AvailableAppointmentService = ({service,setTitle,setSlots}) => {
    const {name,slots} = service;
    const handleSetAppointmentData =() =>{
        setTitle(name);
        setSlots(slots);
        console.log(slots);
    }
    return (
        <div onClick={handleSetAppointmentData} className="btn-animate rounded-lg shadow-md m-5 cursor-pointer hover:bg-accent hover:text-white ">
        <div className="card-body text-accent hover:text-white ">
            <h2 className="font-semibold text-xl">{name}</h2>
            {slots.length ? <h3 className='text-gray-500 text-sm'>{slots.length} slots are available</h3>:<h3 className='text-red-500 text-sm'>No slots are available. Try another day</h3>}
        </div>
        </div>
    );
};

export default AvailableAppointmentService;