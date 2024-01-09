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
    const attemptInvisibleVerification = false;

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
