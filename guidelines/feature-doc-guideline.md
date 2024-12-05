# Project Overview
Use this guide to build a web app that advertises the podcast editing services of Geoff Vrijmoet.

# Feature Requirements
- Homepage should be a long scrolling page with all sections a user should need to see to decide to contact Geoff.
- Homepage should have a hero section showcasing Geoff's podcast editing services.
- Homepage should have a services section detailing different editing packages.
- Homepage should have a portfolio section with sample work/previous podcasts. This should display the different podcasts that Geoff currently edits, with up-to-date information on how many hours of podcast editing Geoff has done in total, as well as for each podcast. On the backend code for this section, Geoff would like to be able to add new podcasts to the portfolio, as well as update the information on the existing podcasts such as when Geoff began editing the podcast so we can accurately calculate the total hours of podcast editing Geoff has done.
- The web app should have lightning-fast performance.
- The entire app should be extremely mobile-friendly.
- We will use Next.js, Shadcn, Lucid, MongoDB, and Tailwind CSS to build the app.
- The app should be deployed to Vercel.
- The app should be SEO-friendly.
- The app should be accessible.
- The app should be secure.
- The app should use the github repository: github.com/geoffvrijmoet/podcasts-geoffvrijmoet-com. I would like to be able to push to this repository from Cursor using SSH and the git ui in Cursor.

# Relevant Docs
This is the reference documentation for Clerk: https://clerk.com/docs/references/nextjs/

# Current File Structure
podcasts-geoffvrijmoet-com
├── app
├── guidelines
│   └── feature-doc-guideline.md
├── lib
├── node_modules
├── .cursorrules
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json


# Rules
- All new components should go in /components and be named like example-component.tsx unless otherwise specified.
- All new pages go in /app.
