import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllReviews = (props) => {
    const { _id, name, facilities, location, img, details, price } = props.data;

    return (
        <div>
            <Card className="specialists-card shadow-lg p-3 mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} /> <br />
                <Card.Body>
                    {/* <Card.Title>{name}</Card.Title> */}
                    <h3>{name}</h3><br />
                    {/* <h6>Review: {details}</h6> */}

                    <Card.Text>
                        Review : {details}
                        {/* {details.slice(0, 70)} */}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AllReviews;