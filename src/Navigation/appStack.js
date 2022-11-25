import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainScreen from '../Screens/AppScreens/mainScreen'
import BottomTabNavigation from './bottomTabNavigation';
import DrawerNavigation from './drawerNavigation';


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      /> */}

      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />

      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />


    </Stack.Navigator>
  );
};

export default AppStack;