import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'healthome-backend' }));

app.post('/api/google-meet/spaces', async (req, res) => {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) return res.status(401).json({ message: 'Google authorization token is required.' });
  const accessToken = auth.slice(7);
  try {
    const response = await fetch('https://meet.googleapis.com/v2/spaces', {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) return res.status(response.status).json({ message: data?.error?.message || 'Google Meet API request failed.', google: data });
    return res.status(201).json({
      name: data.name,
      meetingUri: data.meetingUri,
      meetingCode: data.meetingCode,
      space: data,
    });
  } catch (error) {
    return res.status(502).json({ message: error.message || 'Google Meet service unavailable.' });
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Healthome backend listening on :${port}`));
