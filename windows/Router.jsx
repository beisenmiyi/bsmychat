import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./src/renderer/login/LoginPage";
import MainPage from "./src/renderer/main/MainPage";
import RegisterPage from "./src/renderer/register/RegisterPage";
import ResetPasswordPage from "./src/renderer/resetPassword/ResetPasswordPage";
import { useEffect } from "react";

export default function Router() {

    return (<>
        <BackgroundColor />
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/resetPassword" element={<ResetPasswordPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    </>)
}

function BackgroundColor() {
    const location = useLocation();

    useEffect(() => {
        switch(location.pathname) {
            case "/main":
                document.getElementById("root").style.backgroundColor = "#ffffff";
                break;
            default:
                document.getElementById("root").style.backgroundColor = "#aaffaa";
        }
    }, [location]);

    return null;
}