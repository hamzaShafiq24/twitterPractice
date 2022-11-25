import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { Colors } from '../../Theme'
import { EventRegister } from 'react-native-event-listeners'
import { useTheme } from '@react-navigation/native'
import ThemeController from '../../Controllers/themeController'
import AsyncStorage from '@react-native-async-storage/async-storage'
const THEME_COLOR = "THEME_COLOR"

const AbstractSwitch = () => {

  const [toggle, setToggle] = useState(false)
  const { colors } = useTheme();

  useEffect(() => {
    AsyncStorage.getItem(THEME_COLOR)
      .then((result) => {
        if (result != null) {
          if (result == "dark") {
            setToggle(true)
          }
          else {
            setToggle(false)
          }
        }
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <View>
      <ToggleSwitch
        isOn={toggle}
        onColor="lightgrey"
        offColor={Colors.skyBluePrimary}
        size="medium"
        onToggle={(isOn) => {
          ThemeController.settingTheme(isOn)
          setToggle(isOn)
        }}
      />
    </View>
  )
}

export default AbstractSwitch

const styles = StyleSheet.create({})