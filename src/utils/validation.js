export function normalizePhone(value) {
  return String(value ?? '').replace(/\D/g, '');
}

export function isValidName(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').length >= 2;
}

export function isValidOtp(value, length = 4) {
  return new RegExp(`^\\d{${length}}$`).test(String(value ?? '').trim());
}

export function normalizeName(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ');
}
