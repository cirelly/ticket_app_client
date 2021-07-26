import React from 'react';
import List from '@material-ui/core/List';

const ListWrapper = ({children}) => {



    return (
        <List>
            {children}
        </List>
    )

}


export default ListWrapper;