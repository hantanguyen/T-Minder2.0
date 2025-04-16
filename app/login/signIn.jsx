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
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Logged in successfully!");
    router.push('/home'); 
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButtonContainer}>
          <Ionicons name="chevron-back-outline" size={20} color="#000" />
        </TouchableOpacity>
        <StatusBar style="dark" />
        <Text style={styles.titleText}>Welcome back! Good to see you again.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => router.push('login/forgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Don't have an account?{" "}
            <Text 
              style={styles.registerText} 
              onPress={() => router.push('login/register')}
            >
              Register
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
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2390F6',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 0, 
    marginLeft: 20
  },
  inputContainer: {
    width: '80%',
    gap: 20,
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttonLogin: {
    backgroundColor: '#2390F6',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  buttonLoginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#2390F6',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  subtext: {
    color: '#5A5757',
  },
  registerText: {
    color: '#2390F6',
    fontWeight: 'bold',
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
  
});