import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewComponent from '../Components/ModuleComponents/newComponent'

const MainScreenOne = () => {
  return (
    <View style={styles.mainContainer}>

                       
     <NewComponent   />
     
       
    </View>
  )
}

export default MainScreenOne

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})