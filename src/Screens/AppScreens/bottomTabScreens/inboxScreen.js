import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../../../Components/AbstractComponents/abstractScreenContainer'
import FocusAwareStatusBar from '../../../Components/AbstractComponents/statusBarConfiguration'
import { Colors } from '../../../Theme'

const InboxScreen = () => {
  return (
    <ScreenContainer>
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />
      <Text>InboxScreen</Text>
    </View>
    </ScreenContainer>
  )
}

export default InboxScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})