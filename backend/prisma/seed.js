import { PrismaClient } from '@prisma/client';
const p = new PrismaClient();

const adminPhone = String(process.env.ADMIN_PHONE || '9999999999').replace(/\D/g, '');
await p.user.upsert({
  where: { phone: adminPhone },
  update: { role: 'ADMIN', name: process.env.ADMIN_NAME || 'Healthome Admin' },
  create: { phone: adminPhone, role: 'ADMIN', name: process.env.ADMIN_NAME || 'Healthome Admin' }
});

await p.service.createMany({data:[
  {name:'Home Nursing',category:'Home Care',description:'Professional nursing at home',price:999},
  {name:'Physiotherapy',category:'Home Care',description:'Physiotherapy session at home',price:799},
  {name:'Doctor Consultation',category:'Consultation',description:'Online doctor consultation',price:499}
],skipDuplicates:true});

await p.labTest.createMany({data:[
  {name:'CBC',category:'Blood Tests',description:'Complete blood count',price:399,turnaroundHours:24},
  {name:'HbA1c',category:'Diabetes',description:'Three-month glucose marker',price:499,turnaroundHours:24},
  {name:'Lipid Profile',category:'Health Check',description:'Cholesterol profile',price:599,turnaroundHours:24}
],skipDuplicates:true});

await p.medicine.createMany({data:[
  {name:'Paracetamol 500mg',category:'Pain Relief',description:'OTC pain/fever medicine',price:30,stock:100},
  {name:'ORS',category:'Hydration',description:'Oral rehydration salts',price:25,stock:100}
],skipDuplicates:true});

console.log(`Seed complete. Local admin phone: ${adminPhone}`);
await p.$disconnect();
