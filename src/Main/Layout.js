import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

const Layout = () => {
    return (
        <Box>
            <Container maxWidth='lg'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>

        </Box>
    );
};

export default Layout;