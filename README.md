# 🐞 Chrome Extension: Bug Reporter

A production-ready Chrome Extension to report broken UI elements (buttons, links) directly from any webpage. Users can sign up, log in, and submit bug reports that are stored in Supabase. Designed for scale, with robust TypeScript code and a modular React architecture.

---

## 🌟 Features Overview

* 🔍 Scan and highlight all `<button>` and `<a>` elements
* 🚩 Flag broken elements with contextual notes
* 🔐 Sign up & Sign in with Supabase Auth (email/password)
* 📄 View and track submitted reports from the popup
* 📡 Real-time submission with Supabase
* ⌨️ `Alt + B` toggles highlight mode for convenience
* ♻️ Handles SPAs and dynamic DOM updates
* 💡 Clean UI with reusable components

---

## 🧠 TypeScript + Scalable Architecture

This project is designed for long-term maintainability and scalability with clear architectural patterns:

* **TypeScript-first**: Strong typing ensures safety, autocompletion, and confidence during refactoring.

* **Component-based React structure**:

  * `LoginForm`, `SignUpForm`, and `ReportList` components live in separate folders, keeping logic and styling modular and reusable.
  * Pages (`Login`, `Signup`, `Home`) are separated cleanly under `popup/pages/`, each with its own responsibilities.

* **Background script handled independently**:

  * `src/background/index.ts` is the entry point that initializes listeners and handles lifecycle logic.
  * `messageHandler.ts` functions as a router that delegates messages from the content script.
  * All logic for report submission and data persistence is handled inside `handlers/`, e.g.:

    * `reportHandler.ts` deals with report formatting and Supabase submission.
    * `storage.ts` abstracts local/session storage interactions.

* **Updated Content Script Architecture**:

  * `src/content/index.ts` coordinates the entire scanning operation.
  * `core/observer.ts` and `core/handler.ts` modularize how DOM elements are tracked and processed.
  * `features/flagger.ts` manages UI injection and highlight toggling.
  * This modular approach makes it easy to extend behavior (e.g., new rules for detection, advanced user feedback) without rewriting core logic.

* **Message-passing model**:

  * The content script sends structured messages to the background using Chrome messaging APIs.
  * Background processes logic without UI concerns, and popup remains decoupled from runtime context.

* **Shared types and services**:

  * Centralized in `types/main.ts` for consistent communication structures.
  * Supabase integration is abstracted in `services/supabaseClient.ts`, making it reusable across background and popup logic.

These practices make the codebase easy to extend — whether adding features like team roles, admin moderation, or report analytics — without introducing tight coupling or duplication.

---

## 🔐 Auth Flow

* On first use, users can **sign up** via the popup.
* Returning users **sign in** and see their previous reports.
* Auth state is stored securely and persists across sessions.

---

## 📁 Folder Structure

```
chrome-bug-report2/
├── dist/
├── node_modules/
├── public/
├── scripts/
│   └── build-extension.mjs
├── src/
│   ├── background/
│   │   ├── handlers/
│   │   │   ├── reportHandler.ts
│   │   │   └── storage.ts
│   │   ├── index.ts
│   │   └── messageHandler.ts
│   ├── content/
│   │   ├── core/
│   │   │   ├── constants.ts
│   │   │   ├── handler.ts
│   │   │   └── observer.ts
│   │   ├── features/
│   │   │   └── flagger.ts
│   │   ├── style.ts
│   │   └── index.ts
│   ├── popup/
│   │   ├── components/
│   │   │   ├── LoginForm/
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ReportList/
│   │   │   └── SignUpForm/
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── Login/
│   │   │   │   └── index.tsx
│   │   │   ├── Signup/
│   │   │   │   └── index.tsx
│   │   │   ├── Index.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── services/
│   │   └── supabaseClient.ts
│   └── types/
│       └── main.ts
├── .env
├── index.html
├── manifest.json
├── package-lock.json
├── package.json
├── readme.md
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Unified Build System (CI/CD Ready)

This project features a clean, consistent, and production-friendly build setup tailored for Chrome Extensions:

* The **popup frontend** is built using `Vite`, allowing rapid development and optimized production output.
* The **background and content scripts** are separately bundled with `esbuild`, ensuring compatibility with Chrome’s runtime.
* Chrome extensions have isolated environments — this means **background scripts can't directly access frontend environment variables**. To solve this, a custom Node.js build script reads from a single `.env` file and injects the required values during the build.
* The final output is placed in `/dist`, including a copied `manifest.json`, ready for immediate loading into Chrome.

To generate the entire extension in one step:

```bash
npm run build
```

This single command:

* Compiles the popup app
* Bundles background and content scripts
* Injects environment variables
* Assembles a production-ready package

The build pipeline is structured to support future CI/CD automation (e.g., GitHub Actions), ensuring scalability and reliability for development and deployment.

---

## 🚀 Future Roadmap

* 👥 **Team Workspaces**: Multiple users collaborating on shared domain-level issues
* 💪 **Admin Panel**: Filter reports by status, domain, severity
* 🌈 **UI/UX Refinement**: Component library (e.g., shadcn, Tailwind), dark mode
* 📊 **Report Analytics**: Track trends and heatmaps of broken elements
* 📢 **Notifications**: Let users know when issues are updated/resolved

---

## 🔗 Summary

* Built with long-term maintainability in mind
* Uses TypeScript for robust developer experience
* One-command build to output full Chrome extension
* Modular and extensible — ready for collaboration and scaling

Crafted with ❤️ using React, TypeScript, Supabase, and Chrome APIs.
