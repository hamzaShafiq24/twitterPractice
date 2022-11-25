import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, ActivityIndicator } from "@react-native-material/core";

export const SIZE = {
  large: "large",
  small: "small"
}

const ActivityIndicatorMUI = ({ size, color }) => {

  const defaultSize = size ? size : SIZE.large
  const defaultColor = color ? color : "black"

  return (
    <ActivityIndicator size={defaultSize} color={defaultColor} />
  )
}

export default ActivityIndicatorMUI

const styles = StyleSheet.create({})