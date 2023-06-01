import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import { Landing } from "./Landing";
import { Pantalla2 } from './Pantalla2';

function App() {
  return (
    <>
     
    <Routes>
    <Route path="/" element={ <Landing/>}></Route>
      <Route path="/Pantalla2" element={<Pantalla2/>}></Route>
    </Routes>
      
   
      
    
    </>
  );
}

export default App;
