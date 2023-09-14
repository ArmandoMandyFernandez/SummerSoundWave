import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage code={code}/>} />
            </Routes>
        </div>
    );
}

export default App;
