import { useCallback, useEffect, useState } from 'react';
import { getJSON, setJSON } from '../services/storage';

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let active = true;
    getJSON(key, null).then((stored) => {
      if (!active) return;
      if (stored !== null && stored !== undefined) setValue(stored);
      setHydrated(true);
    });
    return () => { active = false; };
  }, [key]);

  const update = useCallback((next) => {
    setValue((current) => {
      const resolved = typeof next === 'function' ? next(current) : next;
      setJSON(key, resolved).catch(() => {});
      return resolved;
    });
  }, [key]);

  return [value, update, hydrated];
}
