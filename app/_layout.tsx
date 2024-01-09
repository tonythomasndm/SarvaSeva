import { Stack } from 'expo-router';

const RootLayout = ()=>{
    return <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="LoginAndOTP/PhoneNumberScreen" />
        <Stack.Screen name="LoginAndOTP/OTPScreen" />     
    </Stack>;
}

export default RootLayout;