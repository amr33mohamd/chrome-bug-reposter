import { injectStyles } from './core/style';
import { injectFlags, clearFlags } from './features/flagger';
import { startObserver, stopObserver } from './core/observer';

let highlightMode = false;

function toggleHighlight() {
    highlightMode = !highlightMode;
    if (highlightMode) {
        injectFlags();
        startObserver(highlightMode, injectFlags);
    } else {
        stopObserver();
        clearFlags();
    }
}

(function main() {
    injectStyles();
    window.addEventListener('keydown', e => {
        if (e.altKey && e.key.toLowerCase() === 'b') toggleHighlight();
    });
})();