import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HealthomeApp from './src/app/HealthomeApp';
import ErrorBoundary from './src/core/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar style="dark" />
      <HealthomeApp />
    </ErrorBoundary>
  );
}
