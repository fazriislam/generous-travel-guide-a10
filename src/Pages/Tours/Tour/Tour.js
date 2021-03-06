import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Tour = ({ tour }) => {
    const navigate = useNavigate();

    const { place, cost, details, img } = tour;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='w-100' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Place: {place}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <p>Cost: ${cost}</p>
                    <Button onClick={() => navigate('/booking')} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tour;