import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';


const OProducts = (props) => {
    const { _id, name, img, details, price } = props.data;

    return (

        <div>
            <Card className="specialists-card shadow-lg p-3 mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} /> <br />
                <Card.Body>
                    {/* <Card.Title>{name}</Card.Title> */}
                    <h4>{name}</h4><br />

                    <Card.Text>
                        {details}
                        {/* {details.slice(0, 70)} */}
                    </Card.Text>

                    <h5>Price: BDT {price}</h5>
                    <Link to={`/booking/${_id}`}>
                        <Button variant="primary" className="btn btn-danger"><b>Purchase Now</b></Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>

    );
};

export default OProducts;