import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    title: {
        flexGrow: 0,
        color: "midnightblue",
    },
    colors: {
        backgroundColor: "white"
    }
}));


export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.colors}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <b>FLIGHT</b>LOCAL
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
