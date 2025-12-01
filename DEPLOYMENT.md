# Firebase Deployment Guide for Yberhood

## Prerequisites
- Firebase CLI installed globally: `npm install -g firebase-tools`
- Firebase account with an existing project
- Logged in to Firebase CLI: `firebase login`

## Step-by-Step Deployment Instructions

### 1. Update Firebase Configuration

**Edit `.firebaserc` file** and replace `your-firebase-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "YOUR_ACTUAL_PROJECT_ID"
  },
  "targets": {
    "YOUR_ACTUAL_PROJECT_ID": {
      "hosting": {
        "yberhood": [
          "yberhood"
        ]
      }
    }
  }
}
```

### 2. Create a New Site in Firebase Console (One-time setup)

Since you already have other apps deployed, you need to add a new site:

**Option A: Using Firebase Console (Recommended)**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting** in the left sidebar
4. Click **Add another site**
5. Enter site name: `yberhood` (or your preferred name)
6. Click **Add site**

**Option B: Using Firebase CLI**
```bash
firebase hosting:sites:create yberhood
```

### 3. Apply the Hosting Target

After creating the site, link it to your project:

```bash
firebase target:apply hosting yberhood yberhood
```

### 4. Build the Production App

```bash
npm run build
```

Or for production build:

```bash
ng build --configuration production
```

### 5. Deploy to Firebase

**Deploy only this app (yberhood):**
```bash
firebase deploy --only hosting:yberhood
```

**Or deploy all hosting sites:**
```bash
firebase deploy --only hosting
```

### 6. Access Your Deployed App

After deployment, your app will be available at:
- `https://yberhood.web.app`
- `https://yberhood.firebaseapp.com`

Or if you used a custom site name, it will be:
- `https://YOUR_SITE_NAME.web.app`
- `https://YOUR_SITE_NAME.firebaseapp.com`

## Quick Deployment Commands

After initial setup, use these commands for future deployments:

```bash
# Build and deploy in one go
npm run build && firebase deploy --only hosting:yberhood

# Or create a custom npm script (add to package.json)
npm run deploy
```

## Add Custom Deploy Script to package.json

Add this to your `scripts` section in `package.json`:

```json
"scripts": {
  "deploy": "ng build --configuration production && firebase deploy --only hosting:yberhood",
  "deploy:preview": "ng build --configuration production && firebase hosting:channel:deploy preview"
}
```

## Troubleshooting

### Issue: "Target yberhood not detected in firebase.json"
**Solution:** Make sure you've created the site and applied the target:
```bash
firebase hosting:sites:create yberhood
firebase target:apply hosting yberhood yberhood
```

### Issue: "Build output directory not found"
**Solution:** Check that `dist/yberhood/browser` exists after building. Update `firebase.json` if your output directory is different.

### Issue: "Multiple sites, need to specify target"
**Solution:** Always use `--only hosting:yberhood` to deploy only this app.

## Custom Domain (Optional)

To add a custom domain:
1. Go to Firebase Console → Hosting
2. Select your site (yberhood)
3. Click **Add custom domain**
4. Follow the DNS configuration steps

## Environment Variables

If you need environment-specific configurations:
1. Create `src/environments/environment.prod.ts`
2. Add your production API keys, URLs, etc.
3. Angular will automatically use this during production builds

## Notes

- The `firebase.json` is configured to handle Angular routing (SPA)
- All routes redirect to `index.html` for client-side routing
- Build output is in `dist/yberhood/browser` (Angular 17+)
- Cache is configured for optimal performance
