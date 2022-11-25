import { StatusBar, StyleSheet, Text, View, FlatList, RefreshControl, KeyboardAvoidingView } from 'react-native'
import React, { useRef } from 'react'
import ChatHeader from '../Components/chatHeader'
import ChatFooter from '../Components/chatFooter'
import MyMessage from '../Components/MyMessage'
import MessageBody from '../Components/MyMessage/messageBody'
import { useSpecificConversation } from '../../../FirebaseHelper'
import ScreenContainer from '../Components/screenContainer'

const ChatScreen = ({ route }) => {

    const conversationData = route.params?.conversationData
    const flatListRef = useRef(null)
    const { conversationMessages } = useSpecificConversation(conversationData)

    return (
        <ScreenContainer
            upperStyle={{ backgroundColor: "white" }}
            bottomStyle={{ backgroundColor: "white" }}>

            <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.mainContainer}
            >
                <StatusBar backgroundColor={"white"} translucent={true} barStyle={'dark-content'} />
                <ChatHeader headerDetails={conversationData} />

                    <FlatList
                        contentContainerStyle={{
                            width: "100%",
                            alignSelf: "center",
                        }}
                        ref={flatListRef}
                        showsVerticalScrollIndicator={false}
                        inverted={-1}
                        data={conversationMessages.slice()?.reverse() || []}
                        renderItem={({ item }) => {
                            return (
                                <MyMessage
                                    message={item}
                                >
                                    <MessageBody item={item} />
                                </MyMessage>
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />

                <ChatFooter conversationData={conversationData} />
            </KeyboardAvoidingView>

        </ScreenContainer>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})