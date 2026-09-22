import { APP_CONFIG } from '../config/appConfig';

export class ApiError extends Error {
  constructor(message, status = 0, details = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

export async function request(path, options = {}) {
  if (!APP_CONFIG.apiBaseUrl) {
    throw new ApiError('Healthome API is not configured yet.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), APP_CONFIG.network.requestTimeoutMs);
  try {
    const response = await fetch(`${APP_CONFIG.apiBaseUrl}${path}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });

    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new ApiError(
        payload?.message || `Request failed with status ${response.status}`,
        response.status,
        payload,
      );
    }
    return payload;
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new ApiError('Request timed out. Please try again.');
    }
    if (error instanceof ApiError) throw error;
    throw new ApiError(error?.message || 'Network request failed.');
  } finally {
    clearTimeout(timeout);
  }
}
