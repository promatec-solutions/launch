import logo from './logo.svg';
import Launch from './components/launch';

//import installed packages and libraries
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launch/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
