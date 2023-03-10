import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';


const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122,178,89,0.15)',
    padding: theme.spacing(4),
    margin: '1rem 0',
    clipPath: 'polygon(0 0,100% 0,100% 85%, 0 100%)',
    display: 'flex',
    justifyContent: 'space-between'
}))

const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        lineHeight: '1.2'
                    }}
                >
                    Let's Grow Your Brand<br />To The Next Level
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                    commodo ipsum duis laoreet maecenas. Feugiat{' '}
                </Typography>
                <Button
                    sx={{
                        width: '50%'
                    }}
                >Hire Us</Button>
            </Stack>
            <Box
                sx={{
                    width: '50%',
                    display: ['none', 'none', 'block']
                }}
            >
                <img
                    src="https://i.ibb.co/sPXVMbC/Frame.png" alt="branding"
                    style={{ width: '100%' }}
                />
            </Box>
        </BrandingWrapper >
    );
};

export default Branding;