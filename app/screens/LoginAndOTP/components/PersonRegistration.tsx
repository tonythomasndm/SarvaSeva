import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet} from 'react-native';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';


const Page1=()=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [aadharno,setAadharno]=useState('');
    const [skills,setSkills]=useState('');
    const addPerson=async()=>{
        try{
            const docRef= await addDoc(collection(FIRESTORE_DB,'Person'),{
                name:name,
                phone:phone,
                address:address,
                aadharno:aadharno,
                skills:skills
            });
            console.log("person added with document id : ", docRef.id);
        }
        catch(e){
            console.error('error adding document: '+e);
        }
    }
    
    return (
        <View style={styles.container}>
           
            {/* <KeyboardAvoidingView behavior="padding"> */}
            <TextInput value={name} style={styles.input} placeholder="Name" autoCapitalize="none" onChangeText={(text)=>setName(text)}></TextInput>
            <TextInput value={phone} style={styles.input} placeholder="Phone" autoCapitalize="none" onChangeText={(text)=>setPhone(text)}></TextInput>
            <TextInput value={address} style={styles.input} placeholder="Address" autoCapitalize="none" onChangeText={(text)=>setAddress(text)}></TextInput>
            <TextInput value={aadharno} style={styles.input} placeholder="Aadhar number" autoCapitalize="none" onChangeText={(text)=>setAadharno(text)}></TextInput>
            <TextInput value={skills} style={styles.input} placeholder="Skills" autoCapitalize="none" onChangeText={(text)=>setSkills(text)}></TextInput>
            
            <Button title="Save"  onPress={addPerson}/>
            {/* {loading?(<ActivityIndicator size="large" color="#0000ff"/>)
            :(<>
            
                </>)}
                </KeyboardAvoidingView> */}
                </View>
    )
}
export default Page1;
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