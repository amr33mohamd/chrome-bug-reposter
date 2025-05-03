import { Report } from '../../../types/main';
import { styles } from './styles';
interface ReportListProps {
    reports: Report[];
}

export const ReportList = ({ reports }: ReportListProps) => {
    if (!reports.length) {
        return <p style={styles.empty}>No reports yet.</p>;
    }

    return (
        <ul style={styles.list}>
            {reports.map((r) => (
                <li key={r.id} style={styles.item}>
                    <div style={styles.header}>
                        <span style={styles.text}>{r.text}</span>
                        <span style={styles.domain}>@ {new URL(r.url).hostname}</span>
                    </div>
                    <p style={styles.note}>{r.note}</p>
                    <p style={styles.time}>{new Date(r.timestamp).toLocaleString()}</p>
                </li>
            ))}
        </ul>
    );
};