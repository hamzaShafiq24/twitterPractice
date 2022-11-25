import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../Theme';


const defaultProps = {
    width: moderateScale(136, 0.1),
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: Colors.skyBluePrimary,
}

const AnimatedButton = ({ children, onPress, backgroundColor, disabled, width, paddingVertical, paddingHorizontal,borderWidth }) => {
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }, 30);
    };

    return (
        <Animated.View style={[styles.mainView, { transform: [{ scale }], backgroundColor, width, minHeight: moderateScale(45, 0.1),borderWidth:borderWidth?1:0,borderColor:borderWidth?Colors.greyPrimaryOne:Colors.skyBluePrimary}]}>
            <TouchableOpacity
                disabled={disabled}
                style={[styles.btnView, { paddingHorizontal, paddingVertical }]}
                activeOpacity={0.9}
                onPressIn={onPressIn}
                onPress={onPress}
                onPressOut={onPressOut}>
                {children}
            </TouchableOpacity>
        </Animated.View>
    );
}

export default AnimatedButton
AnimatedButton.defaultProps = defaultProps

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 20,
        borderWidth:1,
        borderColor:Colors.greyPrimaryOne
    },
    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        minHeight: moderateScale(45, 0.1),
    },
});