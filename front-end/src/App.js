import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={
                        code ? (<HomePage code={code} />) : (<Navigate to="/login" />)
                    }
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
