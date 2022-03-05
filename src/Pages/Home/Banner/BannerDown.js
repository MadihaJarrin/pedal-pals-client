import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import BannerService from './BannerService';
import down1 from '../../../images/down12.png'
import down2 from '../../../images/down2.png'
import down3 from '../../../images/down5.png'
import down4 from '../../../images/down3.png'


const services = [
    {
        name: 'Trusted Bike Store',
        description: 'Rate Customer 4.8',
        img: down1
    },
    {
        name: 'Payment Gateway',
        description: 'Many Paymment Gateway Support ',
        img: down2
    },
    {
        name: '27/7 support ',
        description: 'We Always Ready For You',
        img: down3
    },
    {
        name: 'Management',
        description: 'Best Management System',
        img: down4
    }

]

const BannerDown = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <BannerService
                            key={service.name}
                            service={service}
                        ></BannerService>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default BannerDown;