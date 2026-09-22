import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { auth, roles } from '../middleware/auth.js';

const router = Router();

router.use('/admin', auth(), roles('ADMIN'));

router.get('/admin/overview', async (_req, res, next) => {
  try {
    const [
      users, patients, doctors, services, bookings, labs, medicines,
      payments, consultations, notifications, supportAgents,
      revenueResult, pendingBookings, activeConsultations
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: 'PATIENT' } }),
      prisma.doctor.count(),
      prisma.service.count({ where: { active: true } }),
      prisma.booking.count(),
      prisma.labTest.count({ where: { active: true } }),
      prisma.medicine.count({ where: { active: true } }),
      prisma.payment.count(),
      prisma.consultation.count(),
      prisma.notification.count(),
      prisma.user.count({ where: { role: 'SUPPORT' } }),
      prisma.payment.aggregate({ _sum: { amount: true }, where: { status: 'CAPTURED' } }),
      prisma.booking.count({ where: { status: 'PENDING' } }),
      prisma.consultation.count({ where: { status: 'ACTIVE' } }),
    ]);
    res.json({
      ok: true,
      counts: {
        users, patients, doctors, services, bookings, labs, medicines,
        payments, consultations, notifications, supportAgents,
        revenue: revenueResult._sum.amount || 0,
        pendingBookings,
        activeConsultations
      }
    });
  } catch (err) { next(err); }
});

router.get('/admin/users', async (req, res, next) => {
  try {
    const q = String(req.query.q || '').trim();
    const role = String(req.query.role || '').trim();
    const users = await prisma.user.findMany({
      where: {
        ...(q ? { OR: [{ name: { contains: q, mode: 'insensitive' } }, { phone: { contains: q } }, { email: { contains: q, mode: 'insensitive' } }] } : {}),
        ...(role && ['PATIENT','DOCTOR','SUPPORT','ADMIN'].includes(role) ? { role } : {})
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: { id:true, phone:true, name:true, email:true, role:true, createdAt:true, updatedAt:true }
    });
    res.json({ ok:true, users });
  } catch (err) { next(err); }
});

router.get('/admin/doctors', async (_req, res, next) => {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { user: { createdAt: 'desc' } },
      take: 100,
      include: { user: { select: { id:true, phone:true, name:true, email:true, role:true } } }
    });
    res.json({ ok:true, doctors });
  } catch (err) { next(err); }
});

router.get('/admin/bookings', async (_req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { scheduledAt: 'desc' },
      take: 100,
      include: {
        user: { select: { id:true, name:true, phone:true } },
        doctor: { include: { user: { select: { name:true, phone:true } } } },
        service: { select: { id:true, name:true, category:true, price:true } },
        payment: { select: { id:true, amount:true, status:true, provider:true } },
        consultation: { select: { id:true, type:true, status:true, startsAt:true } }
      }
    });
    res.json({ ok:true, bookings });
  } catch (err) { next(err); }
});

router.get('/admin/services', async (_req, res, next) => {
  try { res.json({ ok:true, services: await prisma.service.findMany({ orderBy:{ name:'asc' } }) }); }
  catch (err) { next(err); }
});

router.get('/admin/labs', async (_req, res, next) => {
  try { res.json({ ok:true, labs: await prisma.labTest.findMany({ orderBy:{ name:'asc' } }) }); }
  catch (err) { next(err); }
});

router.get('/admin/pharmacy', async (_req, res, next) => {
  try { res.json({ ok:true, medicines: await prisma.medicine.findMany({ orderBy:{ name:'asc' } }) }); }
  catch (err) { next(err); }
});

router.get('/admin/payments', async (_req, res, next) => {
  try {
    const payments = await prisma.payment.findMany({
      orderBy:{ createdAt:'desc' }, take:100,
      include:{ user:{ select:{name:true,phone:true} }, booking:{ select:{id:true,status:true} }, order:{ select:{id:true,status:true} } }
    });
    res.json({ ok:true, payments });
  } catch (err) { next(err); }
});

router.get('/admin/notifications', async (_req, res, next) => {
  try {
    res.json({ ok:true, notifications: await prisma.notification.findMany({
      orderBy:{createdAt:'desc'}, take:100, include:{user:{select:{name:true,phone:true}}}
    })});
  } catch (err) { next(err); }
});

router.get('/admin/health-records', async (_req, res, next) => {
  try {
    res.json({ ok:true, records: await prisma.healthRecord.findMany({
      orderBy:{createdAt:'desc'}, take:100, include:{user:{select:{name:true,phone:true}}}
    })});
  } catch (err) { next(err); }
});

router.get('/agent/queue', auth(), roles('SUPPORT'), async (_req, res, next) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { status: { in: ['PENDING', 'CONFIRMED'] } },
      orderBy: { scheduledAt: 'asc' }, take: 50,
      include: { user: true, doctor: { include: { user: true } }, service: true }
    });
    res.json({ ok: true, bookings });
  } catch (err) { next(err); }
});

export default router;
