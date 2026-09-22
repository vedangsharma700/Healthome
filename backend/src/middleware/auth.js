import jwt from 'jsonwebtoken';
export function auth(required=true){ return (req,res,next)=>{ const h=req.headers.authorization||''; if(!h.startsWith('Bearer ')){ if(required) return res.status(401).json({message:'Authentication required'}); return next(); } try { req.user=jwt.verify(h.slice(7), process.env.JWT_SECRET); next(); } catch { return res.status(401).json({message:'Invalid or expired token'}); } }; }
export function roles(...allowed){ return (req,res,next)=>{ if(!req.user || !allowed.includes(req.user.role)) return res.status(403).json({message:'Forbidden'}); next(); }; }
