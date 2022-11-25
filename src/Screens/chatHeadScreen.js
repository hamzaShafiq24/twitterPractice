import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ChatHead from '../Components/ModuleComponents/chatHead'

const ChatHeadScreen = () => {
  return (
    <View style={styles.container} >
      <ChatHead />
    </View>
  )
}

export default ChatHeadScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
})