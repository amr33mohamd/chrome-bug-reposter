export function handleFlagClick(event: MouseEvent, el: HTMLElement) {
  event.preventDefault();
  event.stopPropagation();

  chrome.runtime.sendMessage({ type: 'PING_USER' }, res => {
    if (!res?.user_id) return alert('Please log in first.');
    const note = prompt('Describe the issue:');
    if (!note) return;

    chrome.runtime.sendMessage({
      type: 'SAVE_REPORT',
      payload: {
        url: location.href,
        text: el.textContent,
        note,
        timestamp: new Date().toISOString()
      }
    });
  });
}