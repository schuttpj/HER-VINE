<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1BWH2_KurtbujrcvHrJdPHJoUNkexYsIP

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your environment variables:
   ```
   VITE_VAPI_API_KEY=your_api_key
   VITE_VAPI_ASSISTANT_ID=your_assistant_id
   VITE_VAPI_PASSWORD=your_password
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update Base Path (if needed):**
   - If your repository name is different, update the `base` path in `vite.config.ts`
   - For repository named "Hervine", it's set to `/Hervine/`
   - For custom domain, change to `/`

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **Automatic Deployment:**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Check the Actions tab to see deployment status
   - Your site will be available at: `https://schuttpj.github.io/HER-VINE/`

### Environment Variables for Production:

For production deployment, you'll need to set environment variables as GitHub Secrets:
- Go to Settings → Secrets and variables → Actions
- Add secrets: `VITE_VAPI_API_KEY`, `VITE_VAPI_ASSISTANT_ID`, `VITE_VAPI_PASSWORD`
- Update the workflow file to use these secrets if needed
