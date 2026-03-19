import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from '../context/AppContext';
import AuthStack from './AuthStack';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainApp" component={MainTab} />
      ) : (
        <Stack.Screen name="AuthApp" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}