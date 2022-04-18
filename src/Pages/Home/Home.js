import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import HomeTour from './HomeTour';
import './Home.css';

const Home = () => {

    const [tours, setTours]= useState([]);

    useEffect(()=>{
        fetch('tours.json')
        .then(res=>res.json())
        .then(data=>setTours(data.slice(0,3)));
    },[]);

    return (
        <div>
            <div>
            <Banner/>
            </div>
            <h2 className='text-center text-primary my-3'>Tours</h2>
            <div className='tour-container'>
                {
                    tours.map(tour=><HomeTour
                        key={tour.id}
                        tour={tour}
                    ></HomeTour>)
                }
            </div>
        </div>
    );
};

export default Home;