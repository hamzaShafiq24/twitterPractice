import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const NewComponent = ({ type }) => {

    const myTypes = (type) => {
        switch (type) {
            case "first":
                return {name:'hamza',myStyle:{backgroundColor:'red'}}
            default: return {name:"basit",myStyle:{backgroundColor:'green'}}
        }
    }

    const myObj = myTypes(type)

    return (
        <View style={styles.mainContainer}>
           <TouchableOpacity
           style={[{width:50,height:50,justifyContent:'center',alignItems:'center'},myObj.myStyle]}
           >
           <Text>{myObj.name}</Text>
           </TouchableOpacity>
        </View>
    )
}

export default NewComponent

const styles = StyleSheet.create({
mainContainer:{
    width:'90%',
    height:50,
    backgroundColor:"skyblue"
}
})