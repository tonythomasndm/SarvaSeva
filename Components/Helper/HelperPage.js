import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export const HelperPage=(props)=>{
    const id=props.route.params;
    console.log('helper page id',id)
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('HelperEventCreation',{id:id})} style={styles.button}>
      <Text style={styles.buttons}>Create Event</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('ApprovedEventsHelper',{id:id})} style={styles.button}>
      <Text style={styles.buttons}>Apply in events</Text>
      </TouchableOpacity>
     
     
    
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
