import { StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useRef, useCallback, useState, createRef, useEffect } from 'react'
import { PanGestureHandler, PinchGestureHandler, RotationGestureHandler, State } from 'react-native-gesture-handler';
import { imageOneCoordinates } from "../Utils/mocData"

const IMAGE = "https://via.placeholder.com/200x200.png";

const PanGestureWorkV2 = () => {

    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
    const [imageLoading, setImageLoading] = useState(true);
    const pinchRef = createRef();
    const panRef = createRef();
    const rotateRef = createRef();


    // / Pinching /
    let _baseScale = useRef(new Animated.Value(1)).current;
    let _pinchScale = useRef(new Animated.Value(1)).current;
    let _scale = Animated.multiply(_baseScale, _pinchScale);
    let _lastScale = 1;
    let _onPinchGestureEvent = Animated.event(
        [{ nativeEvent: { scale: _pinchScale } }],
        { useNativeDriver: true }
    );


    // / Rotation /;
    let _rotate = useRef(new Animated.Value(0)).current;
    let _rotateStr = _rotate.interpolate({
        inputRange: [-100, 100],
        outputRange: ["-100rad", "100rad"],
    });
    let _lastRotate = 0;
    let _onRotateGestureEvent = Animated.event(
        [{ nativeEvent: { rotation: _rotate } }],
        { useNativeDriver: true }
    );


    // / Pan /;
    let _translateX = useRef(new Animated.Value(0)).current;
    let _translateY = useRef(new Animated.Value(0)).current;
    let _lastOffset = { x: 0, y: 0 };

    let _onPanGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: _translateX,
                    translationY: _translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );


    const _onRotateHandlerStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            _lastRotate += event.nativeEvent.rotation;
            _rotate.setOffset(_lastRotate);
            _rotate.setValue(0);
        }
    };

    const _onPinchHandlerStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            _lastScale *= event.nativeEvent.scale;
            _baseScale.setValue(_lastScale);
            _pinchScale.setValue(1);
        }
    };

    const _onPanGestureStateChange = (event) => {
        console.log("event.nativeEvent.x", event.nativeEvent.x);
        console.log(
            "event.nativeEvent.translationX",
            event.nativeEvent.translationX
        );

        if (event.nativeEvent.oldState === State.ACTIVE) {
            _lastOffset.x += event.nativeEvent.translationX;
            _lastOffset.y += event.nativeEvent.translationY;
            _translateX.setOffset(_lastOffset.x);
            _translateX.setValue(0);
            _translateY.setOffset(_lastOffset.y);
            _translateY.setValue(0);
        }
    };


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
                onGestureEvent={_onPanGestureEvent}
                ref={panRef}
                onHandlerStateChange={_onPanGestureStateChange}
                // simultaneousHandlers={[pinchRef]}
                // enabled={panEnabled}
                enabled={true}
                failOffsetX={[-1000, 1000]}
                shouldCancelWhenOutside
            >
                <Animated.View style={{ width: '100%', height: '100%', transform: [{ translateX: _translateX }, { translateY: _translateY }] }} >
                    {/* <Animated.View style={{width: 100, height: 100,backgroundColor:'pink'}}> */}
                    <RotationGestureHandler
                        ref={rotateRef}
                        simultaneousHandlers={[pinchRef]}
                        onGestureEvent={_onRotateGestureEvent}
                        onHandlerStateChange={_onRotateHandlerStateChange}
                    >
                        <Animated.View
                            style={{ width: '100%', height: '100%', transform: [{ rotate: _rotateStr }] }}
                        >
                            <PinchGestureHandler
                                ref={pinchRef}
                                simultaneousHandlers={[rotateRef]}
                                onGestureEvent={_onPinchGestureEvent}
                                onHandlerStateChange={_onPinchHandlerStateChange}
                            >
                                <Animated.View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        transform: [{ scale: _scale }],
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
                                        {imageOneCoordinates.map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={item.onPress}
                                                    style={{ width: 20, height: 20, backgroundColor: item.color, position: "absolute", left: item.left, right: item.right, top: item.top, bottom: item.bottom, borderWidth: 1 }}
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

export default PanGestureWorkV2

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