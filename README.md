# Finals - Node.js Express App

Final Project Activity IT 412 – Platform Technologies

This repository contains a minimal Node.js + Express back-end for the Platform Technologies final activity.

What the app shows at `/`:
- Full name (from `FULL_NAME` env var or placeholder)
- Class section (from `CLASS_SECTION` env var or placeholder)
- Inspirational quote (from `QUOTE` env var or default)

Quick local run (in Codespace or locally):

```bash
npm install
npm start
# in another terminal
curl http://127.0.0.1:3000
```

Deployment to Render.com (free tier) - summary:
1. Push this repository to GitHub (if not already).
2. Sign in to https://render.com and connect your GitHub account.
3. Click **New → Web Service**.
4. Choose this repository and branch `main`.
5. Build Command: leave blank (Render runs `npm install`) or set `npm install`.
6. Start Command: `npm start`.
7. Render will set the `PORT` env var automatically; add `FULL_NAME`, `CLASS_SECTION`, and `QUOTE` in service Environment settings to customize the page.
8. Create the service — Render will build and deploy.

Notes:
- To customize displayed information without editing code, set the `FULL_NAME`, `CLASS_SECTION`, and `QUOTE` environment variables in Render's dashboard for the service.
- The app is intentionally minimal for the assignment; extend it with templates or static assets if desired.

Troubleshooting:
- If the page is blank locally, ensure `npm install` was run and no other process is using port 3000.
- On Render, check build logs and service dashboard for errors.
