import React from 'react';
import './App.css';

function App() {
  fetch('http://localhost:5000/api/lover/THjapan.jpg')
  .then(response => console.log(response)).then((data) => console.log(data)
  )
  return (
    <div>
      <h1>test</h1>
      <img src="" alt=""/>
    </div>
  );
}

export default App;
