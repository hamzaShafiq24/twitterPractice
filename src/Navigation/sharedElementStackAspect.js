import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import MainScreenAspect from '../Screens/mainScreenAspect';
import DetailScreenAspect from '../Screens/detailScreenAspect';


const Stack = createSharedElementStackNavigator();

const SharedElementStackAspect = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="List">
                <Stack.Screen
                    name="Main"
                    component={MainScreenAspect}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreenAspect}
                    sharedElements={(route, otherRoute, showing) => {
                        const { item } = route.params;
                        return [
                            {
                                id: `item.top`,
                                animation: "fade",
                                // resize: 'clip',
                                // align: 'left-top'
                            },
                            {
                                id: `item.card`,
                                animation: "fade",
                                // resize: 'clip',
                                // align: 'left-top'
                            },
                            {
                                id: `item.text`,
                                animation: "move",
                                // resize: 'clip',
                                // align: 'left-top'
                            },
                        ];
                    }}
                    options={{
                        gestureEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default SharedElementStackAspect