import { supabase } from '../../services/supabaseClient';

interface BugReport {
    url: string;
    text: string;
    note: string;
    timestamp: string;
    user_id: string;
}

export async function saveReportToSupabase(report: BugReport) {
    const { url, text, note, timestamp, user_id } = report;

    if (!url || !text || !timestamp) return;

    await supabase.from('bug_reports').insert([
        {
            url: url.slice(0, 2048),
            text: text.slice(0, 500),
            note: note?.slice(0, 1000),
            timestamp,
            user_id
        }
    ]);
}
