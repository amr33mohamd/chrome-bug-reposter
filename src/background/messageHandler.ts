import { setUserId, getUserId } from './handlers/storage';
import { saveReportToSupabase } from '././handlers/reportHandler';

export function handleMessage(msg: any, sendResponse: any): boolean {
    switch (msg.type) {
        case 'SET_USER':
            if (msg.payload?.user_id) {
                setUserId(msg.payload.user_id);
            }
            return false;

        case 'SAVE_REPORT':
            getUserId().then((user_id) => {
                if (!user_id) return;
                saveReportToSupabase({ ...msg.payload, user_id });
            });
            return false;

        case 'PING_USER':
            getUserId().then((user_id) => {
                sendResponse({ user_id });
            });
            return true;

        default:
            console.warn('Unknown message type:', msg.type);
            return false;
    }
}
