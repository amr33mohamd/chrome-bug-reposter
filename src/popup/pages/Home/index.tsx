import { useEffect, useState } from 'react';
import { supabase } from '../../../services/supabaseClient';
import { ReportList } from '../../components/ReportList';
import { useAuth } from '../../hooks/useAuth';
import { Report } from '../../types/main';
import { styles } from './styles';
export default function Home() {
    const user = useAuth();
    const [reports, setReports] = useState < Report[] > ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id) {
            fetchReports(user.id);
        }
    }, [user]);

    const fetchReports = async (uid: string) => {
        setLoading(true);
        const { data } = await supabase
            .from('bug_reports')
            .select('*')
            .eq('user_id', uid)
            .order('timestamp', { ascending: false });
        setReports(data || []);
        setLoading(false);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        chrome.storage.local.remove('user_id', () => {
            location.reload(); // or redirect to /login if using routing
        });
    };

    if (loading) return <p style={styles.container}>Loading reports...</p>;

    return (
        <div style={styles.container}>
            <div style={styles.header}>

                <div>
                    <h2 style={{ margin: 0 }}>Your Reports</h2>
                    <p style={styles.shortCut}>
                        Press <b>Alt + B</b> to flag broken buttons or links
                    </p>
                </div>
                <button onClick={logout} style={styles.button}>Logout</button>
            </div>
            <ReportList reports={reports} />
        </div>
    );
}
