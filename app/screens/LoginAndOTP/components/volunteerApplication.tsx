import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet} from 'react-native';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
const VolunteerApplication=(props:any)=>{
    const [skills,setSkills]=useState('');
    // const [phone,setPhone]=useState('');
    // const [address,setAddress]=useState('');
    // const [aadharno,setAadharno]=useState('');
    // const [skills,setSkills]=useState('');
    const addVolunteer=async()=>{
        try{
            const docRef= await addDoc(collection(FIRESTORE_DB,'Volunteer'),{
                skills:skills
    
            });
            console.log("volunteer added with document id : ", docRef.id);
        }
        catch(e){
            console.error('error adding document: '+e);
        }
    }
    return (
        <View style={styles.container}>
            {/* <Text>Login</Text> */}
            {/* <KeyboardAvoidingView behavior="padding"> */}
            {/* <TextInput value={name} style={styles.input} placeholder="Name" autoCapitalize="none" onChangeText={(text)=>setName(text)}></TextInput> */}
            {/* <TextInput value={phone} style={styles.input} placeholder="Phone" autoCapitalize="none" onChangeText={(text)=>setPhone(text)}></TextInput>
            <TextInput value={address} style={styles.input} placeholder="Address" autoCapitalize="none" onChangeText={(text)=>setAddress(text)}></TextInput>
            <TextInput value={aadharno} style={styles.input} placeholder="Aadhar number" autoCapitalize="none" onChangeText={(text)=>setAadharno(text)}></TextInput> */}
            <TextInput value={skills} style={styles.input} placeholder="Skills" autoCapitalize="none" onChangeText={(text)=>setSkills(text)}></TextInput>
            
            {/* <Button title="Next" onPress={()=>{}}/> */}
            <Button title="Save"  onPress={addVolunteer}/>
            {/* <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}> */}
            {/* {loading} */}
            {/* </TextInput> */}
            {/* {loading?(<ActivityIndicator size="large" color="#0000ff"/>)
            :(<>
            <Button title="Login" onPress={signIn}/>
            <Button title="Create Account" onPress={signUp}/>
                </>)}
                </KeyboardAvoidingView> */}
                </View>
    )
}
export default VolunteerApplication;
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1,
        justifyContent:'center'
    },
    input:{
        marginVertical:4,
        height:50,
        borderWidth:1,
        borderRadius:4,
        padding:10,
        backgroundColor:"#fff"
    }
});