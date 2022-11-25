import React, { createRef, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DrawerActions, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './authStack';
import AppStack from './appStack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Colors, darkModeColors } from '../Theme';
import ThemeController from '../Controllers/themeController';

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

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer())
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}


const MyDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...darkModeColors
  },
};


const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors
  },
};


const MainNavigation = () => {

  const scheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(false)
  const appTheme = darkMode ? MyDarkTheme : MyDefaultTheme
  // const appTheme = darkMode || scheme == "dark"  ? MyDarkTheme : MyDefaultTheme


  useEffect(() => {
    ThemeController.checkAsyncAndSetPreviousMode()
    ThemeController.listeningToChange((data)=>{
      setDarkMode(data)
    })
    return () => {
      ThemeController.removingListener()
    }
  }, [])


  return (
    <NavigationContainer
      theme={appTheme}
      ref={navigationRef}
      onReady={() => RNBootSplash.hide()}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>

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
            gestureDirection: 'horizontal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;