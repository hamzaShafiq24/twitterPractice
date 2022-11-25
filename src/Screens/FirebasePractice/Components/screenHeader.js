import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from './backButton'

const ScreenHeader = ({screenName}) => {

  return (
    <View style={styles.mainContainer}>

       <View style={{height:'100%',justifyContent:"center",alignItems:'center',width:"15%"}}>
        <BackButton color={"grey"} />
       </View>
       
       <View style={{width:"70%",height:'100%',justifyContent:"center",alignItems:'center'}}>
        {screenName ?
        <Text style={{color:'black',fontWeight:'bold',fontSize:19}}>{screenName}</Text>
        :false}
       </View>

       <View style={{width:"15%",height:'100%',justifyContent:"center",alignItems:'center'}}>

       </View>

    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:50,
        flexDirection:"row"
    }
})