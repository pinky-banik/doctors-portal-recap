import React from 'react';

const AvailableAppointmentService = ({service,setTitle,setSlots}) => {
    const {name,slots} = service;
    const handleSetAppointmentData =() =>{
        setTitle(name);
        setSlots(slots);
        console.log(slots);
    }
    return (
        <div onClick={handleSetAppointmentData} className="rounded-lg shadow-md m-5 cursor-pointer hover:bg-accent hover:text-white ">
        <div className="card-body text-accent hover:text-white ">
            <h2 className="font-semibold text-xl">{name}</h2>
        </div>
        </div>
    );
};

export default AvailableAppointmentService;