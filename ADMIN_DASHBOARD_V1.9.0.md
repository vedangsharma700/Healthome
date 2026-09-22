# Healthome Admin Dashboard V1.9.0

The admin dashboard is now connected to the protected backend control-center API.

## Local setup

Backend `.env` must contain:
- DATABASE_URL
- JWT_SECRET
- ADMIN_PHONE
- ADMIN_NAME
- OTP_MODE=development

After `npx prisma db push`:
1. `npm run db:seed`
2. `npm start`
3. In `admin-dashboard`: `npm install`
4. `npm run dev`
5. Open the Vite URL.

The local development OTP is returned by the backend when `OTP_MODE=development`.
Do not use development OTP mode in production.

Live modules connected:
- Overview
- Users
- Doctors
- Services
- Bookings
- Labs
- Pharmacy
- Payments
- Notifications
- Health Records

Other navigation modules remain staged for their dedicated CRUD workflows.
