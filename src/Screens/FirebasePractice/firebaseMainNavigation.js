import React, { createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import { CardStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from './Screens/loginScreen';
import ContactsScreen from './Screens/contactsScreen';
import SignupScreen from './Screens/signupScreen';
import SplashScreen from './Screens/splashScreen';
import ConversationsScreen from './Screens/conversationsScreen';
import ChatScreen from './Screens/chatScreen';

const Stack = createStackNavigator();

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function clearAndNavigate(name, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
    params: params,
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}



const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      />


    </Stack.Navigator>
  );
};


const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      />

      <Stack.Screen
        name="Conversation"
        component={ConversationsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal'
        }}
      />


    </Stack.Navigator>
  );
};











const FirebaseMainNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide()}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />

        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />

        <Stack.Screen
          name="App"
          component={AppStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FirebaseMainNavigation;