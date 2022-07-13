import React from 'react';
import { serviceData } from '../../Data/Data';
import SingleServiceCard from './SingleServiceCard';

const ServiceCard = () => {
    return (
        <div className='text-center my-32'>
            <h3 className='text-accent text-2xl font-bold'>OUR SERVICES</h3>
            <h1 className='text-4xl font-semibold'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 m-5 lg:w-11/12 mx-auto'>
            {
                serviceData.map(service=>
                    <SingleServiceCard
                    key={service.id}
                    service={service}
                    />
                )
            }
            </div>
        </div>
    );
};

export default ServiceCard;