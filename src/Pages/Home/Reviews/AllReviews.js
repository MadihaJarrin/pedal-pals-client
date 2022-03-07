import { Rating, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';


const AllReviews = (props) => {
    const { _id, name, facilities, rating, img, details, price } = props.data;
    const [value, setValue] = React.useState(0);
    // const [hover, setHover] = React.useState(-1);
    return (
        <div id='reviews' >
            <Card className="specialists-card shadow-lg p-3 ms-4" style={{ width: '20rem', height: "30rem", borderRadius: "50px" }}>
                <Card.Img variant="top" src={img} /> <br />
                <Card.Body>
                    <h3>{name}</h3><br />
                    <Card.Text>
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}

                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        /><br />

                        Review : {details}
                        {/* {details.slice(0, 70)} */}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AllReviews;