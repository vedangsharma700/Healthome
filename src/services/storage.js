import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
  return AsyncStorage.getItem(key);
}

export async function setItem(key, value) {
  return AsyncStorage.setItem(key, value);
}

export async function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

export async function getJSON(key, fallback = null) {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export async function setJSON(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function clearAllHealthomeStorage() {
  return AsyncStorage.clear();
}
