import React from 'react';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

import Main from './Components/Main/Main';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

const App = () => {

  return (

    <>  
    <ThemeProvider>
      <Main></Main>
    </ThemeProvider>
               
    </>

  );

}

export default App;