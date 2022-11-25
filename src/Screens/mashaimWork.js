import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef } from 'react'

const MashaimWork = () => {

    const scrolling = useRef(new Animated.Value(0)).current;

    const translation = scrolling.interpolate({
        inputRange: [0, 10],
        outputRange: [1,2],
        extrapolate: 'clamp',
    });

    console.log(scrolling)

    return (
        <View style={styles.mainContainer}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <View
                    style={{ backgroundColor: 'white', flex: 1 }}
                >
                    <View style={{ width: '100%', height: 350, backgroundColor: 'pink' }} />

                </View>
            </View>

            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <Animated.ScrollView
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: scrolling,
                                },
                            },
                        }],
                        { useNativeDriver: true },
                    )}
                    style={{ flex: 1 }}
                >
                    <View style={{ width: '100%', height: 350, backgroundColor: 'transparent',justifyContent:'center',alignItems:'center' }} >
                     <Animated.View style={{width:"50%",height:50, backgroundColor: "red",transform:[{scaleX:translation}]}} />
                    </View>

                    <View style={{height:600,width:'100%'}} ></View>

                </Animated.ScrollView>
            </View>



        </View>
    )
}

export default MashaimWork

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
})