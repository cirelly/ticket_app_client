import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";


export const theme = createTheme({
  typography:{
    button:{
      
    },
    caption:{
      
    },
    h3:{
       //medium title
       fontSize: 30,
       fontWeight: 'bold' 
    },
    h2:{
       //large title
        fontSize: 65,
        fontWeight: 'bold'
    }, 
    h4:{
     
        fontSize: 20
    },
    h5:{
      fontSize: 16
    },
    subtitle1:{
    
        fontSize: 20
    },
    body1:{
       
    }
  },
  palette: {
    type: 'light',
    primary: {
     
      main: '#5c5c5c',
    
    },
    secondary: {
      main: '#697FE2',
    
    }, 
    text: {
      primary: '#5c5c5c',
      secondary: '#697FE2'
    } 
  },
});

export const lightTheme = responsiveFontSizes(theme);

