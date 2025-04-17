import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard, 
    Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from './../../config/FirebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPasswordLengthValid = password.length >= 8 && password.length <= 23;
  const isPasswordMatch = password === confirmPassword && confirmPassword.length > 0;
  const isFormValid = isEmailValid && isPasswordLengthValid && isPasswordMatch;

  const onCreateAccount = () => {
    if (!email || !password) {
      Alert.alert("Please fill in all fields");
      return;
    }

    if (!isEmailValid) {
      Alert.alert("Please enter a valid email address.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Alert.alert("Account created successfully!");
        // router.push('(tabs)');
        router.push('/login/signIn'); 
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
          alert('Email already in use');
        } else if (errorCode === 'auth/invalid-email') {
          alert('Invalid email address');
        } else if (errorCode === 'auth/weak-password') {
          alert('Password is too weak');
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>Register here to get started</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <View style={{ position: 'relative' }}>
            <TextInput
              style={[styles.input, { paddingRight: 40 }]}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={{ position: 'absolute', right: 10, top: 13 }}
            >
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {password.length > 0 && !isPasswordLengthValid && (
            <Text style={styles.warningText}>
              Password must be between 8 and 23 characters
            </Text>
          )}

          <View style={{ position: 'relative' }}>
            <TextInput
              style={[styles.input, { paddingRight: 40 }]}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={showConfirmPassword}
            />
            <TouchableOpacity
              onPress={toggleShowConfirmPassword}
              style={{ position: 'absolute', right: 10, top: 13 }}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {confirmPassword.length > 0 && !isPasswordMatch && (
            <Text style={styles.warningText}>
              Passwords do not match
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.buttonRegister,
            !isFormValid && { backgroundColor: '#ccc' },
          ]}
          onPress={onCreateAccount}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonRegisterText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Already have an account?{" "}
            <Text
              style={styles.loginText}
              onPress={() => router.push('/login/signIn')}
            >
              Login here.
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButtonContainer: {
    borderWidth: 1,
    borderColor: '#d2d5da',
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    top: 60,
    left: 20,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    gap: 20,
    marginBottom: 40,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2390F6',
    alignSelf: 'flex-start',
    marginTop: -120,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  warningText: {
    color: '#FF5A5F',
    fontSize: 14,
    marginTop: -15,
    marginBottom: 10,
    paddingLeft: 5,
  },
  buttonRegister: {
    backgroundColor: '#2390F6',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  buttonRegisterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtext: {
    color: '#5A5757',
  },
  loginText: {
    color: '#2390F6',
    fontWeight: 'bold',
  },
});