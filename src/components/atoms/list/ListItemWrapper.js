import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        "&:hover":{
            backgroundColor: "#d7b634"
        },
        color: "#002e44"
    }

}));

const ListItemWrapper = ({children, onClick, ...props}) => {
    const classes = useStyles();

    return (
        <ListItem button {...props} onClick={onClick} className={classes.root} >
            {children}
        </ListItem>
    )

}


export default ListItemWrapper;