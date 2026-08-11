# Ourflix

A Netflix-style private media showcase platform built with Express.js.

## Folder Structure

```
ourflix/
├── html/         # Page skeleton (index.html)
├── css/          # Stylesheet (style.css)
├── js/           # Client-side logic (script.js)
├── node/         # Express web server (server.js)
└── media/        # Your videos & images (not tracked in git — add locally)
```

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed.

### Setup and Running

1. **Clone the repo**:
   ```bash
   git clone <your-repo-url>
   cd ourflix
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add your media files**:
   - Place your videos and images inside the `media/` folder.
   - This folder is excluded from git — you manage it locally or via cloud storage.

4. **Start the server**:
   ```bash
   node node/server.js
   ```
   *(Or `npm start` if your system allows npm scripts)*

5. **View the site**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This is a Node.js/Express app. It can be deployed to:

- **[Render](https://render.com/)** — Connect your GitHub repo, set Build Command to `npm install`, Start Command to `node node/server.js`.
- **[Railway](https://railway.app/)** — Deploy from GitHub with zero config.
- **VPS (DigitalOcean, AWS, etc.)** — Clone the repo, run `npm install`, use PM2 to keep it running.

> **Note**: The `media/` folder is not included in the repo. Upload your media files to the server manually or use a cloud storage solution (e.g. AWS S3, Cloudflare R2) for production.
