import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import EyeCompo from './eyeCompo'
import ThirdiLogoSvg from '../Assets/Icons/thirdiLogoSvg'

const ThirdiSplashScreen = () => {
    return (
        <View style={styles.mainContainer}>
             
             {/* //Works perfect on ios eye scale to 0.5 */} 
            {/* <View style={{ width: 288, height: 288 }} >
                <ThirdiLogoSvg />
                <View style={{ ...StyleSheet.absoluteFillObject }} >
                    <View style={{position:'absolute',right:33,top:36}}>
                    <EyeCompo />
                    </View>
                </View>
            </View> */}

            <View style={{ width: 245, height: 245 }} >
                <ThirdiLogoSvg />
                <View style={{ ...StyleSheet.absoluteFillObject }} >
                    <View style={{position:'absolute',right:19,top:23}}>
                    <EyeCompo />
                    </View>
                </View>
            </View>


        </View>
    )
}

export default ThirdiSplashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})