import React from 'react';
import { View, Text, Button,StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import Page1 from './components/PersonRegistration';
import { EventCard } from './components/eventCard';
import EventCreation from './components/eventCreation';
import VolunteerApplication from './components/volunteerApplication';
import EventPage from './components/eventPage';
import { EventDetails } from './components/ViewDetails';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const OtpPage1: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text }>Welcome to SarvaSeva</Text>
      <Image source={require('../../../assets/logo.png')} style={styles.image}/>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      {/* <EventPage></EventPage> */}
      {/* <EventDetails navigation={navigation}/> */}
      {/* <Page1 navigation={navigation}></Page1> */}
    </View>
  );
};



const styles = StyleSheet.create({
    text:{
        color: "#000",
        fontSize:30
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
      width:200,
      height:200, margin:100
    },
    button:{
        backgroundColor:'#36c2cf',
        color:"#fff",
        margin:10,
        padding:15,
        fontSize:20,
        textAlign:'center',
        borderRadius:20,

    },
    buttonText:{
      fontSize:20,
      color: "#fff",
      // fontFamily:'montserrat'
    }
});

export default OtpPage1;
