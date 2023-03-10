import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = ({ image }) => {
    console.log(image);
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 'none',
            pt: 2,
            mx: 'auto',
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
            }
        }}>
            <CardMedia
                height='140'
                image='https://www.wallpapers13.com/wp-content/uploads/2019/07/Assiniboine-Provincial-Park-British-Columbia-Canada-Sunrise-Landscape-Photography-4k-uhd-16-9-desktop-wallpapers-hd-3840x2160-840x525.jpg'
                sx={{
                    width: 'auto',
                    mx: 'auto'
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Web Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;