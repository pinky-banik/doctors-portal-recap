import React from 'react';
import doctor from '../../assets/images/doctor-small.png'

const AppoinmentCard = () => {
    return (
        <div className="bg-cover bg-appointment md:flex" >
    <div className='hidden md:block'>
        <img src={doctor} alt="" />
    </div>
    <div className="max-w-md text-white my-auto p-5">
        <p className='text-2xl text-accent font-semibold my-3'>Appointment</p>
      <h1 className="mb-5 text-4xl font-bold">Make an appointment Today</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi necessitatibus veniam sed exercitationem, quae tenetur. Iste cupiditate ex eius aperiam nemo vero similique, repudiandae consectetur.</p>
      <button className="btn-animate btn bg-gred">Get Started</button>
    </div>
</div>
    );
};

export default AppoinmentCard;