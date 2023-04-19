import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/home';
import LoginScreen from './src/pages/Login';
import Service from './src/pages/Service';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Service' component={Service}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

