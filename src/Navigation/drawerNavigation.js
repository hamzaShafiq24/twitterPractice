import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Screens/AppScreens/profileScreen'
import BottomTabNavigation from './bottomTabNavigation';
import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    drawerContent={props =><CustomDrawer {...props} /> }
    screenOptions={{ headerShown: false }}>
     <Drawer.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}

      />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})