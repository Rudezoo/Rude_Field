import React,{useState,useEffect} from 'react';
import Main from 'Components/Main/Main';
import {authService} from 'Config/myFB';

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
      {init?  <Main isLoggedIn={isLoggedIn}></Main> : "initializing..." }
     

               
    </>

  );

}

export default App;