import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

const features = [
  { label: 'Appointments', route: '/Appointments', icon: 'calendar-outline' },
  { label: 'Medicine', route: '/Medicine', icon: 'medkit-outline' },
  { label: 'Records', route: '/Record', icon: 'document-text-outline' },
  { label: 'Test Results', route: '/TestResults', icon: 'flask-outline' },
  { label: 'Calculate Dosages', route: '/CalculateDosages', icon: 'calculator-outline' },
  { label: 'Prescription Management', route: '/PrescriptionMangement', icon: 'file-tray-full-outline' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.welcome}>Welcome, User!</Text>
        <View style={styles.topRightButtons}>
          <TouchableOpacity style={styles.smallButton} onPress={() => router.push('/Profile')}>
            <Ionicons name="person-outline" size={20} color="#007bff" />
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => router.push('/Settings')}>
            <Ionicons name="settings-outline" size={20} color="#007bff" />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />
      
      <View style={styles.lowerHalf}>
        <View style={styles.grid}>
          {features.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.gridItem}
              onPress={() => router.push(item.route)}
            >
              <Ionicons name={item.icon} size={28} color="#007bff" style={styles.icon} />
              <Text style={styles.gridText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  topSection: {
    flexDirection: 'row',  
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  topRightButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  smallButton: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007bff',
    padding: 6,
    width: 55,
    height: 55,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 8,
    color: '#333',
    marginTop: 3,
    textAlign: 'center',
  },
  lowerHalf: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#007bff',
    borderWidth: 1,
    padding: 10,
  },
  icon: {
    marginBottom: 8,
  },
  gridText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 25,
    marginBottom: 20,
  },
});
