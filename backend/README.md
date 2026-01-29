# Kesehatanku Backend (NestJS + Prisma)

Quick scaffold implementing REST endpoints to match frontend pages. Uses SQLite for local development via Prisma.

Setup

1. cd backend
2. npm install
3. npx prisma generate
4. npx prisma migrate dev --name init
5. npm run start:dev

Notes
- Endpoints are prefixed with `/api` (set in `src/main.ts`).
- Implementations are minimal; JWT and full auth flows are TODO.
