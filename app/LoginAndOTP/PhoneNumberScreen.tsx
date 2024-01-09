import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import React,{useState,useRef} from 'react';
import {getApp,initializeApp} from 'firebase/app';
import {FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import {getAuth,PhoneAuthProvider,signInWithCredential} from 'firebase/auth';
import { FIREBASE_APP, FIREBASE_AUTH, firebaseConfig } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';


interface SignInScreenProps {
    navigation: NavigationProp<any>; // You can replace 'any' with the type of your navigation stack
  }

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  
    const recaptchaVerifier = useRef(null);

    const [phoneNumber,setPhoneNumber] = useState('');
    const [verificationId,setVerificationID] = useState('');
    const [verificationCode,setVerificationCode] = useState('');

    const [info,setInfo] = useState("");
    const attemptInvisibleVerification = true;

    const handleSendVerificationCode = async () => {
        try{
            const phoneProvider = new PhoneAuthProvider(FIREBASE_AUTH); // initialize the phone provider.
            const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
            ); // get the verification id
            setVerificationID(verificationId); // set the verification id
            setInfo('Success : Verification code has been sent to your phone'); // If Ok, show message.
        }catch(error){
            setInfo(`Error : ${error.message}`); // show the error
        }
    };

    const handleVerifyVerificationCode = async () => {
        try{
            const credential = PhoneAuthProvider.credential(verificationId,verificationCode); // get the credential
            await signInWithCredential(FIREBASE_AUTH,credential); // verify the credential
            setInfo('Success: Phone authentication successful'); // if OK, set the message
            navigation.navigate("Welcome"); // navigate to the welcome screen
        }catch(error){
            setInfo(`Error : ${error.message}`); // show the error.
        }
    }

    return (
        <View style={styles.container}>
    
            <FirebaseRecaptchaVerifierModal 
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                attemptInvisibleVerification={attemptInvisibleVerification}
            />
    
            {
                info && <Text style={styles.text}>{info}</Text>
            }
    
            { // show the phone number input field when verification id is not set.
                !verificationId && (
                    <View>
                        <Text style={styles.text}>Enter the phone number</Text>
    
                            <TextInput
                                placeholder='+2547000000'
                                autoFocus
                                autoComplete='tel'
                                keyboardType='phone-pad'
                                textContentType='telephoneNumber'
                                onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
                            />
    
                            <Button 
                                onPress={ () => handleSendVerificationCode()}
                                title= "Send Verification Code"
                                disabled={!phoneNumber}
                            />
                    </View>
                )
                
            }
    
            { // if verification id exists show the confirm code input field.
                verificationId && (
                    <View>
                        <Text style={styles.text}>Enter the verification code</Text>
    
                        <TextInput
                            editable={!!verificationId}
                            placeholder= "123456"
                            onChangeText={setVerificationCode}
                        />
    
                        <Button
                            title= "Confirm Verification Code"
                            disabled={!verificationCode}
                            onPress = {() => handleVerifyVerificationCode()}
                        />
                    </View>
                )
            }
    
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner/>}
        </View>
    )

}

const styles = StyleSheet.create({
    text:{
        color: "#aaa"
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
    })


    export default SignInScreen;


















// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { Link, router } from 'expo-router';

// const PhoneNumberScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleNext = () => {
//     // Validate phone number if needed
//     // Proceed to OTP screen or perform other actions
    
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Phone Number"
//         keyboardType="phone-pad"
//         value={phoneNumber}
//         onChangeText={(text) => setPhoneNumber(text)}
//       />
//       <TouchableOpacity>
//       <Button title="Next" onPress={() => router.push({
//         pathname:"LoginAndOTP/OTPScreen",
//         params:{phoneNumber:phoneNumber}})} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     width: '80%',
//   },
// });

// export default PhoneNumberScreen;
