import React from 'react';
import Banner from '../Components/Homepage/Banner';
import Info from './../Components/Homepage/Info';
import ServiceCard from './../Components/Homepage/ServiceCard';
import ExceptionalCard from './../Components/Homepage/ExceptionalCard';
import TestimonialCard from './../Components/Homepage/TestimonialCard';
import AppoinmentCard from '../Components/Homepage/AppoinmentCard';
import ContactCard from './ContactCard';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <ServiceCard/>
            <ExceptionalCard/>
            <AppoinmentCard/>
            <TestimonialCard/>
            <ContactCard/>
        </div>
    );
};

export default Home;