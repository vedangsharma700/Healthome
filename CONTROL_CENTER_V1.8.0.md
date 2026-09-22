# Healthome V1.8.0 — Control Center

This release adds the missing operational surfaces:

## 1. Admin Dashboard
A separate web application under `admin-dashboard/` for central control of:
- Users
- Doctors
- Services
- Bookings
- Labs
- Pharmacy
- Payments
- Wallet
- Health records
- Consultations
- Notifications
- Support agents
- Audit logs
- Settings

Run:
`cd admin-dashboard`
`npm install`
`npm run dev`

Set `VITE_API_URL` to the deployed Healthome backend.

## 2. Support Agent App
A separate Expo mobile app under `agent-app/` for:
- Support queue
- Booking operations
- Patient lookup
- Support tickets
- Agent profile/security

Run:
`cd agent-app`
`npm install`
`npx expo start`

Android package: `com.healthome.agent`

## 3. Backend control routes
Role-protected endpoints:
- `GET /api/control/admin/overview`
- `GET /api/control/agent/queue`

The existing backend authentication middleware must populate `req.user`.
ADMIN can access all control modules; SUPPORT_AGENT can access the agent queue.

## Production note
The dashboards are connected to the existing backend architecture, but live production data, payment providers, OTP, FCM, PostgreSQL hosting and Google credentials still require deployment/configuration.
