import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarStyle:{display: 'none'}
    }}>
        <Tabs.Screen name='index'/>
        <Tabs.Screen name='AddNew'/>
        <Tabs.Screen name='Appointments' />
        <Tabs.Screen name='Medicine' />
        <Tabs.Screen name='Profile' />
        <Tabs.Screen name='PrescriptionMangement'/>
        <Tabs.Screen name='Record'/>
    </Tabs>
    );
}