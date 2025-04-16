import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import appIcon from '../../assets/images/appIcon.png';
import { useRouter } from 'expo-router';

export default function LoginScreen() { 

    const router=useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/appIcon.png')}
        style={styles.image}
      />
      <StatusBar style="dark" />

      <View>
        <Text style={styles.text}>
          Welcome to
        </Text>
        <Text style={styles.titleText}>
          T-Minder
        </Text>
        <Text style={styles.textDescription}>
          Manage your Testosterone Levels and
          Prescriptions with the T-Minder App!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={()=>router.push('login/signIn')}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={()=>router.push('login/register')}
        >
          <Text style={styles.buttonRegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.subtext}>
          By signing up you agree to terms and conditions.
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 350,
    resizeMode: "contain",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  text: {
    width: 300,
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: '#3E3E3E',
    fontFamily: 'PoppinsBold',
  },
  textDescription: {
    width: 300,
    fontSize: 15,
    alignSelf: "center",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 10,
    color: '#5d5d5d',
    fontFamily: 'PoppinsBold',
  },
  titleText: {
    textAlign: "center",
    fontSize: 40,
    color: "#2390F6",
    fontWeight: "bold",
    fontFamily: 'PoppinsBold',

  },
  subtext: {
    alignSelf: "center",
    color: "#5A5757",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  buttonLogin: {
    backgroundColor: "#2390F6",
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    marginTop: -10,
  },
  buttonRegister: {
    backgroundColor: "#DEE3E7",
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegisterText: {
    color: "#2390F6",
    fontSize: 18,
    fontWeight: "bold",
  },
});