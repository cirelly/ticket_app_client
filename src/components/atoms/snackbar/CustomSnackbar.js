import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomSnackbar = ({ open, type, message, severity, handleClose }) => {

    const classes = useStyles();




    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                anchorOrigin={{'vertical': 'top', 'horizontal': 'center' }}
                onClose={handleClose}
                autoHideDuration={15000}
            >   
                <Alert
                    elevation={6}
                    severity={severity}
                    variant="filled"
                    onClose={handleClose}
                    color={type}
                >
                    {message}
                </Alert>

            </Snackbar>
        </div>
    );
}

export default CustomSnackbar;