# Healthome V1.7.1 — Deployment Ready

This package now includes a local PostgreSQL development stack and basic auth rate limiting. It is ready to connect to hosted infrastructure, but third-party production accounts/credentials are intentionally not embedded.

## Local backend

1. Install Node.js 20+.
2. Start PostgreSQL:

```cmd
docker compose up -d postgres
```

3. In `backend`, copy `.env.local.example` to `.env`.
4. Install dependencies:

```cmd
cd backend
npm install
npm run db:generate
npm run db:deploy
npm run db:seed
npm start
```

Health check: `http://localhost:4000/health`

## Mobile app

Set `EXPO_PUBLIC_API_BASE_URL` to your reachable backend URL, for example:

`http://192.168.1.10:4000/api`

For production Android, use an HTTPS deployed API URL.

## Production services still require owner credentials

- PostgreSQL hosting
- SMS/OTP provider
- Google Cloud OAuth + Google Meet API configuration
- Razorpay account/keys
- Firebase Cloud Messaging
- Secure object storage for medical documents
- HTTPS domain/certificate

Never place server secrets in `EXPO_PUBLIC_*` variables or the APK.

## Production gates

Before launch:
- Set `NODE_ENV=production`
- Generate a strong random `JWT_SECRET`
- Set explicit `ALLOWED_ORIGINS`
- Set `OTP_MODE` to the real provider mode
- Configure Google OAuth and Meet scopes
- Configure payment webhook verification
- Configure backups and database monitoring
- Add privacy/consent flows appropriate for the healthcare data you collect
