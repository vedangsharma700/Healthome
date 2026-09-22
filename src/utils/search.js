export function normalizeQuery(value) {
  return String(value ?? '').trim().toLowerCase();
}

export function matchesQuery(value, query) {
  const q = normalizeQuery(query);
  if (!q) return true;
  return normalizeQuery(value).includes(q);
}

export function matchesAny(fields, query) {
  const q = normalizeQuery(query);
  if (!q) return true;
  return fields.some((field) => normalizeQuery(field).includes(q));
}
