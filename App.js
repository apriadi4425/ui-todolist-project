import React from 'react'
import Main from './src/Main'
import { AuthProvider } from './src/provider/AuthProvider'
import 'moment/locale/id';


const App = () => {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
};


export default App;
