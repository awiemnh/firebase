import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FirebaseCrashlyticsTypes } from '@react-native-firebase/crashlytics';
import { firebase } from '@react-native-firebase/crashlytics';
import firebase from 'react-native-firebase/app';

export default function App() {
  useEffect(() => {
    firebase.crashlytics().log('App mounted.');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff56',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
