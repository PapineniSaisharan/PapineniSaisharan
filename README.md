# Papineni Sai Sharan — Portfolio

A cinematic, responsive engineering portfolio presenting production database engineering alongside AI/ML, cybersecurity, and research. The visual language uses original CSS effects and section color identities; the content remains recruiter-focused and evidence-based.

## Features

- Next.js App Router, TypeScript, Tailwind CSS, and Motion animations
- Responsive navigation, keyboard focus states, reduced-motion support, and semantic sections
- Centralized profile, experience, skills, project, education, publication, achievement, and social data
- SEO metadata, Open Graph/Twitter cards, Person structured data, robots.txt, and sitemap.xml
- No external data/API dependency; the page remains complete without credentials
- Resume view/download at `/resume.pdf`

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS · Framer Motion

## Structure

```text
app/       App Router page, layout, global styles, metadata endpoints
data/      Editable portfolio content
public/    Static files, including the resume
```

Content modules include `profile`, `experience`, `skills`, `cloud`, `projects`, `research`, `education`, `publications`, `achievements`, and `socials`.

## Local setup

Requires Node.js 20.9 or later and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, copy `.env.example` to `.env.local` with `Copy-Item .env.example .env.local`.

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `SITE_URL` | Canonical website origin used by metadata, sitemap, and robots | `https://papinenisaisharan.vercel.app` |

Set `SITE_URL` to your eventual domain in Vercel. No API keys or GitHub token are required.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push this repository to GitHub, import it in Vercel, set `SITE_URL`, and deploy. See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Customize content

Update the matching module under `data/` to change profile information, roles, skill groupings, cloud technologies, repositories, research, education, or socials. Keep work experience, personal projects, research, and learning clearly distinguished. Replace `public/resume.pdf` with the current resume when it changes. GitHub project details are maintained as static data so the page stays available when GitHub is unavailable.
