import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return(
    <Stack screenOptions={{ 
      headerShown: false
      }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" />
    </Stack>
  )
}