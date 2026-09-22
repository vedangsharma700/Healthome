import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { request } from './network';

WebBrowser.maybeCompleteAuthSession();
export const GOOGLE_MEET_SCOPE = 'https://www.googleapis.com/auth/meetings.space.created';

export function createGoogleAuthRequest(clientIds = {}) {
  return Google.useAuthRequest({
    androidClientId: clientIds.androidClientId,
    iosClientId: clientIds.iosClientId,
    webClientId: clientIds.webClientId,
    scopes: [GOOGLE_MEET_SCOPE],
  });
}

export async function createMeetSpace({ bookingId, accessToken, authToken }) {
  if (!bookingId || !accessToken || !authToken) throw new Error('Consultation authorization is required.');
  return request('/google-meet/spaces', {
    method: 'POST',
    headers: { Authorization: `Bearer ${authToken}` },
    body: JSON.stringify({ bookingId, accessToken }),
  });
}

export function openMeet(meetingUri) {
  if (!meetingUri) throw new Error('Meeting link is not available yet.');
  return WebBrowser.openBrowserAsync(meetingUri);
}
