import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export const VolunteerApplication=(props)=>{
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('AdminPage')} style={styles.button}>
      <Text style={styles.buttons}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('HelperEventCreation')} style={styles.button}>
      <Text style={styles.buttons}>Helper</Text>
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
