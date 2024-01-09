import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignInScreen';
import WelcomeScreen from './screens/Welcome';

const Stack = createStackNavigator();

export default function App() {
    return (
        
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{title:"SignInScreen"}} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:"Welcome"}} />
        </Stack.Navigator>
        
    );
}













// import { View,Text, ScrollView, SafeAreaView } from 'react-native';
// import { useState } from 'react';
// import { Stack, useRouter,Link } from 'expo-router';
// import { COLORS, SIZES } from '../constants';

// import  PhoneNumberScreen  from './LoginAndOTP/PhoneNumberScreen'
// const Home = () =>{
//     const router = useRouter();

//     return (
//         <SafeAreaView style={{flex:1, backgroundColor: COLORS.background}}>
//             <Stack.Screen 
//             options={{
//                 headerStyle:{ backgroundColor:COLORS.buttons},
//                 headerTitleAlign: 'center',
//                 headerTitle:"SarvaSeva",
//                 headerTitleStyle:{color:'white', fontSize:SIZES.large}
//             }}
//             />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <View style={{ flex:1, padding: SIZES.medium }}>
//                 <PhoneNumberScreen/>
//                 </View>    
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// export default Home;