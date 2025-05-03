import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../services/supabaseClient';
import { SignUpForm } from '../../components/SignUpForm';
export default function SignUp() {
    const navigate = useNavigate();

    return <SignUpForm onSignup={async () => {
        await supabase.auth.getSession(); // ensure session refresh
        navigate('/');
    }} />;
}
