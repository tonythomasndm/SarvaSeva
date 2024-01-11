import { useState } from 'react';
import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet} from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../FirebaseConfig';
export const DefineSkill=()=>{
    const [skill,setSkill]=useState('');
    const addSkill=async()=>{
        try{
            const docRef=await addDoc(collection(FIRESTORE_DB,'Skill'),{
                skill:skill
            });
            console.log('skill added with id: ', docRef.id);
        }
        catch(e){
            console.log('error adding skill: ', e);
        }
    }
    return (
        <View>
            <TextInput value={skill} style={styles.input} placeholder="Skill" autoCapitalize="none" onChangeText={(text)=>setSkill(text)}></TextInput>
            <Button title="Add Skill" onPress={addSkill}/>
        </View>
    )
}
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