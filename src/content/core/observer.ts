let observer: MutationObserver | null = null;
let debounce: ReturnType<typeof setTimeout>;

export function startObserver(highlight: boolean, inject: () => void) {
  stopObserver();
  observer = new MutationObserver(muts => {
    const relevant = muts.some(m =>
      [...m.addedNodes, ...m.removedNodes].some(
        n => n.nodeType === 1 && !(n as HTMLElement).classList.contains('flag-btn')
      )
    );
    if (!relevant) return;

    clearTimeout(debounce);
    debounce = setTimeout(() => highlight && inject(), 200);
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

export function stopObserver() {
  observer?.disconnect();
  observer = null;
}