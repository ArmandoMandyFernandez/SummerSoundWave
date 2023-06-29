import { useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <h1>Hello Spotify </h1>
      <Link to="/callback">Login to Spotify</Link>
    </div>
  );
}

export default App;
