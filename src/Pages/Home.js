import React from 'react';
import Banner from '../Components/Homepage/Banner';
import Info from './../Components/Homepage/Info';
import ServiceCard from './../Components/Homepage/ServiceCard';
import ExceptionalCard from './../Components/Homepage/ExceptionalCard';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <ServiceCard/>
            <ExceptionalCard/>
        </div>
    );
};

export default Home;