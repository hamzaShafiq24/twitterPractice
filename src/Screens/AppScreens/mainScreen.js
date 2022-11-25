import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AbstractButtonSimple from '../../Components/AbstractComponents/AbstractButtons/abstractButtonSimple'
import ScreenContainer from '../../Components/AbstractComponents/abstractScreenContainer'
import TwitterLoader from '../../Components/ModuleComponents/twitterLoader'
import AbstractContentContainer from '../../Components/AbstractComponents/abstractContentContainer'
import AbstractHeaders from '../../Components/AbstractComponents/abstractHeaders'
import AbstractTextInput from '../../Components/AbstractComponents/abstractTextInput'

const MainScreen = () => {

  return (
    <ScreenContainer>
      <View style={styles.mainContainer}>
        <AbstractContentContainer>
   

        </AbstractContentContainer>
        
      </View>
    </ScreenContainer>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
})