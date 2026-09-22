import jwt from 'jsonwebtoken'; import crypto from 'crypto';
export function hashCode(code){ return crypto.createHash('sha256').update(code).digest('hex'); }
export function tokenFor(user){ return jwt.sign({sub:user.id,role:user.role,phone:user.phone}, process.env.JWT_SECRET,{expiresIn:'7d'}); }
export function otp(){ return String(crypto.randomInt(100000,1000000)); }
