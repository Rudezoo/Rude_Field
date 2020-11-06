import React,{useState,useEffect} from 'react';
import Main from 'Components/Main/Main';
import {authService} from 'Config/myFB';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  const [init, setinit] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setisLoggedIn(true);   
      }else{
        setisLoggedIn(false);
      }
      setinit(true);
    });
  },[]);

  return (

    <>  
      <ThemeProvider theme={darkTheme}> 
         {init?  <Main isLoggedIn={isLoggedIn}></Main> : "initializing..." }
      </ThemeProvider>
     
     

               
    </>

  );

}

export default App;