import controlCenterRoutes from './routes/controlCenter.js';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { prisma } from './lib/prisma.js';
import authRoutes from './routes/auth.js';
import apiRoutes from './routes/api.js';
import meetRoutes from './routes/googleMeet.js';
import paymentRoutes from './routes/payments.js';

const app = express();

// Render sits behind a reverse proxy. Trust the first proxy hop so
// express-rate-limit can safely determine the client IP from X-Forwarded-For.
app.set('trust proxy', 1);

app.disable('x-powered-by');

app.use(helmet());

app.use(
  cors({
    origin:
      process.env.ALLOWED_ORIGINS === '*' || !process.env.ALLOWED_ORIGINS
        ? true
        : process.env.ALLOWED_ORIGINS.split(','),
  })
);

app.use(express.json({ limit: '1mb' }));

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev')
);

app.use(
  '/api/auth',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      ok: true,
      service: 'healthome-backend',
      database: 'connected',
    });
  } catch {
    res.status(503).json({
      ok: false,
      service: 'healthome-backend',
      database: 'unavailable',
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/google-meet', meetRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/control', controlCenterRoutes);

app.use((err, _req, res, _next) => {
  if (err?.name === 'ZodError') {
    return res.status(400).json({
      message: 'Validation failed',
      issues: err.issues,
    });
  }

  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

const port = Number(process.env.PORT || 4000);

const server = app.listen(port, () =>
  console.log(`Healthome backend listening on :${port}`)
);

process.on('SIGINT', async () => {
  server.close();
  await prisma.$disconnect();
});
