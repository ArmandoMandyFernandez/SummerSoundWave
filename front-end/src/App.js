import { useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom"

function App() {
  const CLIENT_ID="1f7ca06ee05740d7a725f74de05dbccd"
  const CLIENT_SECRET="799cde9b441248a2bf3be283b44c41b2"
  const REDIRECT_URI="http://localhost:3000"
  const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE="token"

  useEffect(() => {
    function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
    console.log(generateRandomString)

  }, [])



  return (
    <div className="App">
      <h1>Hello Spotify </h1>
      <Link to={`${AUTH_ENDPOINT}?client_id-${CLIENT_ID}:${CLIENT_SECRET}&redirect_uri-${REDIRECT_URI}&response_type-${RESPONSE_TYPE}`}>Login to Spotify</Link>
    </div>
  );
}

export default App;
