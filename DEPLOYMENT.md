# CSUK Website Deployment Guide

## GitHub Setup

1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `csuk-website`
   - Description: `CSUK - The #1 C-section education website for women globally. Built with Next.js, TypeScript, and Tailwind CSS.`
   - Make it Public
   - Don't initialize with README (we already have code)
   - Click "Create repository"

2. **Connect Local Repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/csuk-website.git
   git branch -M main
   git push -u origin main
   ```

## Netlify Deployment

1. **Connect GitHub to Netlify:**
   - Go to https://netlify.com and log in
   - Click "New site from Git"
   - Choose "GitHub" and authorize if needed
   - Select your `csuk-website` repository

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18 or later

3. **Environment Variables (if needed):**
   - No environment variables required for this static build

4. **Deploy Settings:**
   - Branch to deploy: `main`
   - Auto-deploy: Enable (will deploy on every push to main)

## Build Configuration

The site is already configured for static export with:
- `output: 'export'` in next.config.ts
- Static generation for all pages
- Optimized images settings
- SEO metadata and sitemaps

## Domain Setup (Optional)

1. **Custom Domain:**
   - In Netlify dashboard, go to Site settings > Domain management
   - Add custom domain: `csectionuk.com`
   - Follow DNS configuration instructions

2. **SSL Certificate:**
   - Automatically provided by Netlify
   - Will be active once domain is verified

## Post-Deployment Checklist

- [ ] Site loads correctly at Netlify URL
- [ ] All pages are accessible
- [ ] Mobile responsiveness works
- [ ] Forms work (if implemented)
- [ ] SEO metadata is correct
- [ ] Sitemap.xml is accessible
- [ ] Analytics tracking (if needed)

## Continuous Deployment

Every push to the `main` branch will automatically trigger a new deployment on Netlify.

## Build Logs

If deployment fails, check:
1. Netlify build logs for errors
2. Ensure all dependencies are in package.json
3. Check that build command completes locally
4. Verify all imported files exist

## Support

For deployment issues:
- Check Netlify docs: https://docs.netlify.com
- Verify Next.js static export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports