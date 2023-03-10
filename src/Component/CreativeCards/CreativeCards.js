import * as React from 'react';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, useTheme } from '@mui/material';
import { height } from '@mui/system';

const CreativeCards = () => {
    const theme = useTheme();
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px', minWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
                style={{
                    borderRadius: '10px'
                }}
            />
            <CardContent
                sx={{
                    p: 0,
                    pb: 0,
                    pt: 0,
                    '&:last-child': {
                        pb: 0
                    },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <Typography gutterBottom variant="h5" component="div" color='text.secondary'>
                        Web Design
                    </Typography>
                    <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
                        Web Design Research
                    </Typography>
                </Box>
                <IconButton
                    sx={{
                        border: `1px solid ${theme.palette.primary.main}`,
                        height: '30px',
                        width: '30px',
                        '& svg': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CreativeCards;