import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';

const CreativeAccordion = () => {
    return (
        <Box>
            <Accordion
                sx={{
                    boxShadow: 'none',
                    border: '1px solid #ESEAF4',

                    p: 2,
                    '& .MuiAccordionSummary-content': {
                        color: 'primary.green'
                    }
                }}
            >
                <AccordionSummary
                    sx={{
                        '& p': {
                            color: 'primary.main',
                            fontWeight: 'bold'
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: 'primary.green',
                            }
                        }
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    boxShadow: 'none',
                    border: '1px solid #ESEAF4',

                    p: 2,
                    '& .MuiAccordionSummary-content': {
                        color: 'primary.green'
                    }
                }}
            >
                <AccordionSummary
                    sx={{
                        '& p': {
                            color: 'primary.main',
                            fontWeight: 'bold'
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: 'primary.green',
                            }
                        }
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    boxShadow: 'none',
                    border: '1px solid #ESEAF4',

                    p: 2,
                    '& .MuiAccordionSummary-content': {
                        color: 'primary.green'
                    }
                }}
            >
                <AccordionSummary
                    sx={{
                        '& p': {
                            color: 'primary.main',
                            fontWeight: 'bold'
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: 'primary.green',
                            }
                        }
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default CreativeAccordion;