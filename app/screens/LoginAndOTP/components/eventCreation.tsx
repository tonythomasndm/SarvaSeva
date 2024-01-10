import {View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView,StyleSheet} from 'react-native';
import { useState } from 'react';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const EventCreation=()=>{
    
    const [eventName,setEventName]=useState('');
    const [eventTime,setEventTime]=useState('');
    const [eventDate,setEventDate]=useState('');
    const [eventType,setEventType]=useState('');
    const [eventVenue,setEventVenue]=useState('');

    const addEvent=async()=>{
        try{
            const docRef=await addDoc(collection(FIRESTORE_DB,'Event'),{
                eventName:eventName,
                eventTime:eventTime,
                eventDate:eventDate,
                eventType:eventType,
                eventVenue:eventVenue
            });
            console.log('event added with id: ',docRef.id);
        }
        catch(e){
            console.log('error adding event: ',e);
        }
    };

    return (
        <View style={styles.container}>
            {/* <Text>Login</Text> */}
            {/* <KeyboardAvoidingView behavior="padding"> */}
            <TextInput value={eventName} style={styles.input} placeholder="Event Name" autoCapitalize="none" onChangeText={(text)=>setEventName(text)}></TextInput>
            <TextInput value={eventDate} style={styles.input} placeholder="Event date" autoCapitalize="none" onChangeText={(text)=>setEventDate(text)}></TextInput>
            <TextInput value={eventTime} style={styles.input} placeholder="Event time" autoCapitalize="none" onChangeText={(text)=>setEventTime(text)}></TextInput>
            <TextInput value={eventType} style={styles.input} placeholder="Event type" autoCapitalize="none" onChangeText={(text)=>setEventType(text)}></TextInput>
            <TextInput value={eventVenue} style={styles.input} placeholder="Event Venue" autoCapitalize="none" onChangeText={(text)=>setEventVenue(text)}></TextInput>

            {/* <TextInput value={}  placeholder="Skills" autoCapitalize="none" onChangeText={(text)=>setSkills(text)}></TextInput> */}
            <Button title="Add event" onPress={addEvent}/>
            
                </View>
    )
}
export default EventCreation;
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