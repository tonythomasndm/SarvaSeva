import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export const SeekerPage=(props)=>{
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ApprovedEventsSeeker')} style={styles.button}>
      <Text style={styles.buttons}>View Events</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('ApprovedEvents')} style={styles.button}>
      <Text style={styles.buttons}>Signup</Text>
      </TouchableOpacity> */}
     
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    fontSize:20,
    color:'white',
    backgroundColor:'#1245ff',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius:20,
    margin:20,
  
  }
});
