import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import bikeHistry from '../../../images/bg2.png';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './BikeHistory.css'

const reviews = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions.`,
        react: 4
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
        react: 5
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                `,
        react: 3
    },
];

function HomeIcon(props) {
    return (
        <BorderOuterIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </BorderOuterIcon>
    );
}

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const BikeHistory = () => {

    const theme = useTheme();
    const [activeReview, setActiveReview] = React.useState(0);
    const maxSteps = reviews.length;

    const handleNext = () => {
        setActiveReview((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveReview((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12} md={6}>
                    <Typography>
                        <img id='bikehistory'
                            sx={{ borderRight: 1, }}
                            style={{
                                width: 500, height: 580,
                                borderRightStyle: 'ridge',
                                borderBottomStyle: 'solid',
                                borderWidth: '20px', borderColor: '#C6180C',

                            }}
                            src={bikeHistry} alt='' />
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6}
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center', textAlign: 'left',
                    }}

                >
                    <Box>
                        {/* <Typography variant='h5' style={{ fontWeight: 400, color: '#0D305C' }} >

                            <HomeIcon fontSize="large" color="warning" /> Testimonial
                        </Typography> */}
                        <Typography variant='h4' style={{ fontWeight: 600, color: 'black', marginTop: 30 }}>
                            History Of Bike
                        </Typography>
                        <br></br>
                        <Typography variant='h6' style={{ width: 700, fontSize: 16, fontWeight: 300 }}>
                            With the invention of steam engines and bicycles, 19th century scientists quickly realized that combining of these two technologies could substantially improve transport on public roads.First wave of motorized bicycles started appearing only few short years after the premiere of Pierre Michaux famous bicycle pedal bike
                            <br></br>
                            <Typography style={{
                                borderWidth: '8px',
                                borderBottomStyle: 'dashed', borderColor: '#C6180C',
                                width: 250,
                                marginTop: 20,
                                marginBottom: 20,
                                textAlign: 'center'
                            }}>

                            </Typography>
                            One of the most popular motorcycle models of all time is “Honda Super Cub”, which was sold in over 60 million units.
                        </Typography>

                        <Box sx={{ maxWidth: '100%', flexGrow: 1 }} style={{ background: "lightgray", marginRight: 150 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 50,
                                    pl: 2,
                                    bgcolor: 'background.default',
                                }}
                                style={{ background: "lightgray", marginTop: 30, paddingTop: 10 }}
                            >
                                <Typography>{reviews[activeReview].label}</Typography>
                            </Paper>
                            <Box sx={{ height: 120, maxWidth: 500, p: 2 }}>
                                {reviews[activeReview].description}

                                <Box style={{ margin: '0 auto' }}>
                                    <Typography component="legend"

                                    ></Typography>
                                    <StyledRating

                                        defaultValue={reviews[activeReview].react}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                        style={{ marginTop: 25 }}
                                    />
                                </Box>
                            </Box>

                            <MobileStepper
                                style={{ background: "#BA281E", color: "white" }}
                                variant="text"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeReview}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeReview === maxSteps - 1}
                                        style={{ color: "white" }}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeReview === 0} style={{ color: "white" }}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>

                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
};

export default BikeHistory;