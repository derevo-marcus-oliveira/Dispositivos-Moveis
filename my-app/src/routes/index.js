import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function Routes(){
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
