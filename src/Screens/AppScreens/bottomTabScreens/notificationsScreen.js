import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../../../Components/AbstractComponents/abstractScreenContainer'
import FocusAwareStatusBar from '../../../Components/AbstractComponents/statusBarConfiguration'
import { Colors } from '../../../Theme'

const NotificationsScreen = () => {
  return (
    <ScreenContainer>
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />
      <Text>NotificationsScreen</Text>
    </View>
    </ScreenContainer>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})