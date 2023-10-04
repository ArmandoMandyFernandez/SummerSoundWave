import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return (
        <>
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
