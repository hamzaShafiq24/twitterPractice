
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { goBack } from '../firebaseMainNavigation'
import BackButtonSvg from './Assets/Icons/backButtonSvg'

const BackButton = ({color}) => {
  return (
    <TouchableOpacity
    onPress={() => {
      goBack()
    }}
    style={{ width: 50, height: 50, justifyContent: "center", alignItems: 'center' }}>
    <BackButtonSvg color={color} />
  </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})



