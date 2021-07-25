import React, { useState } from "react";
import { makeStyles, Drawer, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, useLocation } from "react-router-dom";

//import components for the list
import ListItemWrapper from "../../atoms/list/ListItemWrapper";
import ListWrapper from "../../atoms/list/ListWrapper";
import ListItemContent from "../../molecules/list/ListItemContent";


//icons
import QueueIcon from '@material-ui/icons/Queue';
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@material-ui/icons/Person';
// import FooterSidebar from '../Molecules/FooterSidebar/FooterSidebar'


const drawerWidth = 240;
const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  
  },
  img: {
    display: 'block',
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10
    
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(5),
    justifyContent: "center",
  },
  menuIcon: {
    color: "#fff"
  },
  image: {
    margin: theme.spacing(5),
    width: "150px",
  },
  footer: {

    marginTop: "auto"
  }
}));

const Sidebar = ({open, setOpen}) => {
    const classes = styles();
    const theme = useTheme();
    const history = useHistory();
 

  const options = [
    {
        icon:()=> <HomeIcon />,
        text: "Inicio",
        url: "/",
    },
    {
        icon: ()=> <PersonIcon />,
        text: "Usuarios",
        url: "/customer"
    },
    {
        icon: () => <QueueIcon  />,
        text: "Colas",
        url: "/queue",
    }
  
]


    //function open and close sidebar
    const openHandler = ()=>{
        setOpen(!open)
    }
    


  return (
    
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
      <IconButton
          className={classes.menuIcon}
          onClick={openHandler} >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon  />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      
                        
      </div>
      {/* <img
          className={classes.img}
          src={Crypto}
          alt="Crypto Monitor"
          
          /> */}
      <ListWrapper >
        {options.map((option, index) => {
        const handleClick = () => {
            history.push(option.url);
        
          };


          return (
            <ListItemWrapper style={{color: "#fff"}} key={index} onClick={handleClick}>
              <ListItemContent  Icon={option.icon} text={option.text} />
            </ListItemWrapper>
          );
        })}

      </ListWrapper>

      
      {/* <div className={classes.footer}>
        <FooterSidebar />
      </div> */}
      
    </Drawer>
   
  );
};

export default Sidebar;
