import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const defaultProps = {
 label:'Text#'
}


const OrderNumberButton = ({label,onPress,item}) => {

    // const [active,setActive] = useState(item.active)

    // console.log(active)

    const _handlePress = () => {
        // setActive(true)
        if(onPress){
         onPress()
        }
    }


  return (
    <TouchableOpacity 
    onPress={_handlePress}
    style={[styles.mainContainer,
    {backgroundColor:item.active?"orange":"white"}
    ]} >
      <Text>{`Order#${label}`}</Text>
    </TouchableOpacity>
  )
}
export default OrderNumberButton
OrderNumberButton.defaultProps = defaultProps


const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:40,
        justifyContent:"center",
        alignItems:'center',
        borderBottomColor:"lightgrey",
        borderBottomWidth:0.5,
    }
})