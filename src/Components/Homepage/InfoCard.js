import React from 'react';

const InfoCard = ({info}) => {
    const {id,title, description,Icon,background} = info; 
    return (
        <div className={`card lg:card-side shadow-xl p-3 bg-${background} text-white`}>
        <figure><img className='p-3' src={Icon} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        </div>
    );
};

export default InfoCard;