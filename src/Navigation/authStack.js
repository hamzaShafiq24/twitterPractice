import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import StartUpScreen from '../Screens/AuthScreens/startUpScreen'
import CreateAccountScreen from '../Screens/AuthScreens/createAccountScreen'



const Stack = createStackNavigator();



const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="StartUp"
        component={StartUpScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />


    </Stack.Navigator>
  );
};

export default AuthStack;