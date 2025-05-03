import { useState } from 'react';
import { supabase } from '../../../services/supabaseClient';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
    onLogin: () => Promise<void>;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async () => {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);

        if (data.user) {
            chrome.runtime.sendMessage({ type: 'SET_USER', payload: { user_id: data.user.id } });
            await onLogin();
        } else {
            alert(error?.message || 'Login failed');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') login();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login to Bug Reporter</h2>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Email"
                autoComplete="email"
                style={styles.input}
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Password"
                autoComplete="current-password"
                style={styles.input}
            />

            <button onClick={login} disabled={loading} style={styles.button}>
                {loading ? 'Logging in…' : 'Login'}
            </button>
            <p style={styles.linkContainer}>
                Don’t have an account?{' '}
                <button onClick={() => {
                    navigate('/signup');
                }} style={styles.link}>
                    Sign up
                </button>
            </p>
        </div>
    );
};
