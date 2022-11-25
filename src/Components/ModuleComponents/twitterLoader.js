import { StyleSheet, View,Text } from 'react-native'
import React, { useRef, useEffect } from 'react'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators'
import { Colors, Fonts } from '../../Theme'
import { moderateScale } from 'react-native-size-matters'
import TwitterLogoSvg from '../../Assets/Icons/CommonSvgs/twitterLogoSvg'


const TwitterLoader = () => {

  return (
    <View style={styles.mainContainer} >
      <View style={styles.viewOne}>

        <View style={{...StyleSheet.absoluteFillObject}}>
       <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
          <MaterialIndicator color={Colors.skyBluePrimary} size={58} trackWidth={2} />
       </View>
        </View>

        <View style={{...StyleSheet.absoluteFillObject}}>
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
          <TwitterLogoSvg width={20} height={20} />
       </View>
        </View>

      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>Loading...</Text>
      </View>
     
    </View>
  )
}

export default TwitterLoader

const styles = StyleSheet.create({
  mainContainer: {
    width: 85,
    height: 90,
  },
  viewOne: {
    width: '100%',
    height: '80%',
  },
  viewTwo:{
    width: '100%',
    height: '20%',
    justifyContent:'center',
    alignItems:'center',
  },
  textOne:{
    fontSize:moderateScale(12,0.1),
    fontFamily:Fonts.bold,
    color:Colors.blackPrimary
  }
})

