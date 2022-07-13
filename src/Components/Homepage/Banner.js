import React from 'react';
import banner from "../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('./assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-1/2 p-5'>
                <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn bg-gred">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;