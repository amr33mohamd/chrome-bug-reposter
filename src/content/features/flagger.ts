import { FLAG_CLASS, BTN_CLASS, FLAG_ATTR } from '../core/constants';
import { handleFlagClick } from '../core/handler';

export function injectFlags(nodes: NodeListOf<HTMLElement> = document.querySelectorAll('button, a')) {
    nodes.forEach(el => {
        if (el.hasAttribute(FLAG_ATTR) || el.querySelector(`.${BTN_CLASS}`)) return;

        el.setAttribute(FLAG_ATTR, '1');
        el.classList.add(FLAG_CLASS);
        el.style.position = 'relative';

        const btn = document.createElement('button');
        btn.className = BTN_CLASS;
        btn.textContent = '🚩';
        btn.onclick = ev => handleFlagClick(ev, el);

        el.appendChild(btn);
    });
}

export function clearFlags() {
    document.querySelectorAll<HTMLElement>(`[${FLAG_ATTR}]`).forEach(el => {
        el.classList.remove(FLAG_CLASS);
        el.removeAttribute(FLAG_ATTR);
        el.querySelector(`.${BTN_CLASS}`)?.remove();
    });
}