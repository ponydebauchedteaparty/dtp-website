# Deployment Guide for Debauched Tea Party Website

This guide will help you deploy the website to GitHub and Cloudflare Pages.

## 1. GitHub Setup

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., `dtp-website`)
   - Make it public or private as per your preference
   - Don't initialize with README (since you already have one)

2. Initialize Git and push to GitHub:
   ```bash
   # Navigate to your project directory
   cd dtp-website

   # Initialize Git repository (if not already done)
   git init

   # Add all files
   git add .

   # Create initial commit
   git commit -m "Initial commit"

   # Add GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/dtp-website.git

   # Push to GitHub
   git push -u origin main
   ```

## 2. Cloudflare Pages Setup

1. Go to Cloudflare Dashboard:
   - Visit https://dash.cloudflare.com
   - Sign in or create an account if you haven't already

2. Create a new Pages project:
   - Click on "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository

3. Configure build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18 (or latest LTS)

4. Environment variables (if needed):
   - Add any required environment variables in the Cloudflare Pages settings

5. Deploy:
   - Click "Save and Deploy"
   - Wait for the build to complete

## 3. Disable Developer Bar

To disable the developer bar in Next.js, you need to modify your `next.config.ts` file. Here's how:

1. Open `next.config.ts`
2. Add the following configuration:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     devIndicators: {
       buildActivity: false,
     },
   };

   export default nextConfig;
   ```

## 4. Custom Domain Setup (Optional)

1. In Cloudflare Pages:
   - Go to your project settings
   - Click on "Custom domains"
   - Add your domain
   - Follow the DNS configuration instructions

2. Configure DNS:
   - Add the required DNS records in your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

## 5. Continuous Deployment

Your site will automatically deploy when you push changes to your GitHub repository. The process is:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Cloudflare Pages will automatically detect the changes and start a new deployment

## Troubleshooting

If you encounter any issues:

1. Check the build logs in Cloudflare Pages
2. Ensure all dependencies are properly listed in `package.json`
3. Verify that your `.gitignore` file is correctly configured
4. Make sure your Node.js version is compatible with your dependencies

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Documentation](https://docs.github.com) 