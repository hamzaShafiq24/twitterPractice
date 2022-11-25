import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../../../Components/AbstractComponents/abstractScreenContainer'
import FocusAwareStatusBar from '../../../Components/AbstractComponents/statusBarConfiguration'
import { Colors } from '../../../Theme'

const SearchScreen = () => {
  return (
    <ScreenContainer>
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />
      <Text>SearchScreen</Text>
    </View>
    </ScreenContainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})