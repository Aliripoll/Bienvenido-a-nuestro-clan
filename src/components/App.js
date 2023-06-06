import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import { FirstScreen } from './FirstScreen';
import { Landing } from "./Landing";

function App() {
  return (
    <>
     
    <Routes>
    <Route path="/" element={ <Landing/>}></Route>
      <Route path="/FirstScreen" element={<FirstScreen/>}></Route>
    </Routes>
      
   
      
    
    </>
  );
}

export default App;
