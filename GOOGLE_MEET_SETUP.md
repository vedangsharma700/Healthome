# Google Meet integration

Healthome V1.6 adds a production-oriented Google Meet integration layer. The Google Meet REST API creates meeting spaces with `POST https://meet.googleapis.com/v2/spaces` and requires the user OAuth scope `https://www.googleapis.com/auth/meetings.space.created`.

## 1. Google Cloud
1. Create/select a Google Cloud project.
2. Enable Google Meet REST API.
3. Configure OAuth consent screen.
4. Create Android/Web OAuth client IDs for your app.
5. Request only the Meet scope required by the workflow.

## 2. Backend
```
cd backend
npm install
npm start
```
Copy `.env.example` to `.env`. Deploy this backend behind HTTPS before production.

## 3. Mobile
Install dependencies from the project root:
```
npm install
```
Set the Google OAuth client IDs and backend URL in `src/config/appConfig.js` for the target environment.

## 4. Consultation flow
Doctor/provider authorizes Google Meet -> backend calls `spaces.create` -> backend returns `meetingUri` -> booking stores the meeting URI -> patient and doctor use the Join Consultation action.

## Security
Do not put Google client secrets in the APK. Access tokens must be handled securely and never persisted in plain text. The backend should use HTTPS, authenticate the Healthome user, verify the booking/doctor relationship, and only then proxy the Meet request.

The current scaffold intentionally does not invent credentials or claim a live Google connection until the project's Google Cloud OAuth IDs and deployed backend URL are configured.
