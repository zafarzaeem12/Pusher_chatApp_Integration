import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserInput from './components/UserInput'
import ChatList from './components/ChatList'
import ChatScreen from './components/ChatScreen'
import ChatInput from './components/ChatInput'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserInput' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='UserInput' component={UserInput} />
        <Stack.Screen name='ChatList' component={ChatList} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
        <Stack.Screen name='ChatInput' component={ChatInput} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})