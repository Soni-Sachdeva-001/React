import React from 'react';
import {Box, Grid, TextField, Typography} from "@material-ui/core";
import './basicInfo.scss';

export const BasicInfo = () => {
    return (
        <Box ml={5} mr={5}>
            <Grid container direction={'row'}>
               <Box>
                <Typography>Product Id :</Typography>
               </Box>
                <Box ml={130}>
                    <Typography>Revised On :</Typography>
                </Box>
            </Grid>

            <Grid container direction={'row'}>
                <Box>
                    <Typography>Revision :</Typography>
                </Box>
                <Box  ml={131}>
                    <Typography>Revised By :</Typography>
                </Box>
            </Grid>
        </Box>
    );
}



