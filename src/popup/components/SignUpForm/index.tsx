import { useState } from 'react';
import { supabase } from '../../../services/supabaseClient';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

interface SignUpFormProps {
    onSignup: () => Promise<void>;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async () => {
        setLoading(true);

        const { data, error } = await supabase.auth.signUp(
            { email, password },
            { emailRedirectTo: '' } // disables email redirection
        );

        setLoading(false);

        if (data.user) {
            chrome.runtime.sendMessage({ type: 'SET_USER', payload: { user_id: data.user.id } });
            onSignup(data.user);
        } else {
            alert(error?.message || 'Signup failed');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') signup();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Create Account</h2>

            <input
                type="email"
                placeholder="Email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="email"
            />

            <input
                type="password"
                placeholder="Password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="new-password"
            />

            <button
                onClick={signup}
                disabled={loading}
                style={{ ...styles.button, opacity: loading ? 0.6 : 1 }}
            >
                {loading ? 'Signing up…' : 'Sign Up'}
            </button>

            <p style={styles.linkContainer}>
                Already have an account?{' '}
                <button onClick={() => {
                    navigate('/login');
                }} style={styles.link}>
                    Log In
                </button>
            </p>
        </div>
    );
};