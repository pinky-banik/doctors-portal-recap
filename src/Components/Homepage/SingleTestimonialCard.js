import React from 'react';
import testimonials from './../../Data/Data';

const SingleTestimonialCard = ({testimonial}) => {
    const {quote,name,from,img} = testimonial;
    return (
        <div className="card sm:w-3/4 md:w-full mx-auto bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{quote}</p>
  </div>
  <div className="card card-side ml-5 px-3">
  <figure><img className='ring-[3px] p-[1.5px] ring-accent rounded-full' src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{from}</p>
  </div>
</div>
</div>
    );
};

export default SingleTestimonialCard;