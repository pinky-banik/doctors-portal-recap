import React from 'react';

const SingleServiceCard = ({service}) => {
    const {id,name,img,description} = service;
    return (
        <div className="card sm:w-3/4 md:w-full bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">
                {name}
            </h2>
            <p>{description}</p>
        </div>
        </div>
    );
};

export default SingleServiceCard;