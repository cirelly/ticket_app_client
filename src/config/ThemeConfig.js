import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";


export const theme = createTheme({
  typography:{
    button:{
      
    },
    caption:{
      
    },
    h3:{
       
        
    },
    h2:{
       
        fontSize: 55,
    }, 
    h4:{
     
        fontSize: 12
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
     
      main: '#032854',
    },
    secondary: {
      main: '#ffbc00',
      contrastText: '#032854'
    }, 
    text: {
      primary: '#5c5c5c',
      
    } 
  },
});

export const lightTheme = responsiveFontSizes(theme);

export const darkTheme = createTheme({
  typography:{
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#002e44'
    },
    secondary: {
      main: '#ffbc00'
    }, 
  },
});
