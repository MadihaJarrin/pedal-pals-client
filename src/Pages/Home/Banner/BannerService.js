import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const BannerService = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={3} sx={{ mt: -7, mb: 10 }} >
            <Card sx={{ minWidth: 250, border: 0, boxShadow: "gray" }}>

                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '140px', margin: '2px auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <br></br>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                        <br />
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default BannerService;