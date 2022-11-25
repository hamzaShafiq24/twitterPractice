import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import ScreenContainer from '../Components/AbstractComponents/abstractScreenContainer'
import { Colors } from '../Theme'
import AbstractContentContainer from '../Components/AbstractComponents/abstractContentContainer'
import { navigate,closeDrawer } from './mainNavigation'
import AbstractSwitch from '../Components/AbstractComponents/abstractSwitch'
import { useTheme } from '@react-navigation/native'

const CustomDrawer = () => {

    const { colors } = useTheme();
     
    const onPressProfilePic = () =>{
        closeDrawer()
        navigate("Profile")
    }

    console.log(colors,'colorscolors')

    return (
        <ScreenContainer>
            <View style={[styles.mainContainer,{backgroundColor:colors.background}]}>
               <View style={[styles.viewOne,{borderColor:colors.border}]}>
                   <AbstractContentContainer width={'90%'}>
                   <TouchableOpacity
                   activeOpacity={0.9}
                   onPress={onPressProfilePic}
                   style={styles.profileImageStyle}>
                   <Image source={require('../Assets/Images/myImage.jpeg')} style={{width:'100%',height:'100%',borderRadius:50}} />
                   </TouchableOpacity>
                   </AbstractContentContainer>
               </View>
               <AbstractContentContainer width={'90%'}>
               <View style={{width:'100%',height:50}}>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-between",height:"100%"}}>
                   <Text style={{fontWeight:"500",color:colors.primary}}>Dark Mode</Text>
                   <AbstractSwitch />
                </View>
               </View>
               </AbstractContentContainer>
            </View>
        </ScreenContainer>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    viewOne:{
        width:'100%',
        height:100,
        borderBottomColor:Colors.greyPrimaryOne,
        borderBottomWidth:0.5
    },
    profileImageStyle:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'black'
    }
})