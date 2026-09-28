# Deployment

1. **Clone the repository**

   Requires Node.js 20.9 or later.

   ```bash
   git clone <your-github-repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   Copy `.env.example` to `.env.local`, set `SITE_URL` when you have a domain, then run `npm run dev` and open http://localhost:3000.

4. **Build the production site**

   ```bash
   npm run build
   npm start
   ```

5. **Push to GitHub**

   Create a repository, then commit and push the project. Do not commit `.env.local`.

6. **Import into Vercel**

   In Vercel, choose **Add New → Project**, connect GitHub, and select this repository. Vercel detects Next.js automatically.

7. **Configure environment variables**

   Add `SITE_URL` in the Vercel project settings. Use the final canonical origin, such as `https://yourdomain.com`.

8. **Deploy**

   Select **Deploy**. Later pushes to the production branch trigger deployments.

9. **Connect a custom domain**

   Add the domain in Vercel project settings, apply the DNS records Vercel provides, then update `SITE_URL` to the verified HTTPS domain and redeploy.
