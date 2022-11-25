import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { creatingAReferenceNode, currentUser, settingData, useContacts, createConversation, conversationCreatorHandler } from '../../../FirebaseHelper'
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactsItem from '../Components/contactsItem';
import Header from '../Components/header';
import { navigate } from '../firebaseMainNavigation';
import ScreenContainer from '../Components/screenContainer';



const ContactsScreen = () => {

    const user = currentUser()
    console.log('User Logged In =>', user)

    const { contacts } = useContacts()

    return (
        <ScreenContainer
            upperStyle={{ backgroundColor: "white" }}
            bottomStyle={{ backgroundColor: "white" }}>
            <SafeAreaView style={styles.mainContainer}>
                <StatusBar backgroundColor={"white"} translucent={true} barStyle={'dark-content'} />
                <Header />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <View style={{ height: 10 }} />

                    <FlatList
                        data={contacts}
                        keyExtractor={(item) => item.uid}
                        renderItem={({item}) => {
                            return (
                                <ContactsItem
                                    onPress={() => conversationCreatorHandler(item)}
                                    item={item} />
                            )
                        }}
                        ListEmptyComponent={() => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                                    <Text style={{ color: 'grey' }}>No Users Available..!</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        </ScreenContainer>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})