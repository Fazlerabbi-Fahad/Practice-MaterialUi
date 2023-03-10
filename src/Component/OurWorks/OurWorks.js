import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import CreativeCards from '../CreativeCards/CreativeCards';
import SectionTitle from "../SectionTitle/SectionTitle";

const OurWorks = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Box
                sx={{
                    marginTop: '4rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <SectionTitle
                    title='Here are some of'
                    colored='our works'
                    sx={{
                        textAlign: 'left'
                    }}
                />
                <Box
                    sx={{
                        marginBottom: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Tabs value={value} onChange={handleChange} centered
                        sx={{
                            textTransform: 'capitalize',
                            '& .MuiTabs-indicator': {
                                dispay: 'none'
                            },
                            '& .Mui-selected': {
                                color: 'primary.green',
                                fontWeight: 'bold'
                            },
                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize'
                            }
                        }}
                    >
                        <Tab label='All' />
                        <Tab label='Web Design' />
                        <Tab label='Mobile App' />
                    </Tabs>
                    <Box>
                        <IconButton
                            sx={{
                                border: `1px solid #959EAD`,
                                mr: 2
                            }}
                            onClick={() => setValue(value - 1)}
                        >
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton
                            sx={{
                                border: `1px solid #959EAD`
                            }}
                            onClick={() => setValue(value + 1)}
                        >
                            <ArrowBackIcon
                                sx={{
                                    transform: 'rotate(180deg)'
                                }}
                            ></ArrowBackIcon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <CreativeCards></CreativeCards>
        </Box>
    );
};

export default OurWorks;