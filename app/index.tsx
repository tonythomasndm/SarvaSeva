import { View,Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter,Link } from 'expo-router';
import { COLORS, SIZES } from '../constants';

import  PhoneNumberScreen  from './LoginAndOTP/PhoneNumberScreen'
const Home = () =>{
    const router = useRouter();

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.background}}>
            <Stack.Screen 
            options={{
                headerStyle:{ backgroundColor:COLORS.buttons},
                headerTitleAlign: 'center',
                headerTitle:"SarvaSeva",
                headerTitleStyle:{color:'white', fontSize:SIZES.large}
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex:1, padding: SIZES.medium }}>
                <PhoneNumberScreen/>
                </View>    
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;