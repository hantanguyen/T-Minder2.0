import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewContainer}>
          <Text style={styles.titleText}>Forgot your password?</Text>

          <Text style={styles.subText}>
            Please enter the email address linked with your account.
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonCode, !isEmailValid && styles.buttonDisabled]}
            disabled={!isEmailValid}
            onPress={() => navigation.navigate('verify')}
          >
            <Text style={styles.buttonCodeText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  viewContainer: {
    marginTop: 150,
    alignItems: 'center',
    width: '90%',
    gap: 15,
  },
  backButtonContainer: {
    borderWidth: 1,
    borderColor: '#d2d5da',
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: 'bold',
    justifyContent: 'center',
  },
  titleText: {
    width: '90%',
    fontSize: 30,
    fontWeight: '600',
    color: '#2390F6',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    width: '90%',
    fontSize: 15,
    color: '#8391A1',
    textAlign: 'left',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttonCode: {
    backgroundColor: '#2390F6',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  buttonDisabled: {
    backgroundColor: '#A3CFF9',
  },
  buttonCodeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
