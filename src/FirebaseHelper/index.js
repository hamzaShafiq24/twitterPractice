import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import ReduxDispatchController from "../Controllers/reduxDispatchController"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux"
import store from '../Store';
import Toast from 'react-native-simple-toast';
import { navigate } from '../Screens/FirebasePractice/firebaseMainNavigation';
import moment from 'moment'


export const AUTH_STORAGE_KEY = 'fireBaseUser';

//Firebase Authentication
export const createUserWithEmailAndPassword = (personObject) => {
    return new Promise((resolve, reject) => {
        auth()
            .createUserWithEmailAndPassword(personObject.email, personObject.password)
            .then(() => {
                console.log('User account created & signed in!');
                resolve({ success: true, message: 'User account created & signed in!' })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    reject({ success: false, message: 'auth/email-already-in-use' })

                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    reject({ success: false, message: 'That email address is invalid!' })

                }
                console.error(error);
                reject({ success: false, message: 'Other Error', error: error })
            });
    })
}


export const signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                ReduxDispatchController.AUTHENTICATION.setCurrentUser(result.user)
                AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(result.user))
                    .then((user) => {
                        console.log("Data Stored in AsyncStorage")
                        database()
                            .ref(`/users/${result.user.uid}`)
                            .once('value')
                            .then((snapshot) => {
                                if (snapshot.val() != null) {
                                    console.log("theennnnnnn")
                                    console.log(snapshot.val(), 'cvnbmjn,km')
                                    resolve({ success: true, message: 'User account created & signed in!', data: result.user })
                                }
                                else {
                                    console.log("else Part")
                                    console.log(result.user, " result.user result.user")
                                    database()
                                        .ref(`/users/${result.user.uid}`)
                                        .set(JSON.stringify(result.user))
                                        .then((res) => {
                                            console.log('Data Stored in RealTime Database.')
                                            resolve({ success: true, message: 'User account created & signed in!', data: result.user })
                                        })
                                        .catch((error) => {
                                            console.log(error, 'error in updating data')
                                            reject(error)
                                        })
                                }
                            })

                            .catch((error) => {
                                console.log(error, 'error in readingData')
                                reject(error)
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                        reject(err);
                    })
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    console.log('The user not found.');
                    reject({ success: false, message: 'auth/user-not-found' })
                }
                console.error(error);
                reject({ success: false, message: 'Other Error', error: error })
            });
    })
}


export const getCurrentUserData = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(AUTH_STORAGE_KEY)
            .then((user) => {
                if (user != null) {
                    resolve(JSON.parse(user))
                }
                else {
                    resolve(null)
                }
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            })
    })
}


export const currentUser = () => {
    return store.getState().AuthReducer.currentUser;
}


//My Own Authentication Methods

export const signUpUsingFirebase = (personObject) => {
    return new Promise((resolve, reject) => {
        database()
            .ref(`/users/${personObject.uid}`)
            .set(personObject)
            .then((result) => {
                console.log('Data Successfully Registered.')
                resolve({ success: true, message: 'User account created & signed in!', data: personObject })
            })
            .catch((error) => {
                console.log(error, 'error in Registering data')
                reject({ success: false, message: 'Error in Registering data', error: error })
            })
    })
}


export const logInUsingFirebase = (email, pass, _callback = () => false) => {
    return new Promise((resolve, reject) => {
        database()
            .ref(`/users/`)
            .orderByChild('email')
            .equalTo(email)
            .once('value')
            .then((snapshot) => {
                if (snapshot.val() == null) {
                    Toast.show('Invalid Email!', Toast.SHORT);
                    _callback(false)
                }
                let userData = Object.values(snapshot.val())[0]
                if (userData.password != pass) {
                    Toast.show('Incorrect Password!', Toast.SHORT);
                    _callback(false)
                }
                else {
                    ReduxDispatchController.AUTHENTICATION.setCurrentUser(userData)
                    AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData))
                        .then((user) => {
                            console.log("Data Stored in A AsyncStorage")
                            Toast.show('Login successfully!', Toast.SHORT);
                            resolve({ success: true, message: 'User Login successfully', data: userData })
                        })
                        .catch((error) => {
                            reject({ success: false, message: 'Error in storing Data in AsyncStorage', error: error })
                        })
                }
            })
            .catch((error) => {
                reject({ success: false, message: 'Error in Getting data from database', error: error })
            })
    })
}


export const logOutFromApp = () => {
    return new Promise((resolve, reject) => {
        ReduxDispatchController.ClearEverything.clearing()
        AsyncStorage.clear()
            .then(() => {
                resolve(true)
            })
            .catch((error) => {
                reject("Error in Clearing AsyncStorage", error)
            })
    })
}

export const createConversation = (receiverData) => {

    return new Promise((resolve, reject) => {
        const userData = currentUser()

        let roomId = `${Math.floor(Math.random() * 1234567890643)}`
        let myData = {
            uid:userData.uid,
            name: userData.name,
            image: userData.image,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            lastMessage: "",
            roomId,
            createdAt: moment().format()
        }

        const p1 = new Promise((resolve, reject) => {
            database()
                .ref(`/conversations/${receiverData.uid}/${userData.uid}`)
                .update(myData)
                .then(() => {
                    resolve(true)
                    console.log('Data Updated.')
                })
                .catch((error) => {
                    reject(error)
                })
        })

        const p2 = new Promise((resolve, reject) => {
            delete receiverData["password"]
            receiverData.lastMessage = ""
            receiverData.roomId = roomId
            receiverData.createdAt = moment().format()
            database()
                .ref(`/conversations/${userData.uid}/${receiverData.uid}`)
                .update(receiverData)
                .then(() => {
                    resolve(true)
                    console.log('Data Updated.')
                })
                .catch((error) => {
                    reject(error)
                })
        })


        Promise.all([p1, p2])
            .then((result) => {
                navigate('Conversation')
                resolve(true)
            })
            .catch((error) => {
                reject(error)
            })

    })
}


export const conversationCreatorHandler = (receiverData) => {
    const userData = currentUser()
    const CONVERSATION_AVAILABLE = "ConversationAvailable"
    const CONVERSATION_NOT_AVAILABLE = "ConversationNotAvailable"

    const p1 = new Promise((resolve, reject) => {
        database()
            .ref(`/conversations/${receiverData.uid}/${userData.uid}`)
            .once('value')
            .then((snapshot) => {
                // console.log(snapshot.val())
                if (snapshot.val() == null) {
                    resolve(CONVERSATION_NOT_AVAILABLE)
                }
                else {
                    resolve(CONVERSATION_AVAILABLE)
                }
            })
            .catch((error) => {
                reject(error)
            })
    })

    const p2 = new Promise((resolve, reject) => {
        database()
            .ref(`/conversations/${userData.uid}/${receiverData.uid}`)
            .once('value')
            .then((snapshot) => {
                // console.log(snapshot.val())
                if (snapshot.val() == null) {
                    resolve(CONVERSATION_NOT_AVAILABLE)
                }
                else {
                    resolve(CONVERSATION_AVAILABLE)
                }
            })
            .catch((error) => {
                reject(error)
            })
    })

    Promise.all([p1, p2])
        .then((result) => {
            // console.log(result[0],'result:0 ')
            // console.log(result[1],'result:1 ')
            if (result[0] ==  CONVERSATION_NOT_AVAILABLE && result[1] == CONVERSATION_NOT_AVAILABLE) {
                // console.log("createCoversation Mae")
                createConversation(receiverData)
            }
            else {
                // console.log("navigate Mae")
                navigate('Conversation')
            }
        })
        .catch((error) => {
            reject(error)
        })


}


export const getAllConversations = () => {
    return new Promise((resolve, reject) => {
        const userData = currentUser()
        database()
            .ref(`/conversations/${userData.uid}`)
            .on("value", (snapshot) => {
                if (snapshot.val() != null) {
                    resolve(Object.values(snapshot.val()))
                }
            })
    })
}


export const sendMessage = (receiverData, message) => {

    return new Promise((resolve, reject) => {
        const userData = currentUser()

        let messageData = {
            roomId: receiverData.roomId,
            message: message,
            from: userData.uid,
            to: receiverData.uid,
            sendTime: moment().format(),
            messageType: "text",
            status: 'send'
        }

        const newReference = database().ref(`/messages/${receiverData.roomId}`).push()
        messageData.id = newReference.key
        newReference
            .set(messageData)
            .then(() => {

                let conversationListUpdate = {
                    lastMessage: message,
                    sendTime: messageData.sendTime
                }

                database()
                    .ref(`/conversations/${receiverData.uid}/${userData.uid}`)
                    .update(conversationListUpdate)
                    .then(() => {
                        console.log('Data Updated.')
                    })

                database()
                    .ref(`/conversations/${userData.uid}/${receiverData.uid}`)
                    .update(conversationListUpdate)
                    .then(() => {
                        console.log('Data Updated.')
                    })
                resolve(true)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })

    })


}



//RealtIme DataBase
export const creatingAReferenceNode = (dataObj) => {
    return new Promise((resolve, reject) => {
        database()
            .ref(`/users/${currentUser().uid}`)
            .set([dataObj])
            .then((result) => {
                console.log('hai')
                resolve(result)
            })
            .catch((error) => {
                console.log("oppppss")
                console.log(error, 'Error in creatingAReference')
                reject(error)
            })
    })
}



export const settingData = (dataObj) => {
    return new Promise((resolve, reject) => {
        const userId = currentUser().uid
        database()
            .ref(`/users/${userId}`)
            .once('value')
            .then(snapshot => {
                // console.log('User data: ', snapshot.val());
                if (snapshot.val() != null) {
                    console.log("Second Time")
                    database()
                        .ref(`/users/${userId}`)
                        .once('value')
                        .then(snapshot => {
                            // console.log('User data Second Time: ', snapshot.val());
                            let arr1 = snapshot.val().persons;
                            let arr2 = [dataObj];
                            let concatenatedArray = arr1.concat(arr2);
                            database()
                                .ref(`/users/${userId}`)
                                .set({ ...snapshot.val(), persons: concatenatedArray })
                                .then((result) => {
                                    console.log('Data updated.')
                                    resolve(result)
                                })
                                .catch((error) => {
                                    console.log(error, 'error in updating data')
                                    reject(error)
                                })
                        })
                        .catch((error) => {
                            console.log(error, 'error in readingData')
                            reject(error)
                        })

                }
                else {
                    database()
                        .ref(`/users/${userId}`)
                        .set({ persons: [dataObj] })
                        .then((result) => {
                            console.log("New Reference Created in RealTime DataBase")
                            resolve(result)
                        })
                        .catch((error) => {
                            console.log(error, 'Error in creatingAReferenceNodeInSettingData')
                            reject(error)
                        })
                }
            })
            .catch((error) => {
                console.log(error, 'Error in checkingValueofTheReference')
                reject(error)
            })
    })
}





//Hooks
export const useContacts = () => {

    const [contacts, setContacts] = useState([])
    const loggedInUserId = currentUser().uid

    useEffect(() => {
        const onValueChange =
            database()
                .ref(`/users/`)
                .on('value', snapshot => {
                    // console.log('User data: ', snapshot.val());
                    // console.log(snapshot.val(),'useScontacts Hooooks')
                    setContacts(Object.values(snapshot.val()).filter((item) => item.uid != loggedInUserId))
                });

        // Stop listening for updates when no longer required
        return () => database().ref(`/users/`).off('value', onValueChange);
    }, [])


    return { contacts }
}


export const useGetAllConversations = () => {

    const [conversationsList, setConversationsList] = useState([])
    const userData = currentUser()

    useEffect(() => {
        const onValueChange =
            database()
                .ref(`/conversations/${userData.uid}`)
                .on("value", (snapshot) => {
                    if (snapshot.val() != null) {
                        setConversationsList(Object.values(snapshot.val()))
                    }
                })
        // Stop listening for updates when no longer required
        return () => database().ref(`/conversations/${userData.uid}`).off('value', onValueChange);
    }, [])


    return { conversationsList }
}


export const useSpecificConversation = (conversationData) => {

    const [conversationMessages, setConversationMessages] = useState([])
    const userData = currentUser()

    // console.log(conversationData, 'conversationData')

    useEffect(() => {
        const onValueChange =
            database()
                .ref(`/messages/${conversationData.roomId}`)
                .on("child_added", (snapshot) => {
                    // console.log(snapshot.val())
                    setConversationMessages((prev) => [...prev, snapshot.val()])
                })
        // Stop listening for updates when no longer required
        return () => database().ref(`/messages/${conversationData.roomId}`).off('child_added', onValueChange);
    }, [])


    return { conversationMessages }
}
