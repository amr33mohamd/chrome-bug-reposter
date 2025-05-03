import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { useAuth } from './hooks/useAuth';
import SignUp from './pages/Signup';

export default function App() {
    const user = useAuth();

    if (user === undefined) return <p style={{ padding: 12 }}>Loading...</p>;

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

