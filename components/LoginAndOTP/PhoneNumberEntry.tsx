import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/index';
import { useState,useEffect } from 'react';
const PhoneNumberEntry = ()=>{
    const [phoneNumber,setPhoneNumber]=useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading1}>
                Enter your Phone Number
            </Text>
            <View style={styles.inputBox}>
                <Text>+91</Text>
            <TextInput
                placeholder='   Phone Numer'
                autoFocus
                autoComplete='tel'
                keyboardType='phone-pad'
                textContentType='telephoneNumber'
                onChangeText={
                    (phoneNumber) => setPhoneNumber('+91'+phoneNumber)
                }
            />
            </View>
            
        </SafeAreaView>
    )
}

export default PhoneNumberEntry;