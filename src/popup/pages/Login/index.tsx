import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../services/supabaseClient';
export default function Login() {
    const navigate = useNavigate();

    return <LoginForm onLogin={async () => {
        await supabase.auth.getSession(); // ensure session refresh
        navigate('/');
    }} />;
}
