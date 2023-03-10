import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Service from '../Service/Service';

const servicesImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {



    return (
        <Box>
            <SectionTitle title='Provide awesome' colored='Services' sx={{ mb: 8 }}></SectionTitle>

            <Service />

        </Box >
    );
};

export default Services;