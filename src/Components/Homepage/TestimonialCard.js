import React from 'react';
import testimonials from '../../Data/Data';
import SingleTestimonialCard from './SingleTestimonialCard';

const TestimonialCard = () => {
    return (
        <div className='p-10 lg:w-11/12 mx-auto  m-5 '>
            <h3 className='text-accent text-lg font-bold'>Testimonial</h3>
            <h1 className='text-2xl font-semibold'>What Our Patients Says</h1>
            <div className='grid grid-cols-1 py-5  my-10 md:grid-cols-3 gap-5 mx-auto'>
            {
                testimonials.map(testimonial=>
                    <SingleTestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    />)
            }
            </div>
        </div>
    );
};

export default TestimonialCard;