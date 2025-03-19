import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./src/renderer/login/LoginPage";
import MainPage from "./src/renderer/main/MainPage";
import RegisterPage from "./src/renderer/register/RegisterPage";
import ResetPasswordPage from "./src/renderer/resetPassword/ResetPasswordPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/resetPassword" element={<ResetPasswordPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}