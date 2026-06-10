import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import Header from './components/header/Header';
import UserCreate from './pages/User/UserCreate';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [language, setLanguage] = useState(
        localStorage.getItem('language') || 'es'
    );
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Header
                    language={language}
                    setLanguage={setLanguage} />
                <Routes>
                    <Route path="/" element={<Login language={language} />} />
                    <Route path="/login" element={<Login language={language} />} />
                    <Route path="/user/create" element={<UserCreate />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;