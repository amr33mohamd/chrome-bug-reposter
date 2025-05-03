export const setUserId = (userId: string) => {
    chrome.storage.local.set({ user_id: userId });
};

export const getUserId = (): Promise<string | null> => {
    return new Promise((resolve) => {
        chrome.storage.local.get(['user_id'], (result) => {
            resolve(result.user_id || null);
        });
    });
};
