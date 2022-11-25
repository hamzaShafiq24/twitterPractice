import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ConversationItem from '../Components/conversationItem'
import { useGetAllConversations } from '../../../FirebaseHelper'
import { navigate } from '../firebaseMainNavigation'
import ScreenContainer from '../Components/screenContainer'
import ScreenHeader from '../Components/screenHeader'

const ConversationsScreen = () => {

    const { conversationsList } = useGetAllConversations()
    // console.log(conversationsList, "conversationsList")


    return (
        <ScreenContainer
        upperStyle={{backgroundColor: "white"}}
        bottomStyle={{backgroundColor: "white"}}>
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor={"white"} translucent={true} barStyle={'dark-content'} />
            <ScreenHeader screenName={"Conversations"} />
         
            <View style={{width:'90%',alignSelf:'center'}}>
            {conversationsList.map((item, index) => {
                return (
                    <ConversationItem
                        key={index}
                        item={item}
                        onPress={()=>navigate('Chat',{conversationData:item})}
                    />
                )
            })}
            </View>
         
         </View>
        </ScreenContainer>
    )
}

export default ConversationsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})