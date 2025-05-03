import { FLAG_CLASS, BTN_CLASS } from './constants';

export function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .${FLAG_CLASS} {
      outline: 2px solid red !important;
      position: relative;
      transition: outline 0.2s ease-in-out;
    }
    .${BTN_CLASS} {
      position: absolute;
      top: -6px;
      right: -6px;
      z-index: 9999;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      font: 12px sans-serif;
      cursor: pointer;
      padding: 2px 5px;
      box-shadow: 0 1px 4px rgba(0,0,0,.2);
    }
  `;
  document.head.appendChild(style);
}