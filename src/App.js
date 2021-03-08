import React from 'react';
import Stock from './Stock';
import Rgld from './Rgld';
import './App.css';
function App() {
  return (
    <div className="App">
    <h2>GOLD PRICES</h2>
     <Stock />
     <h2>RGLD PRICES</h2> 
     <Rgld />
    
    </div>
  );
}

export default App;
