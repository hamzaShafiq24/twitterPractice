import { StyleSheet, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import BackArrowTwoSvg from '../../Assets/Icons/CommonSvgs/backArrowTwoSvg'
import TwitterLogoSvg from '../../Assets/Icons/CommonSvgs/twitterLogoSvg'


const AbstractHeaders = ({ type,onPressLeft,onPressRight }) => {

    if (type === TYPES.home) {
        return (
            <View style={[styles.mainContainer]}>
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={onPressLeft}
            style={styles.viewOne}>
                <View style={styles.profileImageStyle}>
                 <Image source={require('../../Assets/Images/myImage.jpeg')} style={{width:'100%',height:'100%',borderRadius:25}} />
                </View>
            </TouchableOpacity>
            <View style={styles.viewTwo}>
                <TwitterLogoSvg />
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPressRight}
            style={styles.viewThree}>
            </TouchableOpacity>
        </View>
        )
    }

    else {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity 
                activeOpacity={0.9}
                onPress={onPressLeft}
                style={styles.viewOne}>
                    <BackArrowTwoSvg />
                </TouchableOpacity>
                <View style={styles.viewTwo}>
                    <TwitterLogoSvg />
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={onPressRight}
                style={styles.viewThree}>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AbstractHeaders

export const TYPES = {
    home: "home"
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
    },
    viewOne: {
        width: '10%',
        height: "100%",
        justifyContent:"center"
    },
    viewTwo: {
        width: '80%',
        height: "100%",
        justifyContent:'center',
        alignItems:'center'
    },
    viewThree: {
        width: '10%',
        height: "100%",
        justifyContent:'center',
        alignItems:'center'
    },
    profileImageStyle:{
        width:25,
        height:25,
        borderRadius:25,
        backgroundColor:'black'
    }

})