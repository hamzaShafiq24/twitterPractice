import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/AppScreens/bottomTabScreens/homeScreen';
import CustomBottomTabBar from './customBottomTab';
import SearchScreen from '../Screens/AppScreens/bottomTabScreens/searchScreen';
import InboxScreen from '../Screens/AppScreens/bottomTabScreens/inboxScreen';
import NotificationsScreen from '../Screens/AppScreens/bottomTabScreens/notificationsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notificatons" component={NotificationsScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;