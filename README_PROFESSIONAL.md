# Healthome V1.4.0 — Professional Clean Architecture

This build keeps the working Healthome experience and introduces a cleaner project boundary for future production development.

### Engineering standards
- Reusable components are isolated in `src/components`.
- Healthcare catalog data is isolated in `src/data`.
- Persistence is centralized in `src/services/storage.js`.
- Network requests use a single timeout/error boundary in `src/services/network.js`.
- Configuration is centralized in `src/config/appConfig.js`.
- Pure search/formatting helpers live in `src/utils`.
- `npm run validate` performs a JavaScript syntax pass before Android bundling.

### Android APK
Use the `apk` EAS profile for direct phone installation. Use `production` for the Play Store AAB workflow.

## V1.7 Full-stack foundation
The project now includes a real PostgreSQL/Prisma backend with authentication, users, family members, doctors, services, labs, bookings, consultations, health records, prescriptions, pharmacy orders, wallet, notifications, addresses, payment records, admin service/doctor endpoints, and Google Meet integration. Configure environment variables and deploy the backend before production use.

## Full-stack local development

Use `docker compose up -d postgres` to start the included PostgreSQL development database. See `DEPLOYMENT_READY_V1.7.1.md` for the complete setup and production requirements.
