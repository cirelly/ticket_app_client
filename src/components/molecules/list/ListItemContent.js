import React from 'react';

//atoms
import ListItemIco from "../../atoms/list/ListItemIco";
import ListItemInfo from "../../atoms/list/ListItemInfo";

const ListItemContent = ({Icon, text}) => {

    return(

        <React.Fragment>

            <ListItemIco Icon={Icon} />
            <ListItemInfo text={text} />

        </React.Fragment>

    )

}

export default ListItemContent;