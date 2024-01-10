import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen,SignInScreen, WelcomeScreen } from './app/screens/LoginAndOTP';
import VolunteerApplication from './app/screens/LoginAndOTP/components/volunteerApplication';
import OtpPage1 from './app/screens/LoginAndOTP/otpPage1';
import EventPage from './app/screens/LoginAndOTP/components/eventPage';
import { EventDetails } from './app/screens/LoginAndOTP/components/ViewDetails';
import EventCreation from './app/screens/LoginAndOTP/components/eventCreation';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{title:"SignInScreen"}} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="VolunteerApplication" component={VolunteerApplication} options={{title:"Volunteer"}} />
            <Stack.Screen name="OtpPage1" component={OtpPage1} options={{title:"OtpPage1"}} />
            <Stack.Screen name="EventPage" component={EventPage} options={{title:"EventPage"}} />
            <Stack.Screen name="EventDetails" component={EventDetails} options={{title:"EventDetails"}} />
            <Stack.Screen name="EventCreation" component={EventCreation} options={{title:"EventCreation"}} />

        </Stack.Navigator>
        </NavigationContainer>
    );
}
