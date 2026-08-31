# AI Confluence 2026 dashboard

A responsive single-page registration dashboard inspired by the supplied event notice.

## Run it

Open `index.html` in a modern browser. For the smoothest local development experience, serve this folder with any simple static server.

## Project structure

- `index.html` — semantic page structure, modal, registration form and responsive layout hooks.
- `styles.css` — visual system, desktop/mobile layout and component styles.
- `script.js` — event catalogue, category filtering and modal population.
- `assets/ai-confluence-poster.jpg` — supplied poster; its QR code is shown in every event modal.

## Registration behaviour

The site intentionally has no direct registration form. Every event detail panel displays the official QR code from the supplied notice, which opens the Google Form used for registration.
