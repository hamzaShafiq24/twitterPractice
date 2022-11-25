import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React, { useEffect } from 'react'
import ReactLogoSvg from '../Assets/Icons/reactLogoSvg'
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming, withSequence, cancelAnimation, withRepeat, interpolate } from 'react-native-reanimated';

const ReactLogoAnimationScreen = () => {

    const sharedVal = useSharedValue(0);
    const rotation = useSharedValue(0);

    const logoAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [ {
                scale: interpolate(
                    sharedVal.value,
                    [1, 0.5, 0.8, 0.5, 1],
                    [1, 0.5, 0.8, 0.5, 1])
            }],
        };
    });


    const aroundFrameAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{
                rotate: interpolate(
                    rotation.value,
                    [0, 0, 90, 180, 270],
                    ["0deg", "0deg", "90deg","180deg", "270deg"]
                 
                )
                
            },
            {
                scale: interpolate(
                    rotation.value,
                    [0, 0, 90, 180, 270],
                    [1, 0.5, 0.8, 0.5, 1]
                    )
            }
        ],

            opacity: interpolate(
                rotation.value,
                [0, 0, 90, 180, 270],
                [0, 0.5, 1, 0.5, 0]
            )
        };
    }, []);



    const keyboardAnimatedStyles = useAnimatedStyle(()=>{
        return{
            opacity: interpolate(
                rotation.value,
                [0, 0, 90, 180, 270],
                [0, 0.5, 1, 0.5, 0]
            ),
            transform:[ {
                scale: interpolate(
                    rotation.value,
                    [0, 0, 90, 180, 270],
                    [1, 0.5, 0.8, 0.5, 1])
            }]
        }
    })



    const startAnimation = () => {
        // sharedVal.value = withSequence(
        //     withTiming(1, { duration: 1500, easing: Easing.linear }),
        //     withTiming(0.5, { duration: 1500, easing: Easing.linear }),
        //     withTiming(0.8, { duration: 1500, easing: Easing.linear }),
        //     withTiming(0.5, { duration: 1500, easing: Easing.linear }),
        //     withTiming(1, { duration: 1500, easing: Easing.linear }),
        // );

        rotation.value = withSequence(
            withTiming(270, { duration: 1500, easing: Easing.ease }),
            withTiming(0, { duration: 1500, easing: Easing.ease }),
            withTiming(90, { duration: 1500, easing: Easing.ease }),
            withTiming(180, { duration: 1500, easing: Easing.ease }),
            withTiming(270, { duration: 1500, easing: Easing.ease }),
        );
    }


    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={{ ...StyleSheet.absoluteFillObject }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.viewOne}>
                        <Animated.View style={[logoAnimatedStyles]} >
                            <ReactLogoSvg size={200} />
                        </Animated.View>
                    </View>
                </View>
            </View>


            <View style={{ ...StyleSheet.absoluteFillObject }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

                    <Animated.View style={[styles.viewTwo, aroundFrameAnimatedStyles]} />
                </View>
            </View>


            <View style={{ ...StyleSheet.absoluteFillObject }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

                    <Animated.View style={[styles.viewThree,keyboardAnimatedStyles]} />
                 
                 <Button title='Press' onPress={startAnimation} />

                </View>
            </View>

        </SafeAreaView>
    )
}

export default ReactLogoAnimationScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewOne: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTwo: {
        width: 250,
        height: 350,
        backgroundColor: 'transparent',
        borderWidth: 5,
        borderBottomColor: 'black',
        borderRadius: 20,
    },
    viewThree: {
        width: 20,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop:160
    }

})