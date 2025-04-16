import React, { useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function Verify() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
            <Ionicons name="chevron-back-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewContainer}>
          <Text style={styles.titleText}>Verify your account</Text>
          <Text style={styles.subText}>
            Please enter the verification code that was sent to your registered email address.
          </Text>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputs[index]}
                style={styles.codeInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.buttonVerify, !isCodeComplete && styles.buttonDisabled]}
            disabled={!isCodeComplete}
            onPress={() => console.log("Verify pressed with code:", code.join(""))}
          >
            <Text style={styles.buttonVerifyText}>Verify</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.resendText}>
          Didn't receive a code?{' '}
          <Text style={styles.resendLink} onPress={() => console.log("Resend Code")}>
            Resend Code
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#2390F6',
      textAlign: 'center',
      marginVertical: 20,
    },
    viewContainer: {
      marginTop: '150',
      alignItems: 'center',
      alignContent: 'flex-start',
      width: '90%',
  },
    subText: {
      width: '85%',
      fontSize: 14,
      color: '#8391A1',
      textAlign: 'center',
      marginBottom: 20,
    },
    codeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '75%',
      marginBottom: 50,
    },
    codeInput: {
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: '#2390F6',
      borderRadius: 8,
      fontSize: 24,
      color: '#000',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    buttonVerify: {
      backgroundColor: '#2390F6',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 8,
      width: '75%',
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonDisabled: {
      backgroundColor: '#A3CFF9',
    },
    buttonVerifyText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resendText: {
      fontSize: 13,
      color: '#000',
    },
    resendLink: {
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
    backButton: {
        fontSize: 'bold',
        justifyContent: 'center',
        borderBlockColor: '#000000',
    },
  });
  