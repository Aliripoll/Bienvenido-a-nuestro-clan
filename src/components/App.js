import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import { SecondScreen } from './SecondScreen';
import { FirstScreen } from './FirstScreen';
import { Landing } from "./Landing";

function App() {
  return (
    <>
     
    <Routes>
    <Route path="/" element={ <Landing/>}></Route>
      <Route path="/FirstScreen" element={<FirstScreen/>}></Route>
      <Route path="/SecondScreen" element={<SecondScreen/>}></Route>
    </Routes>
      
   
      
    
    </>
  );
}

export default App;
