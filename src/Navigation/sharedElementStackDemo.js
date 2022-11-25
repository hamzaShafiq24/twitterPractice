import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DetailScreen from '../Screens/detailScreen';
import MainScreen from '../Screens/mainScreen';


const Stack = createSharedElementStackNavigator();

const SharedElementStackDemo = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="List">
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    sharedElements={(route, otherRoute, showing) => {
                        const { item } = route.params;
                        return [{
                            id: `item.${item.id}.card`,
                            animation: 'move',
                            // resize: 'clip'
                            // align: 'left-top'
                          },];
                      }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default SharedElementStackDemo