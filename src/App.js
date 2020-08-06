import React from 'react';
import './App.css';
import MainContent from './Components/MainContent/MainContent'
import './App.css'
require('dotenv').config()


console.log(process.env)

function App() {
  return (
    <div className='wrapper'>
      <MainContent />

    </div>
  );
}

export default App;
