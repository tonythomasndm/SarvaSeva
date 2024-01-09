import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>; // You can replace 'any' with the type of your navigation stack
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hurray!!, we are on the home screen</Text>
      <Button onPress={() => navigation.navigate('SignIn')} title="Go to Sign In" />
    </View>
  );
};



const styles = StyleSheet.create({
    text:{
        color: "#aaa"
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;
