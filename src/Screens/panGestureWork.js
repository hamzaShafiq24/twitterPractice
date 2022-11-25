import { StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useRef, useCallback, useState, createRef, useEffect } from 'react'
import { PanGestureHandler, PinchGestureHandler, RotationGestureHandler, State } from 'react-native-gesture-handler';
import { imageOneCoordinates } from "../Utils/mocData"

const IMAGE = "https://via.placeholder.com/200x200.png";
const PanGestureWork = () => {

    const [panEnabled, setPanEnabled] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
    const [imageLoading, setImageLoading] = useState(true);
    const scale = useRef(new Animated.Value(1)).current;
    const translateXValue = useRef(new Animated.Value(0)).current
    const translateYValue = useRef(new Animated.Value(0)).current
    const rotationZValue = useRef(new Animated.Value(0)).current
    const viewRef = useRef()


    const pinchRef = createRef();
    const panRef = createRef();
    const rotateRef = createRef();

    const onPinchEvent = Animated.event([{
        nativeEvent: { scale }
    }],
        { useNativeDriver: true });

    const onPanEvent = Animated.event([{
        nativeEvent: {
            translationX: translateXValue,
            translationY: translateYValue
        }
    }],
        { useNativeDriver: true });

    const onRotateEvent = Animated.event([{
        nativeEvent: {
            rotation: rotationZValue
        }
    }],
        { useNativeDriver: true });

    const handlePinchStateChange = ({ nativeEvent }) => {
        // enabled pan only after pinch-zoom
        if (nativeEvent.state === State.ACTIVE) {
            setPanEnabled(true);
        }

        // when scale < 1, reset scale back to original (1)
        const nScale = nativeEvent.scale;
        console.log(nativeEvent)
        if (nativeEvent.state === State.END) {
            if (nScale < 1) {
                Animated.spring(scale, {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
                Animated.spring(translateXValue, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
                Animated.spring(translateYValue, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();

                setPanEnabled(false);
            }
        }
    };


    const rotateStr = rotationZValue.interpolate({
        inputRange: [-100, 100],
        outputRange: ["-100rad", "100rad"],
    });



    useEffect(() => {
        Image.getSize(IMAGE, (width, height) => {
            console.log(`Image ${width} x ${height}`)
            setImageSize({ width, height })
            setTimeout(() => {
                setImageLoading(false)
            }, 500)
        })
    }, [])

    return (
        <View >
            <PanGestureHandler
                onGestureEvent={onPanEvent}
                ref={panRef}
                // simultaneousHandlers={[pinchRef]}
                // enabled={panEnabled}
                enabled={true}
                failOffsetX={[-1000, 1000]}
                shouldCancelWhenOutside
            >
                <Animated.View style={{ width: '100%', height: '100%', transform: [{ translateX: translateXValue }, { translateY: translateYValue }] }} >
                    {/* <Animated.View style={{width: 100, height: 100,backgroundColor:'pink'}}> */}
                    <RotationGestureHandler
                        ref={rotateRef}
                        onGestureEvent={onRotateEvent}
                        simultaneousHandlers={[pinchRef]}
                        onHandlerStateChange={handlePinchStateChange}
                    >
                        <Animated.View
                            style={{ width: '100%', height: '100%', transform: [{ rotate: rotateStr }] }}
                        >
                            <PinchGestureHandler
                                ref={pinchRef}
                                onGestureEvent={onPinchEvent}
                                simultaneousHandlers={[rotateRef]}
                                onHandlerStateChange={handlePinchStateChange}
                            >
                                <Animated.View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        transform: [{ scale: scale }],
                                        justifyContent: "center",
                                        alignItems: 'center'
                                    }} >
                                    {/* <Image resizeMode="contain" source={{ uri: 'https://via.placeholder.com/150' }} style={{height:100, width:200, backgroundColor: 'red'}} /> */}
                                    <ImageBackground
                                        source={{ uri: IMAGE }}
                                        style={{ width: imageSize.width, height: imageSize.height, position: "relative" }}
                                        // style={{
                                        //     // width: 100,
                                        //     height: 100,
                                        //     // transform: [{ scale: scale }, { translateX: translateXValue }, { translateY: translateYValue }]
                                        // }}
                                        onLayout={({ nativeEvent }) => {
                                            console.log(nativeEvent.layout)
                                            // viewRef.current?.measure((x, y, width, height, pageX, pageY) => {
                                            //     console.log(x, y, width, height, pageX, pageY);
                                            // })
                                        }}
                                        imageStyle={{ width: imageSize.width, height: imageSize.height, position: "relative" }}
                                        resizeMode="contain"
                                    >
                                        {imageOneCoordinates.map((item,index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={item.onPress}
                                                    style={{ width: 20, height: 20, backgroundColor:item.color, position: "absolute", left: item.left,right:item.right,top:item.top,bottom:item.bottom,borderWidth:1 }}
                                                >
                                                </TouchableOpacity>
                                            )
                                        })}


                                    </ImageBackground>

                                </Animated.View>
                            </PinchGestureHandler>
                        </Animated.View>
                    </RotationGestureHandler>
                </Animated.View>
            </PanGestureHandler >
            {
                imageLoading ?
                    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "black", justifyContent: "center", alignItems: "center" }]}>
                        <ActivityIndicator color="white" size="large" />
                    </View> : false
            }
        </View >
    )
}

export default PanGestureWork

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1
    },
    imageContainer: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    }
})