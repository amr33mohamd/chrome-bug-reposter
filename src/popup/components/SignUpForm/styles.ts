export const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: 300,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    input: {
        padding: '8px 10px',
        fontSize: 14,
        border: '1px solid #ccc',
        borderRadius: 4,
        outline: 'none',
    },
    button: {
        padding: '10px',
        backgroundColor: '#10b981',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
    },
    linkContainer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },

    link: {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        color: '#2563eb',
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: 12,
    },
};
