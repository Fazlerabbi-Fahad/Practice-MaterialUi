import { Box } from '@mui/material';
import React from 'react';
import Branding from "../Branding/Branding";
import Brands from '../Brands/Brands';
import FAQ from '../FAQ/FAQ';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';


const Home = () => {
    return (
        <Box>
            <Branding></Branding>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <FAQ></FAQ>
        </Box>
    );
};

export default Home;