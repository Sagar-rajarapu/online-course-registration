# LearnWithoutFees

A modern learning platform prototype that curates high‑quality programming content and makes it effortless to discover, explore, and learn—without paywalls.

## Mission & Purpose
- Mission: Make world‑class learning accessible to everyone, free.
- Purpose: Help students and self‑learners find the right material fast, start building immediately, and stay motivated with a clean, focused UX.

This repo includes a production‑style React frontend, ready to connect to a real backend for authentication, enrollments, notifications, and course management.

## Features
- Curated courses (YouTube) with a polished, responsive UI
- Role-based entry points (Student, Faculty, Admin)
- Modern pages: Home, Courses, Updates, About, Contact
- Video modal with “Watch on YouTube” attribution button
- Global Navbar + Footer, smooth scroll-to-top, route transitions
- Tailwind CSS for consistent design + light global CSS
- Dynamic content via JSON (API-ready fetch layer)

## Tech Stack
- Frontend: React 18, TypeScript, Vite, React Router
- Styling: Tailwind CSS, PostCSS, Autoprefixer
- Data (demo): JSON files under `frontend/public/data`

## Repository Layout
- Legacy static site (reference): root HTML/CSS/JS
- React app: `frontend/`
  - `src/pages/*`: app pages
  - `src/shared/*`: `Navbar`, `Footer`, `ScrollToTop`, `AppLayout`
  - `src/hooks/useFetch.ts`: tiny fetch helper with loading/error
  - `public/data/*`: `courses.json`, `updates.json`, `home.json`

## Getting Started
```bash
# 1) React app (recommended)
cd frontend
npm install
npm run dev           # open the printed URL, e.g. http://localhost:5173

# 2) Legacy static prototype (optional)
# open index.html at repo root in your browser
```

## Configuration
- Tailwind: `frontend/tailwind.config.js` (ESM export)
- PostCSS: `frontend/postcss.config.js` (ESM export)
- Vite: `frontend/vite.config.ts`

## Making It Dynamic (API-Ready)
The app currently fetches JSON:
- `GET /data/courses.json` → course cards + video URLs
- `GET /data/updates.json` → notifications feed
- `GET /data/home.json` → homepage features/stats

To connect a real backend:
1. Replace `useFetch('/data/...')` with your API endpoints.
2. Add authentication (JWT/cookies), and guard routes by role.
3. Persist users, courses, updates, enrollments (e.g., Postgres + Prisma).

## Roadmap
- Auth (email/OTP, sessions, role‑based access)
- Dashboards: Student, Faculty, Admin
- Enrollments, progress tracking, notes
- Admin CMS for courses/updates
- Server persistence (PostgreSQL) + secure file storage

## Contributing
- Fork, branch, and open a focused PR.
- Include before/after screenshots for UI changes where helpful.

## License
- MIT for project code (add a `LICENSE` file if distributing).

## Credits & Disclaimer
- Course thumbnails and videos are from YouTube—credit to original creators.
- Disclaimer: This website is a demo project for educational purposes. All course videos are embedded from YouTube and remain the property of their respective creators. This platform only provides links to public educational content for easy access.