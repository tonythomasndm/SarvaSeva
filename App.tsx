import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen,SignInScreen, WelcomeScreen } from './app/screens/LoginAndOTP';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{title:"SignInScreen"}} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome"}} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
