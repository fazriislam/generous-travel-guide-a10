import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const HomeTour = ({ tour }) => {
    const navigate = useNavigate();

    const { place, cost, details, img } = tour;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Place: {place}</Card.Title>
                    <Button onClick={() => navigate('/tours')} variant="primary">For More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeTour;