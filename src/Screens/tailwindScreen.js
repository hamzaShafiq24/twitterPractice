import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from 'nativewind'

const TailwindScreen = ({hamza}) => {
  return (
    <View className={hamza?"container":"container2"} >
      <Text>TailwindScreen</Text>
    </View>
  )
}

export default TailwindScreen

NativeWindStyleSheet.create({
    styles:{
        container:{
            width:'100%',
            height:'100%',
            backgroundColor:"white",
            justifyContent:'center',
            alignItems:'center',
           },
           container2:{
            width:'100%',
            height:'100%',
            backgroundColor:"red",
            justifyContent:'center',
            alignItems:'center',
           }
    }
})