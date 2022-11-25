import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../../Components/AbstractComponents/abstractScreenContainer'
import FocusAwareStatusBar from '../../Components/AbstractComponents/statusBarConfiguration'
import { Colors } from '../../Theme'
import AbstractHeaders from '../../Components/AbstractComponents/abstractHeaders'
import { goBack, navigate } from '../../Navigation/mainNavigation'
import AbstractContentContainer from '../../Components/AbstractComponents/abstractContentContainer'

const ProfileScreen = () => {
  return (
    <ScreenContainer>
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />
    <AbstractContentContainer>
      <AbstractHeaders onPressLeft={()=>navigate('BottomTab')} />
  
    </AbstractContentContainer>
    </View>
    </ScreenContainer>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
})