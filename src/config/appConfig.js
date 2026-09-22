export const APP_CONFIG = Object.freeze({
  name: 'Healthome',
  version: '1.7.0',
  androidVersionCode: 12,
  packageName: 'com.healthome.app',
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL || '',
  tracking: { maxPathPoints: 500, intervalMs: 3000, distanceMeters: 5 },
  network: { requestTimeoutMs: 15000 },
});

export const GOOGLE_MEET = Object.freeze({
  androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || '',
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || '',
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || '',
});
