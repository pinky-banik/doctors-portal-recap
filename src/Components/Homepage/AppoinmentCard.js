import React from 'react';
import doctor from '../../assets/images/doctor-small.png'

const AppoinmentCard = () => {
    return (
        <div class="bg-cover bg-appointment md:flex" >
    <div className='hidden md:block'>
        <img src={doctor} alt="" />
    </div>
    <div class="max-w-md text-white my-auto p-5">
        <p className='text-2xl text-accent font-semibold my-3'>Appointment</p>
      <h1 class="mb-5 text-4xl font-bold">Make an appointment Today</h1>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi necessitatibus veniam sed exercitationem, quae tenetur. Iste cupiditate ex eius aperiam nemo vero similique, repudiandae consectetur.</p>
      <button class="btn bg-gred">Get Started</button>
    </div>
</div>
    );
};

export default AppoinmentCard;