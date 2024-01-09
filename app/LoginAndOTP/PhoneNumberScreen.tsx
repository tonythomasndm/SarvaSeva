import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    // Validate phone number if needed
    // Proceed to OTP screen or perform other actions
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity>
      <Button title="Next" onPress={() => router.push({
        pathname:"LoginAndOTP/OTPScreen",
        params:{phoneNumber:phoneNumber}})} />
      </TouchableOpacity>
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

export default PhoneNumberScreen;
