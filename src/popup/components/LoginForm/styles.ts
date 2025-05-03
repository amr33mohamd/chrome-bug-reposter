
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
        backgroundColor: '#2563eb',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        opacity: 1,
        transition: 'opacity 0.2s ease',
        disabled: {
            opacity: 0.6,
            cursor: 'not-allowed',
        },
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
