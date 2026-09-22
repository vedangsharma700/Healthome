import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Keep production logging centralized so a real crash-reporting provider
    // can be connected later without changing screen code.
    if (__DEV__) console.error('[Healthome] render error', error, info);
  }

  handleRetry = () => this.setState({ hasError: false });

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Healthome needs a restart</Text>
        <Text style={styles.message}>
          Something unexpected happened. Your saved account data has not been cleared.
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.handleRetry} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#F7FBFC' },
  title: { fontSize: 22, fontWeight: '800', color: '#173E56', textAlign: 'center' },
  message: { marginTop: 10, fontSize: 14, lineHeight: 21, color: '#71889A', textAlign: 'center' },
  button: { marginTop: 22, minWidth: 140, paddingVertical: 13, paddingHorizontal: 22, borderRadius: 14, backgroundColor: '#087F8C', alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 14, fontWeight: '800' },
});
