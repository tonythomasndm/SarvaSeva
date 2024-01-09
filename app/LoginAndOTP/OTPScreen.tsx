import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'; // Import from recaptcha-verifier
import { FIREBASE_APP } from '../../FirebaseConfig';
import { router, useLocalSearchParams } from 'expo-router';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const [confirmCode, setConfirmCode] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();

  const auth=getAuth(FIREBASE_APP);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container", {
      'size': 'invisible',
      'callback': (response) => {

      },
      'expired-callback': () => {

      }
    });
  }, [auth]);

  const handleSendOtp = async () => {
    try {
      // Format the phone number
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
      // Request an OTP to be sent to the user's phone
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      // Set the confirmationResult to state
      setConfirmCode(confirmationResult);
      setOtpSent(true);
      Alert.alert("OTP sent");
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOTPSubmit = async () => {
    try {
      await confirmCode.confirm(otp);
      setOtp('');
      Alert.alert('Login successful!');
      router.push("LoginAndOTP/PhoneNumberScreen");
    } catch (error) {
      console.error('Error confirming OTP:', error);
    }
  };

  return (
      <View style={styles.container} key="recaptchaVerifier">
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOtp(text)}
      />
      <Text>Number - {phoneNumber}</Text>
      <Button title="Confirm" onPress={otpSent ? handleOTPSubmit : handleSendOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '80%',
  },
});

export default OTPScreen;
