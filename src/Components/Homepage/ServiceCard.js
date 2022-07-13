import React from 'react';
import { serviceData } from '../../Data/Data';
import SingleServiceCard from './SingleServiceCard';

const ServiceCard = () => {
    return (
        <div className='text-center'>
            <h3 className='text-accent font-bold'>OUR SERVICES</h3>
            <h1 className='text-xl font-semibold'>Services We Provide</h1>
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