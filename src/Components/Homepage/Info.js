import React from 'react';
import InfoCard from './InfoCard';
import { infoData } from '../../Data/Data';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 m-5 lg:w-11/12 mx-auto'>
            {
                infoData.map(info=><InfoCard
                key= {info.id}
                info={info}
                />)
            }
        </div>
    );
};

export default Info;