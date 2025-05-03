export const styles: { [key: string]: React.CSSProperties } = {
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 300,
        fontFamily: 'Arial, sans-serif',
    },
    item: {
        padding: '10px 12px',
        borderBottom: '1px solid #ddd',
        fontSize: 13,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    text: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    domain: {
        marginLeft: 8,
        fontSize: 12,
        color: '#888',
        whiteSpace: 'nowrap',
    },
    note: {
        margin: '4px 0',
        fontSize: 13,
        color: '#333',
    },
    time: {
        fontSize: 11,
        color: '#999',
        marginTop: 2,
    },
    empty: {
        textAlign: 'center',
        fontSize: 13,
        padding: '20px 10px',
        color: '#888',
    },
};