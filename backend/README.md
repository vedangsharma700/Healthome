# Healthome Backend

Production-oriented API foundation for Healthome. Uses Node.js/Express, Prisma and PostgreSQL.

## Local setup
1. Install PostgreSQL and create database `healthome`.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a strong `JWT_SECRET`.
3. `npm install`
4. `npx prisma generate`
5. `npx prisma migrate dev --name init`
6. `npm run db:seed`
7. `npm run dev`
8. Open `/health` and expect `database: connected`.

## Production requirements
- Replace development OTP with an SMS provider and never expose OTPs.
- Deploy behind HTTPS.
- Store Google OAuth credentials only on the server.
- Configure a real payment provider and verify webhooks server-side.
- Add object storage with signed URLs for medical documents.
- Add FCM/APNs push delivery service.
- Use managed PostgreSQL with backups, encryption and least-privilege credentials.
- Add audit logging and access controls before handling real medical data.
