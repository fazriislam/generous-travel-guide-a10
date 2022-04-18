import React, { useEffect, useState } from 'react';
import Tour from './Tour/Tour';
import './Tours.css';



const Tours = () => {
    const [tours, setTours]= useState([]);

    useEffect(()=>{
        fetch('tours.json')
        .then(res=>res.json())
        .then(data=>setTours(data));
    },[]);
    console.log(tours);
    return (
        <div className='tours-container'>
            <h2>Tours: {tours.length}</h2>
            <div className='tour-container'>
            {
                tours.map(tour=><Tour
                    key={tour.id}
                    tour={tour}
                ></Tour>)
            }
            </div>
        </div>
    );
};

export default Tours;