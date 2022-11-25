import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../../Theme'
import { moderateScale } from 'react-native-size-matters'
import AnimatedButton from '../../../Animated/AnimatedComponents/AnimatedButton'

const defaultProps = {
    label: 'Text Here'
}

const AbstractButtonSimple = ({ onPress, types, processing, label, width, backgroundColor,icon }) => {

    if (types === TYPES.iconAndText) {

        return (
            <AnimatedButton
                disabled={processing}
                onPress={onPress}
                width={width}
                backgroundColor={Colors.whitePrimary}
                borderWidth={true}
            >
                {processing ?
                    <ActivityIndicator size={'small'} color={Colors.skyBluePrimary} />
                    :
                    <>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    {icon?icon():false}
                    <Text style={styles.textTwo}>{label}</Text>
                    </View>
                    </>
                }
            </AnimatedButton>
        )

    }

    else {
        return (
            <AnimatedButton
                disabled={processing}
                onPress={onPress}
                width={width}
                backgroundColor={backgroundColor}
            >
                {processing ?
                    <ActivityIndicator size={'small'} color={Colors.whitePrimary} />
                    :
                    <Text style={styles.textOne}>{label}</Text>
                }
            </AnimatedButton>
        )
    }

}

AbstractButtonSimple.defaultProps = defaultProps
export default AbstractButtonSimple

export const TYPES = {
    iconAndText: 'iconAndText'
}

const styles = StyleSheet.create({
    mainView: {
        width: moderateScale(136, 0.1),
        height: moderateScale(33, 0.1),
        backgroundColor: Colors.skyBluePrimary,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOne: {
        fontSize: moderateScale(15, 0.1),
        fontFamily: Fonts.semiBold,
        color: Colors.whitePrimary
    },
    textTwo: {
        fontSize: moderateScale(15, 0.1),
        fontFamily: Fonts.semiBold,
        color: Colors.blackPrimary,
        paddingLeft:10
    },

})


