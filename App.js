import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminPage } from './Components/Admin/AdminPage';
import { EventCreation } from './Components/Admin/CreateEvent';
import ApprovedEvents from './Components/Admin/ApprovedEvents';
import PendingEvents from './Components/Admin/EventApplications';
import { HelperCreateEventPage } from './Components/Helper/CreateEventHelper';
import { VolunteerApplications } from './Components/Admin/VolunteerApplications';
import { DefineSkill } from './Components/Admin/DefineSkill';
import { HelperPage } from './Components/Helper/HelperPage';
import { HelperSignup } from './Components/Helper/HelperSignup';
import {DropdownComponent} from './Components/Dropdown';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="AdminPage" component={AdminPage} options={{title:"Welcome Admin"}} />
            <Stack.Screen name="CreateEvent" component={EventCreation} options={{title:"Admin Create Event"}} />
            <Stack.Screen name="ApprovedEvents" component={ApprovedEvents} options={{title:"Approved Events"}} />
            <Stack.Screen name="PendingEvents" component={PendingEvents} options={{title:"Pending Events"}} />
            <Stack.Screen name="VolunteerApplications" component={VolunteerApplications} options={{title:"Volunteer Applications"}} />
            <Stack.Screen name="HelperEventCreation" component={HelperCreateEventPage} options={{title:"Welcome Helper"}} />
            <Stack.Screen name="DefineSkill" component={DefineSkill} options={{title:"Add skill"}} />
            <Stack.Screen name="HelperPage" component={HelperPage} options={{title:"Welcome Helper"}} />
            <Stack.Screen name="HelperSignup" component={HelperSignup} options={{title:"Helper Signup"}} />

            {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome"}} /> */}
            {/* <Stack.Screen name="VolunteerApplication" component={VolunteerApplication} options={{title:"Volunteer"}} /> */}
            
        </Stack.Navigator>
        </NavigationContainer>
  );
}
const HomeScreen=(props)=>{
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('AdminPage')} style={styles.button}>
      <Text style={styles.buttons}>Administrator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('HelperSignup')} style={styles.button}>
      <Text style={styles.buttons}>Helper</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')} style={styles.button}>
      <Text style={styles.buttons}>Seeker</Text>
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
