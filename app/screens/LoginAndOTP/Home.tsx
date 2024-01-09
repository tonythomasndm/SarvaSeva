import React from 'react';
import { View, Text, Button,StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text }>Welcome to SarvaSeva</Text>
      <Image source={require('../../../assets/logo.png')} style={styles.image}/>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      
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
      width:'100%',
      margin:'20%',
      backgroundColor:COLORS.buttons
    },
    buttonText:{
      fontSize:20,
      color: "#fff",
      fontFamily:'montserrat'
    }
});

export default HomeScreen;
