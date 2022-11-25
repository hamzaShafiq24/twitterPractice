import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import ScreenContainer from '../../../Components/AbstractComponents/abstractScreenContainer'
import FocusAwareStatusBar from '../../../Components/AbstractComponents/statusBarConfiguration'
import { Colors } from '../../../Theme'
import AbstractContentContainer from '../../../Components/AbstractComponents/abstractContentContainer'
import AbstractHeaders, { TYPES } from '../../../Components/AbstractComponents/abstractHeaders'
import PostItem from '../../../Components/ModuleComponents/PostItem/index'
import {Posts} from '../../../Utils/mocData'
import TwitterLoader from '../../../Components/ModuleComponents/twitterLoader'
import { openDrawer } from '../../../Navigation/mainNavigation'
import { useTheme } from '@react-navigation/native'
import LiveHead from '../../../Components/ModuleComponents/chatHead'

const HomeScreen = () => {

    const [loader,setLoader] = useState(true)
    const { colors } = useTheme();

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },2000)
    },[])


   if(loader){
     return (
         <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:Colors.whitePrimary}}>
          <TwitterLoader />
         </View>
     )
   }


    return (
        <ScreenContainer
        >
            <View style={styles.mainContainer}>
                <FocusAwareStatusBar barStyle={colors.background == "white" ? 'dark-content' : "light-content"} backgroundColor={Colors.whitePrimary} />
                <AbstractContentContainer width={"95%"} >
                 
                  <AbstractHeaders onPressLeft={()=>openDrawer()}  type={TYPES.home} />

                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Posts}
                    renderItem={({item})=>(<PostItem item={item} />)}
                    keyExtractor={(item)=>item._id}
                    ListFooterComponent={()=>(  <View style={{width:'100%',height:120}} />)}
                    />

                </AbstractContentContainer>
            </View>
        </ScreenContainer>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})