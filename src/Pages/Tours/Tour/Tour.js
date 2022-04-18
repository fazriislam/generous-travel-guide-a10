import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Tours from '../Tours';

const Tour = ({ tour }) => {

    const { place, cost, attractions, img } = tour;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{place}</Card.Title>
                    <Card.Text>{attractions}</Card.Text>
                    <p>{cost}</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tour;