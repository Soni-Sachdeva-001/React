import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {render} from "react-dom";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            marginRight: 50,
        }
    }),
);

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid>
            <AppBar >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Menu 1
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Menu 2
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Menu 3
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Menu 4
                    </Typography>
                </Toolbar>
            </AppBar>
            </Grid>
        </div>
    );
}