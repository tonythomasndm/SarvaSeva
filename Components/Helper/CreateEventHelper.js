import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';



const createTimeStamp = (date,startTime,endTime) => {
  const [day, month, year] = date.split('-').map(Number);
  const [shr, smin] = startTime.split('-').map(Number);
  const [ehr, emin] = endTime.split('-').map(Number);
  
  const startDate = new Date(year, month-1, day, shr, smin);
  const endDate = new Date(year, month-1, day, ehr, emin);

  startTimeStamp = fromDate(startDate);
  endTimeStamp = fromDate(endDate);
  addEvent();
}

const addEvent = async () => {
  try {
    const docRef = await addDoc(collection(FIRESTORE_DB, 'Events'), {
      eventName : name,
      eventStart : startTimeStamp,
      eventEnd : endTimeStamp,
      adminApproved : false,
      suggestedBy : 'dummy',
    });
  console.log('Document written with ID: ', docRef.id);
  }
  catch (e) {
		console.error('Error adding document: ', e);
	}
}

export const HelperCreateEventPage = () => {
const [name, setName] = useState('');
const [date, setDate] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
let startTimeStamp;
let endTimeStamp;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Enter event name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={setDate}
        placeholder="Enter date using '-'"
        value={date}
      />
      <TextInput
        style={styles.input}
        onChangeText={setStartTime}
        placeholder="Enter start time using ':'"
        value={startTime}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEndTime}
        placeholder="Enter end time using ':'"
        value={endTime}
      />
      <TouchableOpacity style={styles.button} onPress={()=>createTimeStamp(date,startTime,endTime)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HelperCreateEventPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'lightblue',
  },
});