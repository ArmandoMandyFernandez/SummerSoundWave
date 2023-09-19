import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return code ? <HomePage code={code}/> : <LoginPage />
}

export default App;
