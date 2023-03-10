import { Box } from '@mui/material';
import React from 'react';
import CreativeAccordion from '../CreativeAccordion/CreativeAccordion';
import SectionTitle from "../SectionTitle/SectionTitle";

const FAQ = () => {
    return (
        <Box
            sx={{ mb: 8, mt: '2rem' }}
        >
            <SectionTitle
                title='Frequently Asked'
                colored='Question'
            ></SectionTitle>
            <Box>
                <CreativeAccordion></CreativeAccordion>
            </Box>
        </Box>
    );
};

export default FAQ;